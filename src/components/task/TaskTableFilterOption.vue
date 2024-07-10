<script setup>
import {ref} from "vue";
const props = defineProps(['perPageOptions', 'updatePerPage'])

import DateRangePicker from "@/components/DateRangePicker.vue";

const perPageData = ref(10)
</script>

<template>
  <div class="table-filter-option">
    <div class="row g-3">
      <div class="col-xl-10 col-md-10 col-9 col-xs-12">
        <div class="row g-3">
          <div class="col">
            <form class="row g-2">
              <div class="col">
                <select class="form-control form-control-sm form-select" data-placeholder="Bulk action">
                  <option value="">Bulk action</option>
                  <option value="0">Move to trash</option>
                </select>
              </div>
              <div class="col">
                <button class="btn btn-sm btn-primary w-100">Apply</button>
              </div>
            </form>
          </div>
          <div class="col">
            <select class="form-control form-control-sm form-select" data-placeholder="Select Status">
              <option value="">Select Status</option>
              <option value="0">Not Started</option>
              <option value="1">Pending</option>
              <option value="2">On Hold</option>
              <option value="3">In Progress</option>
              <option value="4">Completed</option>
            </select>
          </div>
          <div class="col">
            <DateRangePicker />
          </div>
          <div class="col">
            <select class="form-control form-control-sm form-select" data-placeholder="Select Priority">
              <option value="">Select Priority</option>
              <option value="0">Low</option>
              <option value="1">Medium</option>
              <option value="2">High</option>
              <option value="3">Urgent</option>
            </select>
          </div>
          <div class="col">
            <button class="btn btn-sm btn-primary"><i class="fa-light fa-filter"></i> Filter</button>
          </div>
          <div class="col">
            <div class="digi-dropdown dropdown">
              <button class="btn btn-sm btn-icon btn-primary" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i class="fa-regular fa-plus"></i></button>
              <ul class="dropdown-menu">
                <li class="dropdown-title">Filter Options</li>
                <li>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="filterTaskStatus" checked>
                    <label class="form-check-label" for="filterTaskStatus">
                      Task Status
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
                <li>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="filterTaskPriority" checked>
                    <label class="form-check-label" for="filterTaskPriority">
                      Task Priority
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-2 col-md-2 col-3 col-xs-12 d-flex justify-content-end">
        <div>
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
  </div>
</template>

<style scoped>

</style>