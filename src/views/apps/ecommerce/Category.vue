<script setup>
import {onMounted, onUnmounted, shallowRef, ref} from "vue";
import DashboardBreadcrumb from "@/components/DashboardBreadcrumb.vue";

import DigiDataTable from "@/components/datatable/DigiDataTable.vue";
import TableFilterOption from "@/components/datatable/TableFilterOption.vue";
import CategoryTableAction from "@/components/DatatableAction/CategoryTableAction.vue";
import CategoryInfoComponent from "@/components/CategoryInfoComponent.vue";
import CategoryTableFilterOption from "@/components/category/CategoryTableFilterOption.vue";
import PagePanelHeader from "@/components/PagePanelHeader.vue";
import CategoryTableHeaderComponent from "@/components/category/CategoryTableHeaderComponent.vue";

const categoryActionComponent = shallowRef(CategoryTableAction);
const categoryInfoComponent = shallowRef(CategoryInfoComponent);

const table = ref(null);
const selectedItems = ref([]);
const isSearch = ref(true);
const isAddThumbnail = ref(false);

const tableColumns = ref([
  { label: "", key: "selected", type: "checkbox" },
  { label: "Name", key: "name", sortable: true, type: "component" },
  { label: "Description", key: "description", },
  { label: "Slug", key: "slug" },
  { label: "Count", key: "count", sortable: true, type: "link" },
  { label: "Action", key: "action", type: "component" },
]);

const tableData = ref([
  { id: 1, name: {component: categoryInfoComponent, data: {name: 'Electronics', image: new URL ('/src/assets/images/image.png', import.meta.url), category_name: ''}}, description: 'The description is not prominent by default; however, some themes may show it.', slug: 'fashion', count: {name: '10', url: '/all-product' }, action: categoryActionComponent },
  { id: 2, name: {component: categoryInfoComponent, data: {name: 'Fashions', image: new URL ('/src/assets/images/image.png', import.meta.url), category_name: ''}}, description: 'The description is not prominent by default; however, some themes may show it.', slug: 'fashion', count: {name: '30', url: '/all-product' }, action: categoryActionComponent },
  { id: 3, name: {component: categoryInfoComponent, data: {name: 'Mobiles', image: new URL ('/src/assets/images/image.png', import.meta.url), category_name: ''}}, description: 'The description is not prominent by default; however, some themes may show it.', slug: 'mobiles', count: {name: '43', url: '/all-product' }, action: categoryActionComponent },
  { id: 4, name: {component: categoryInfoComponent, data: {name: 'Groceries', image: new URL ('/src/assets/images/image.png', import.meta.url), category_name: ''}}, description: 'The description is not prominent by default; however, some themes may show it.', slug: 'groceries', count: {name: '43', url: '/all-product' }, action: categoryActionComponent },
  { id: 5, name: {component: categoryInfoComponent, data: {name: 'Toys', image: new URL ('/src/assets/images/image.png', import.meta.url), category_name: ''}}, description: 'The description is not prominent by default; however, some themes may show it.', slug: 'toys', count: {name: '43', url: '/all-product' }, action: categoryActionComponent },
  { id: 6, name: {component: categoryInfoComponent, data: {name: 'Fashions', image: new URL ('/src/assets/images/image.png', import.meta.url), category_name: ''}}, description: 'The description is not prominent by default; however, some themes may show it.', slug: 'mobiles', count: {name: '43', url: '/all-product' }, action: categoryActionComponent },
  { id: 7, name: {component: categoryInfoComponent, data: {name: 'Mobiles', image: new URL ('/src/assets/images/image.png', import.meta.url), category_name: ''}}, description: 'The description is not prominent by default; however, some themes may show it.', slug: 'mobiles', count: {name: '43', url: '/all-product' }, action: categoryActionComponent },
])

const dtSearch = ((searchText) => {
  table.value.updateSearch(searchText)
})

onMounted(() => {
})

</script>

<template>
<DashboardBreadcrumb>
  <template #title>Categories</template>
</DashboardBreadcrumb>
  <div class="row g-4">
    <div class="col-xxl-4 col-md-5">
      <div class="panel">
        <div class="panel-header">
          <h5>Add New Category</h5>
        </div>
        <div class="panel-body">
          <div class="row g-3">
            <div class="col-12">
              <label class="form-label">Category Name</label>
              <input type="text" class="form-control form-control-sm" id="categoryTitle">
              <p class="perma-txt" hidden>
                Permalink: <span data-link="https://example.com/" class="site-link text-primary" id="categoryPermalink">https://example.com/</span><input type="text" class="form-control form-control-sm" hidden="" id="editPermalink">
                <button class="btn-flush bg-primary" id="editPermaBtn">Edit</button>
                <button class="btn-flush bg-success" id="createPerma" hidden="">OK</button>
                <button class="btn-flush bg-danger" id="cancelPerma" hidden="">Cancel</button>
              </p>
            </div>
            <div class="col-sm-6">
              <label class="form-label">Main Category</label>
              <select class="form-control form-control-sm form-select" data-placeholder="Select">
                <option value="">Select</option>
                <option value="0">Cloth</option>
                <option value="1">-Fashion</option>
                <option value="2">--Jewellery</option>
                <option value="3">---Bag</option>
                <option value="4">----Smart Phone</option>
                <option value="5">Watch</option>
                <option value="6">Sunglass</option>
              </select>
            </div>
            <div class="col-sm-6">
              <label class="form-label">Custom Category Icon</label>
              <input type="text" class="form-control form-control-sm" placeholder="Fontawesome 6 pro icon name">
            </div>
            <div class="col-12">
              <label class="form-label">Description</label>
              <textarea rows="5" class="form-control form-control-sm"></textarea>
            </div>
            <div class="col-12">
              <label class="form-label">Display Type</label>
              <select class="form-control form-control-sm form-select">
                <option value="0">Default</option>
                <option value="1">Products</option>
                <option value="2">Subcategories</option>
                <option value="3">Both</option>
              </select>
            </div>
            <div class="col-12">
              <div class="upload-category-thumbnail">
                <label class="form-label mb-0" @click="isAddThumbnail = !isAddThumbnail">Add Category Thumbnail</label>
                <div class="jquery-uploader" :class="{'d-block': isAddThumbnail}">
                  <div class="jquery-uploader-preview-container">
                    <div class="jquery-uploader-select-card position-relative">
                      <div class="jquery-uploader-select">
                        <input type="file" class="opacity-0 position-absolute h-100 w-100">
                        <div class="upload-button">
                          <i class="fa fa-plus"></i><br><a>Upload</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 d-flex justify-content-end">
              <div class="btn-box">
                <button class="btn btn-sm btn-primary">Save Category</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-8 col-md-7">
      <div class="panel">
        <PagePanelHeader :dtSearch="dtSearch" :isSearch="isSearch">
          <template #title>All Categories</template>
          <template #filter-column>
            <CategoryTableHeaderComponent />
          </template>
        </PagePanelHeader>
        <div class="panel-body">
          <digi-data-table
            ref="table"
            :data="tableData"
            :columns="tableColumns"
            :selectedItems="selectedItems"
            @update:selectedItems="selectedItems = $event"
          >
            <template #filterOption="{perPageOptions, updatePerPage}">
              <CategoryTableFilterOption :perPageOptions="perPageOptions" :updatePerPage="updatePerPage"/>
            </template>
          </digi-data-table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>