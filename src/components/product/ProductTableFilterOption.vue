<script setup>
import {ref} from "vue";
const props = defineProps(['perPageOptions', 'updatePerPage'])

const perPageData = ref(10)
</script>

<template>
  <div class="product-table-quantity">
    <ul>
      <li class="text-white">All (23)</li>
      <li>Published (19)</li>
      <li>Draft (05)</li>
      <li>Trush (05)</li>
    </ul>
  </div>
  <div class="table-filter-option">
    <div class="row g-3">
      <div class="col-xl-10 col-9 col-xs-12">
        <div class="row g-3">
          <div class="col">
            <form class="row g-2">
              <div class="col">
                <select class="form-control form-control-sm form-select" data-placeholder="Bulk action">
                  <option value="">Bulk action</option>
                  <option value="0">Edit</option>
                  <option value="1">Move To Trash</option>
                </select>
              </div>
              <div class="col">
                <button class="btn btn-sm btn-primary w-100">Apply</button>
              </div>
            </form>
          </div>
          <div class="col">
            <select class="form-control form-control-sm form-select">
              <option value="0">All Category</option>
              <option value="1">Cloth</option>
              <option value="2">Fashion</option>
              <option value="3">Bag</option>
              <option value="4">Food</option>
              <option value="5">Medicine</option>
              <option value="6">Watch</option>
              <option value="7">Smart Phone</option>
            </select>
          </div>
          <div class="col">
            <select class="form-control form-control-sm form-select">
              <option value="0">All Product Type</option>
              <option value="1">Downloadable</option>
              <option value="2">Virtual</option>
            </select>
          </div>
          <div class="col">
            <select class="form-control form-control-sm form-select">
              <option value="0">All Product Stock</option>
              <option value="1">In stock</option>
              <option value="2">Out of stock</option>
              <option value="3">On backorder</option>
            </select>
          </div>
          <div class="col">
            <button class="btn btn-sm btn-primary"><i class="fa-light fa-filter"></i> Filter</button>
          </div>
          <div class="col">
            <div class="digi-dropdown dropdown">
              <button class="btn btn-sm btn-icon btn-primary" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                <i class="fa-regular fa-plus"></i>
              </button>
              <ul class="digi-dropdown-menu dropdown-menu">
                <li class="dropdown-title">Filter Options</li>
                <li>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="filterCategory" checked>
                    <label class="form-check-label" for="filterCategory">
                      Category
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="filterProductType" checked>
                    <label class="form-check-label" for="filterProductType">
                      Product Type
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="filterStock" checked>
                    <label class="form-check-label" for="filterStock">
                      Stock
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-2 col-3 col-xs-12 d-flex justify-content-end">
        <div class="dataTables_length">
          <label>Show
            <select class="form-control form-control-sm form-select" tabindex="-1" aria-hidden="true" v-model="perPageData" @change="updatePerPage(perPageData)">
              <option v-for="perPage in perPageOptions" :value="perPage">{{ perPage }}</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>