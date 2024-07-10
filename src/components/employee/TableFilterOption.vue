<script setup>
import {ref} from "vue";

const props = defineProps(['perPageOptions', 'updatePerPage'])

const perPageData = ref(10)
</script>

<template>
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
                </select>
              </div>
              <div class="col">
                <button class="btn btn-sm btn-primary w-100">Apply</button>
              </div>
            </form>
          </div>
          <div class="col">
            <select class="form-control form-control-sm form-select">
              <option value="0">Active</option>
              <option value="1">Pending</option>
              <option value="2">Inactive</option>
              <option value="3">Hold</option>
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
                    <input class="form-check-input" type="checkbox" id="filterActiveStatus" checked>
                    <label class="form-check-label" for="filterActiveStatus">
                      Active Status
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-2 col-md-3 col-3 col-xs-12 d-flex justify-content-end">
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