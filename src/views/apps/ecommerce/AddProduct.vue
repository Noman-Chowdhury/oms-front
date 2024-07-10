<script setup>
import DashboardBreadcrumb from "@/components/DashboardBreadcrumb.vue";
import TextEditorComponent from "@/components/TextEditorComponent.vue";
import {computed, onMounted, ref, watch, watchEffect} from "vue";
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/themes/dark.css';

import { Tooltip } from "bootstrap";

const config = ref({
  wrap: true, // set wrap to true only when using 'input-group'
  altFormat: 'M j, Y',
  altInput: true,
  dateFormat: 'Y-m-d',
});

const dateTimeConfig = ref({
  wrap: true, // set wrap to true only when using 'input-group'
  enableTime: true,
  altInput: true,
  dateFormat: 'Y-m-d H:i',
});

const date = ref(new Date());
const saleStartDate = ref('');
const saleEndDate = ref('');
const description = ref('');
const tag = ref('');
const tags = ref([]);
const isNewCategory = ref(false);

const categories = ref([
  {
    id: 1,
    name: "Finance",
    children: [
      {
        id: 2,
        name: "Banking"
      },
      {
        id: 3,
        name: "Accounting",
        children: [
          {
            id: 4,
            name: 'BangladeshBank'
          }
        ]
      },
    ]
  },
  {
    id: 5,
    name: "Fashion & Clothing",
    children: [
      {
        id: 6,
        name: "t-Shirt"
      },
      {
        id: 7,
        name: "Shirt",
        children: [
          {
            id: 8,
            name: 'Casual Shirt'
          }
        ]
      }
    ]
  },
  {
    id: 9,
    name: 'Bag'
  },
  {
    id: 10,
    name: 'Monitor'
  },
  {
    id: 11,
    name: 'Keyboard'
  },
  {
    id: 13,
    name: 'Mouse'
  }
]);

const title = ref('');
const slug = ref('');
const slugText = ref('');
const isSlugEdit = ref(false);
const attributes = ref([]);

const addAttributeInput = () => {
  attributes.value.push({ value: '' });
};

const removeAttributeInput = (index) => {
  attributes.value.splice(index, 1);
};

const slugEditToggle = (() => {
  isSlugEdit.value = !isSlugEdit.value
})

const toggleChildren = (category) => {
  category.showChildren = !category.showChildren;
};

const handleAddTag = (() => {
  if (tag.value !== '') {
    tags.value.push(tag.value)
    tag.value = '';
  }
});

const removeTag = ((deleteTag) => {
    tags.value = tags.value.filter((item) => item !== deleteTag);
});

watch(title, (newText, oldText) => {
  slug.value = newText.toLowerCase()
      .replace(/[^\w ]+/g,'')
      .replace(/ +/g,'-');
})

onMounted(() => {
  setTimeout(() => {
    // useAddProduct();
  }, 500);

  new Tooltip(document.body, {
    selector: "[data-bs-toggle='tooltip']",
  })
})
</script>

<template>
<DashboardBreadcrumb>
  <template #title>Add New Product</template>
  <template #buttons>
    <router-link :to="{ name: 'all_product' }" class="btn btn-sm btn-primary">View All</router-link>
  </template>
