<script setup>
import {ref} from "vue";
const props = defineProps(['perPageOptions', 'updatePerPage'])

import DateRangePicker from "@/components/DateRangePicker.vue";

const perPageData = ref(10)
</script>

<template>
  <div class="product-table-quantity d-flex justify-content-between align-items-center mb-20">
    <ul class="mb-0">
      <li class="text-white">All (23)</li>
      <li>Pending (19)</li>
      <li>Draft (05)</li>
      <li>Trush (05)</li>
    </ul>
    <div class="btn-box d-lg-flex d-none gap-2">
      <button class="btn btn-sm btn-icon btn-outline-primary" title="Download Excel" id="downloadExcel"><i class="fa-light fa-file-spreadsheet"></i></button>
      <button class="btn btn-sm btn-icon btn-outline-primary" title="Download PDF" id="downloadPdf"><i class="fa-light fa-file-pdf"></i></button>
    </div>
  </div>
  <div class="table-filter-option">
    <div class="row g-3">
      <div class="col-xl-10 col-9 col-xs-12">
        <div class="row g-3">
          <div class="col">
            <form class="row g-2">
              <div class="col">
                <select class="form-control form-control-sm form-select">
                  <option value="0">Bulk action</option>
                  <option value="1">Move to trash</option>
                  <option value="2">Change Status to processing</option>
                  <option value="3">Change Status to on-hold</option>
                  <option value="4">Change Status to completed</option>
                  <option value="5">Change Status to cancelled</option>
                </select>
              </div>
              <div class="col">
                <button class="btn btn-sm btn-primary w-100">Apply</button>
              </div>
            </form>
          </div>
          <div class="col">
            <select class="form-control form-control-sm form-select">
              <option value="0">All Orders</option>
              <option value="1">Pending</option>
              <option value="2">Delivered</option>
              <option value="3">Cancel</option>
              <option value="4">Return</option>
            </select>
          </div>
          <div class="col">
            <DateRangePicker />
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
                    <input class="form-check-input" type="checkbox" id="filterDeliveryStatus" checked>
                    <label class="form-check-label" for="filterDeliveryStatus">
                      Delivery Status
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="filterDateRange" checked>
                    <label class="form-check-label" for="filterDateRange">
                      Date Range
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