</DashboardBreadcrumb>
  <div class="row g-4">
    <div class="col-xxl-9 col-lg-8">
      <div class="panel mb-25">
        <div class="panel-body product-title-input">
          <label class="form-label">Write Title</label>
          <input type="text" v-model="title" class="form-control" id="productTitle" placeholder="Title for product">
          <p class="perma-txt">
            Permalink: <span class="site-link text-primary" id="productPermalink">https://example.com/{{ slug }}</span>
            <input v-if="isSlugEdit" type="text" v-model="slug" ref="slugText" class="form-control form-control-sm ms-2" id="editPermalink">
            <button v-if="!isSlugEdit" class="btn-flush bg-primary ms-2" id="editPermaBtn" @click="slugEditToggle">Edit</button>
            <template v-if="isSlugEdit">
              <button class="btn-flush bg-success ms-2" id="createPerma" @click="slugEditToggle">OK</button>
              <button class="btn-flush bg-danger ms-2" id="cancelPerma" @click="slugEditToggle">Cancel</button>
            </template>
          </p>
        </div>
      </div>
      <div class="panel mb-25">
        <div class="panel-header">
          <h5>Product Description</h5>
          <div class="btn-box d-flex gap-2">
            <button class="btn btn-sm btn-icon btn-outline-primary"><i class="fa-light fa-arrows-rotate"></i></button>
            <button class="btn btn-sm btn-icon btn-outline-primary" data-bs-toggle="collapse" href="#collapseProductDescription" role="button" aria-expanded="false" aria-controls="collapseProductDescription">
              <i class="fa-light fa-angle-up"></i>
            </button>
          </div>
        </div>
        <div class="panel-body show" id="collapseProductDescription">
          <div class="editor">
            <TextEditorComponent v-model="description"/>
          </div>
        </div>
      </div>
      <div class="panel mb-25">
        <div class="panel-header">
          <h5>Product Data</h5>
          <div class="panel-header-right">
            <div class="form-check d-flex gap-4">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="generalProductData">
                <label class="form-check-label" for="generalProductData">
                  General
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="DownloadableProductData">
                <label class="form-check-label" for="DownloadableProductData">
                  Downloadable
                </label>
              </div>
            </div>
          </div>
          <div class="btn-box d-flex gap-2">
            <button class="btn btn-sm btn-icon btn-outline-primary"><i class="fa-light fa-arrows-rotate"></i></button>
            <button class="btn btn-sm btn-icon btn-outline-primary panel-close" data-bs-toggle="collapse" href="#collapseProductData" role="button" aria-expanded="false" aria-controls="collapseProductData">
              <i class="fa-light fa-angle-up"></i>
            </button>
          </div>
        </div>
        <div class="panel-body show" id="collapseProductData">
          <nav>
            <div class="btn-box d-flex flex-wrap gap-1 mb-25" id="nav-tab" role="tablist">
              <button class="btn btn-sm btn-outline-primary active" id="nav-media-tab" data-bs-toggle="tab" data-bs-target="#nav-media" type="button" role="tab" aria-controls="nav-media" aria-selected="true">Media</button>
              <button class="btn btn-sm btn-outline-primary" id="nav-inventory-tab" data-bs-toggle="tab" data-bs-target="#nav-inventory" type="button" role="tab" aria-controls="nav-inventory" aria-selected="false">Inventory</button>
              <button class="btn btn-sm btn-outline-primary" id="nav-price-tab" data-bs-toggle="tab" data-bs-target="#nav-price" type="button" role="tab" aria-controls="nav-price" aria-selected="false">Price</button>
              <button class="btn btn-sm btn-outline-primary" id="nav-attribute-tab" data-bs-toggle="tab" data-bs-target="#nav-attribute" type="button" role="tab" aria-controls="nav-attribute" aria-selected="false">Attribute</button>
              <button class="btn btn-sm btn-outline-primary" id="nav-shipping-info-tab" data-bs-toggle="tab" data-bs-target="#nav-shipping-info" type="button" role="tab" aria-controls="nav-shipping-info" aria-selected="false">Shipping info</button>
              <button class="btn btn-sm btn-outline-primary" id="nav-video-tab" data-bs-toggle="tab" data-bs-target="#nav-video" type="button" role="tab" aria-controls="nav-video" aria-selected="false">Video</button>
              <button class="btn btn-sm btn-outline-primary" id="nav-shipping-configuration-tab" data-bs-toggle="tab" data-bs-target="#nav-shipping-configuration" type="button" role="tab" aria-controls="nav-shipping-configuration" aria-selected="false">Shipping Configuration</button>
              <button class="btn btn-sm btn-outline-primary" id="nav-offer-tab" data-bs-toggle="tab" data-bs-target="#nav-offer" type="button" role="tab" aria-controls="nav-offer" aria-selected="false">Offer</button>
            </div>
          </nav>
          <div class="tab-content product-data-tab" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-media" role="tabpanel" aria-labelledby="nav-media-tab" tabindex="0">
              <div class="row">
                <div class="col-xxl-3 col-md-4 col-5 col-xs-12">
                  <div class="add-thumbnail product-image-upload">
                    <div class="part-txt">
                      <h5>Add thumbnail <span>(jpeg/png)</span></h5>
                    </div>
                    <div class="jquery-uploader">
                      <div class="jquery-uploader-preview-container">
                        <div class="jquery-uploader-select-card">
                          <div class="jquery-uploader-select">
                              <input type="file" class="opacity-0 position-absolute h-100 w-100" />
                            <div class="upload-button">
                              <i class="fa-light fa-image"></i><br><span>Recommended: 800 * 800</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-9 col-md-8 col-7 col-xs-12">
                  <div class="add-gallery-img product-image-upload">
                    <div class="part-txt">
                      <h5>Add gallery <span>(jpeg/png)</span></h5>
                    </div>
                    <div class="jquery-uploader">
                      <div class="jquery-uploader-preview-container">
                        <div class="jquery-uploader-select-card">
                          <div class="jquery-uploader-select">
                              <input type="file" class="opacity-0 position-absolute h-100 w-100" multiple />
                            <div class="upload-button">
                              <i class="fa-light fa-image"></i><br><span>Recommended: 800 * 800</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="nav-inventory" role="tabpanel" aria-labelledby="nav-inventory-tab" tabindex="0">
              <form>
                <div class="row align-items-center g-3 mb-3">
                  <label class="col-md-2 col-form-label col-form-label-sm">SKU <span class="btn-flush fs-14" data-bs-toggle="tooltip" data-bs-custom-class="custom-tooltip" data-bs-title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."><i class="fa-solid fa-circle-question"></i></span></label>
                  <div class="col-md-10">
                    <input type="text" class="form-control form-control-sm" id="SKU">
                  </div>
                </div>
                <div class="row align-items-center g-3 mb-3">
                  <label class="col-md-2 col-form-label col-form-label-sm">Manage Stock?</label>
                  <div class="col-md-10">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="manageStock">
                      <label class="form-check-label" for="manageStock">
                        Manage stock level (quantity)
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center g-3 mb-3">
                  <label class="col-md-2 col-form-label col-form-label-sm">Stock Status <span class="btn-flush fs-14" data-bs-toggle="tooltip" data-bs-custom-class="custom-tooltip" data-bs-title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."><i class="fa-solid fa-circle-question"></i></span></label>
                  <div class="col-md-10">
                    <select class="form-control form-control-sm form-select">
                      <option value="0">In stock</option>
                      <option value="1">Out of stock</option>
                      <option value="2">On backorder</option>
                    </select>
                  </div>
                </div>
                <div class="row align-items-center g-3 mb-3">
                  <label class="col-md-2 col-form-label col-form-label-sm">Sold individually <span class="btn-flush fs-14" data-bs-toggle="tooltip" data-bs-custom-class="custom-tooltip" data-bs-title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."><i class="fa-solid fa-circle-question"></i></span></label>
                  <div class="col-md-10">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="soldIndividually">
                      <label class="form-check-label" for="soldIndividually">
                        Limit purchases to 1 item per order
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center g-3 mb-3">
                  <label class="col-md-2 col-form-label col-form-label-sm">Product Code <span class="btn-flush fs-14" data-bs-toggle="tooltip" data-bs-custom-class="custom-tooltip" data-bs-title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."><i class="fa-solid fa-circle-question"></i></span></label>
                  <div class="col-md-10">
                    <input type="text" class="form-control form-control-sm" id="productCode">
                  </div>
                </div>
                <div class="row align-items-center g-3 mb-3">
                  <label for="lowStockWarning" class="col-md-2 col-form-label col-form-label-sm">Low Stock Warning</label>
                  <div class="col-md-10">
                    <input type="number" class="form-control form-control-sm" id="lowStockWarning">
                  </div>
                </div>
                <div class="row align-items-center g-3 mb-3">
                  <label for="showStockQuantity" class="col-md-2 col-8 col-form-label col-form-label-sm">Show Stock Quantity</label>
                  <div class="col-md-10 col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="showStockQuantity">
                    </div>
                  </div>
                </div>
                <div class="row align-items-center g-3 mb-3">
                  <label for="showStockWithText" class="col-md-2 col-8 col-form-label col-form-label-sm">Show Stock With Text</label>
                  <div class="col-md-10 col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="showStockWithText">
                    </div>
                  </div>
                </div>
                <div class="row align-items-center g-3">
                  <label for="hideStock" class="col-md-2 col-8 col-form-label col-form-label-sm">Hide Stock</label>
                  <div class="col-md-10 col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="hideStock">
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="tab-pane fade" id="nav-price" role="tabpanel" aria-labelledby="nav-price-tab" tabindex="0">
              <form>
                <div class="row g-3 mb-3">
                  <label for="regularPrice" class="col-md-2 col-form-label col-form-label-sm">Regular Price ($)</label>
                  <div class="col-md-10">
                    <input type="number" class="form-control form-control-sm" id="regularPrice">
                  </div>
                </div>
                <div class="row g-3 mb-3">
                  <label for="salePrice" class="col-md-2 col-form-label col-form-label-sm">Discount ($)</label>
                  <div class="col-md-8">
                    <input type="number" class="form-control form-control-sm" id="salePrice">
                  </div>
                  <div class="col-md-2">
                    <div class="form-control-sm p-0">
                      <select class="form-control form-control-sm form-select">
                        <option value="1">Flat</option>
                        <option value="2">Discount</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row g-3">
                  <label for="PriceDateStart" class="col-md-2 col-form-label col-form-label-sm">Sale price dates</label>
                  <div class="col-md-5">
                    <flat-pickr
                      v-model="saleStartDate"
                      :config="dateTimeConfig"
                      class="form-control form-control-sm date-picker"
                      placeholder="DD MMMM YYYY - HH:MM"
                      name="date"
                    />
                  </div>
                  <div class="col-md-5">
                    <flat-pickr
                      v-model="saleEndDate"
                      :config="dateTimeConfig"
                      class="form-control form-control-sm date-picker"
                      placeholder="DD MMMM YYYY - HH:MM"
                      name="date"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="tab-pane fade" id="nav-attribute" role="tabpanel" aria-labelledby="nav-attribute-tab" tabindex="0">
              <div class="add-product-attribute">
                <div class="form-group">
                  <select class="form-control form-control-sm form-select">
                    <option value="">Custom Product Attribute</option>
                    <option value="">Brand</option>
                    <option value="">Color</option>
                    <option value="">Size</option>
                  </select>
                  <button class="btn btn-sm btn-icon btn-primary" id="addAttr" @click="addAttributeInput"><i class="fa-light fa-plus"></i></button>
                </div>
              </div>
              <div v-for="(attribute, index) in attributes" :key="index" class="form-group rounded border p-3 d-block mt-20">
                    <div class="row g-3">
                        <div class="col-md-4">
                            <input type="text" class="form-control form-control-sm mb-10" placeholder="Name">
                            <div class="form-check">
                                <label class="form-check-label p-0">
                                    <input class="form-check-input me-2" type="checkbox" value="">
                                    Visible on the product page
                                </label>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="row g-0 g-lg-3 g-sm-1">
                                <div class="col-11 col-xs-10">
                                    <textarea class="form-control" placeholder="Enter some text, or some attributes by '|' separating values."></textarea>
                                </div>
                                <div class="col-1 col-xs-2 d-flex justify-content-end">
                                    <button class="btn btn-sm btn-icon btn-danger remove-option w-100" @click="removeAttributeInput(index)"><i class="fa-light fa-trash-can"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-shipping-info" role="tabpanel" aria-labelledby="nav-shipping-info-tab" tabindex="0">
              <form>
                <div class="row g-3 mb-3">
                  <label class="col-md-2 col-form-label col-form-label-sm">Weight (kg) <span class="btn-flush fs-14" data-bs-toggle="tooltip" data-bs-custom-class="custom-tooltip" data-bs-title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."><i class="fa-solid fa-circle-question"></i></span></label>
                  <div class="col-md-10">
                    <input type="number" class="form-control form-control-sm" id="weight" placeholder="0">
                  </div>
                </div>
                <div class="row g-3 mb-3">
                  <label class="col-md-2 col-form-label col-form-label-sm">Dimensions (cm) <span class="btn-flush fs-14" data-bs-toggle="tooltip" data-bs-custom-class="custom-tooltip" data-bs-title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."><i class="fa-solid fa-circle-question"></i></span></label>
                  <div class="col-md-10">
                    <div class="row g-3">
                      <div class="col-md-4">
                        <input type="number" class="form-control form-control-sm" id="Dimensions" placeholder="Length">
                      </div>
                      <div class="col-md-4">
                        <input type="number" class="form-control form-control-sm" placeholder="Width">
                      </div>
                      <div class="col-md-4">
                        <input type="number" class="form-control form-control-sm" placeholder="Height">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row g-3">
                  <label class="col-md-2 col-form-label col-form-label-sm">Shipping Class <span class="btn-flush fs-14" data-bs-toggle="tooltip" data-bs-custom-class="custom-tooltip" data-bs-title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."><i class="fa-solid fa-circle-question"></i></span></label>
                  <div class="col-md-10">
                    <select class="form-control form-control-sm form-select">
                      <option value="0">No Shipping Class</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div class="tab-pane fade" id="nav-video" role="tabpanel" aria-labelledby="nav-video-tab" tabindex="0">
              <form>
                <div class="row align-items-center g-3 mb-3">
                  <label class="col-md-2 col-form-label col-form-label-sm">Video Provider</label>
                  <div class="col-md-10">
                    <select class="form-control form-control-sm form-select" data-placeholder="Select Provider">
                      <option value="">Select Provider</option>
                      <option value="0">Youtube</option>
                      <option value="1">Vimeo</option>
                    </select>
                  </div>
                </div>
                <div class="row g-3">
                  <label class="col-md-2 col-form-label col-form-label-sm">Video Link</label>
                  <div class="col-md-10">
                    <input type="url" class="form-control form-control-sm" name="video_link" placeholder="Video Link">
                    <span class="input-additional-txt">Use proper link without extra parameter. Don't use short share link/embeded iframe code.</span>
                  </div>
                </div>
              </form>
            </div>
            <div class="tab-pane fade" id="nav-shipping-configuration" role="tabpanel" aria-labelledby="nav-shipping-configuration-tab" tabindex="0">
              <form>
                <div class="row align-items-center g-3 mb-3">
                  <label for="estimateShippingTime" class="col-md-2 col-form-label col-form-label-sm">Estimate Shipping Time</label>
                  <div class="col-md-10">
                    <div class="input-group">
                      <input type="number" class="form-control form-control-sm" id="estimateShippingTime">
                      <span class="input-group-text">Days</span>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center g-3 mb-3">
                  <label for="freeShipping" class="col-md-2 col-8 col-form-label col-form-label-sm">Free Shipping</label>
                  <div class="col-md-10 col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="freeShipping">
                    </div>
                  </div>
                </div>
                <div class="row align-items-center g-3 mb-3">
                  <label for="flatRate" class="col-md-2 col-8 col-form-label col-form-label-sm">Flat Rate</label>
                  <div class="col-md-10 col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="flatRate">
                    </div>
                  </div>
                </div>
                <div class="row align-items-center g-3 mb-3">
                  <label for="QuantityMulitiply" class="col-md-2 col-8 col-form-label col-form-label-sm">Quantity Mulitiply</label>
                  <div class="col-md-10 col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="QuantityMulitiply">
                    </div>
                  </div>
                </div>
                <div class="row align-items-center g-3">
                  <label for="cashOnDelivery" class="col-md-2 col-8 col-form-label col-form-label-sm">Cash On Delivery</label>
                  <div class="col-md-10 col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="cashOnDelivery">
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="tab-pane fade" id="nav-offer" role="tabpanel" aria-labelledby="nav-offer-tab" tabindex="0">
              <form>
                <div class="row align-items-center g-3 mb-3">
                  <label for="flashDeal" class="col-md-2 col-8 col-form-label col-form-label-sm">Flash Deal</label>
                  <div class="col-md-10 col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="flashDeal">
                    </div>
                  </div>
                </div>
                <div class="row align-items-center g-3 mb-3">
                  <label for="todaysDeal" class="col-md-2 col-8 col-form-label col-form-label-sm">Today's Deal</label>
                  <div class="col-md-10 col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="todaysDeal">
                    </div>
                  </div>
                </div>
                <div class="row align-items-center g-3">
                  <label for="featured" class="col-md-2 col-8 col-form-label col-form-label-sm">Featured</label>
                  <div class="col-md-10 col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="featured">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-header">
          <h5>SEO Data</h5>
          <div class="btn-box d-flex gap-2">
            <button class="btn btn-sm btn-icon btn-outline-primary"><i class="fa-light fa-arrows-rotate"></i></button>
            <button class="btn btn-sm btn-icon btn-outline-primary panel-close" data-bs-toggle="collapse" href="#collapseProductSeo" role="button" aria-expanded="false" aria-controls="collapseProductSeo">
              <i class="fa-light fa-angle-up"></i>
            </button>
          </div>
        </div>
        <div class="panel-body show" id="collapseProductSeo">
          <form>
            <div class="row g-3 mb-3">
              <label class="col-xxl-2 col-md-3 col-form-label col-form-label-sm pe-0">Focus keyphrase <span class="btn-flush fs-14" data-bs-toggle="tooltip" data-bs-custom-class="custom-tooltip" data-bs-title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."><i class="fa-solid fa-circle-question"></i></span></label>
              <div class="col-xxl-10 col-md-9">
                <input type="text" class="form-control form-control-sm" id="focusKeyphrase">
              </div>
            </div>
            <div class="row g-3 mb-3">
              <label for="metaTitle" class="col-xxl-2 col-md-3 col-form-label col-form-label-sm">Meta Title</label>
              <div class="col-xxl-10 col-md-9">
                <input type="text" class="form-control form-control-sm" id="metaTitle">
              </div>
            </div>
            <div class="row g-3 mb-3">
              <label for="slugText" class="col-xxl-2 col-md-3 col-form-label col-form-label-sm">Slug</label>
              <div class="col-xxl-10 col-md-9">
                <input type="text" class="form-control form-control-sm" id="slugText">
              </div>
            </div>
            <div class="row g-3">
              <label for="metaDscr" class="col-xxl-2 col-md-3 col-form-label col-form-label-sm">Meta Description</label>
              <div class="col-xxl-10 col-md-9">
                <textarea class="form-control" rows="5" id="metaDscr"></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-lg-4 add-product-sidebar">
      <div class="mb-25 w-100">
        <a href="#" class="btn btn-primary d-block">Preview Changed</a>
      </div>
      <div class="panel mb-25">
        <div class="panel-header">
          <h5>Published</h5>
          <div class="btn-box d-flex gap-2">
            <button class="btn btn-sm btn-icon btn-outline-primary"><i class="fa-light fa-arrows-rotate"></i></button>
            <button class="btn btn-sm btn-icon btn-outline-primary panel-close" data-bs-toggle="collapse" href="#collapseProductPublished" role="button" aria-expanded="false" aria-controls="collapseProductPublished">
              <i class="fa-light fa-angle-up"></i>
            </button>
          </div>
        </div>
        <div class="panel-body show" id="collapseProductPublished">
          <div class="row g-3">
            <div class="col-6">
              <label class="form-label">Status</label>
              <select class="form-control form-control-sm form-select">
                <option value="0">Published</option>
                <option value="1">Draft</option>
              </select>
            </div>
            <div class="col-6">
              <label class="form-label">Visibility</label>
              <select class="form-control form-control-sm form-select">
                <option value="0">Public</option>
                <option value="1">Pass. Protected</option>
                <option value="2">Private</option>
              </select>
            </div>
            <div class="col-12">
              <div class="publish-date">
                <label>Published on: </label>
                <flat-pickr
                    v-model="date"
                    :config="config"
                    class="form-control form-control-sm date-picker"
                    placeholder="Eg: 12 Feb, 20"
                    name="date"
                />
              </div>
              <div class="btn-box d-flex justify-content-end gap-2">
                <button class="btn btn-sm btn-outline-primary">Save</button>
                <button class="btn btn-sm btn-primary">Publish</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel mb-25">
        <div class="panel-header">
          <h5>Category</h5>
          <div class="btn-box d-flex gap-2">
            <button class="btn btn-sm btn-icon btn-outline-primary"><i class="fa-light fa-arrows-rotate"></i></button>
            <button class="btn btn-sm btn-icon btn-outline-primary panel-close" data-bs-toggle="collapse" href="#collapseProductCategory" role="button" aria-expanded="false" aria-controls="collapseProductCategory">
              <i class="fa-light fa-angle-up"></i>
            </button>
          </div>
        </div>
        <div class="panel-body show" id="collapseProductCategory">
          <form class="input-group-with-icon mb-20">
            <span class="input-icon"><i class="fa-light fa-magnifying-glass"></i></span>
            <input type="search" placeholder="Search category">
          </form>
          <div class="product-categories">
            <div v-for="category in categories" class="cat-group">
              <div class="form-check">
                <input class="form-check-input has-sub" type="checkbox" :id="'cat_'+category.id">
                <label class="form-check-label" :for="'cat_'+category.id">
                  {{ category.name }} <span v-if="category.children">
                  <i :class="category.showChildren ? 'fa-light fa-minus' : 'fa-light fa-plus'" @click="toggleChildren(category)"></i>
                </span>
                </label>
              </div>
              <template v-if="category.children">
                <div v-for="children in category.children" class="sub-cat-group" :class="{'d-none': !category.showChildren}">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" :id="'cat_'+children.id">
                    <label class="form-check-label" :for="'cat_'+children.id">
                      {{ children.name }} <span v-if="children.children">
                      <i :class="children.showChildren ? 'fa-light fa-minus' : 'fa-light fa-plus'" @click="toggleChildren(children)"></i>
                    </span>
                    </label>
                  </div>
                  <div v-if="children.children" class="cat-group" :class="{'d-none': !children.showChildren}">
                    <div v-for="child in children.children" class="sub-cat-group">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" :id="'cat_'+child.id">
                        <label class="form-check-label" :for="'cat_'+child.id">
                          {{ child.name }}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
        <div class="border-top"></div>
        <div class="panel-body">
          <div class="d-flex justify-content-end">
            <button class="btn-flush add-category-btn" @click="isNewCategory = !isNewCategory">
              <i class="fa-light" :class="[isNewCategory ? 'fa-minus' : 'fa-plus']"></i> Add new category
            </button>
          </div>
          <div class="add-new-category-panel" :class="{'d-none': !isNewCategory}">
            <form>
              <input type="text" class="form-control form-control-sm mb-3" placeholder="Category Name">
              <select class="form-control form-control-sm form-select mb-3" data-placeholder="Select Parent">
                <option value="">Select Parent</option>
                <option value="0">Finance</option>
                <option value="1">Banking</option>
                <option value="2">Accounting</option>
                <option value="3">Bangladesh Bank</option>
                <option value="4">Fashion & Clothing</option>
                <option value="5">t-Shirt</option>
                <option value="6">Shirt</option>
                <option value="7">Casual Shirt</option>
                <option value="8">Bag</option>
                <option value="9">Monitor</option>
                <option value="10">Keyboard</option>
                <option value="11">Mouse</option>
              </select>
              <div class="d-flex justify-content-end">
                <button class="btn btn-sm btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-header">
          <h5>Products Tags</h5>
          <div class="btn-box d-flex gap-2">
            <button class="btn btn-sm btn-icon btn-outline-primary"><i class="fa-light fa-arrows-rotate"></i></button>
            <button class="btn btn-sm btn-icon btn-outline-primary panel-close" data-bs-toggle="collapse" href="#collapseProductTag" role="button" aria-expanded="false" aria-controls="collapseProductTag">
              <i class="fa-light fa-angle-up"></i>
            </button>
          </div>
        </div>
        <div class="panel-body show" id="collapseProductTag">
          <div class="product-tag-area">
            <div class="row g-3">
              <div class="col-9">
                <input type="text" v-model="tag" class="form-control" id="productTags">
              </div>
              <div class="col-3">
                <button class="btn btn-sm btn-primary w-100" id="addTags" @click="handleAddTag">Add</button>
              </div>
            </div>
            <span class="input-txt">Input tags for product</span>
            <div class="all-tags active" id="allTags">
              <div class="item" v-for="(tag, index) in tags" :key="'tag_'+index+tag">
                {{ tag }}
                <span class="close-tag" @click="removeTag(tag)"><i class="fa-regular fa-xmark"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>