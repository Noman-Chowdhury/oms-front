<script setup>
import {ref} from "vue";
const props = defineProps(['perPageOptions', 'updatePerPage'])

const perPageData = ref(10)
</script>

<template>
  <div class="table-filter-option">
    <div class="row justify-content-between g-3">
      <div class="col-xxl-4 col-6 col-xs-12">
        <form class="row g-2">
          <div class="col-8">
            <select class="form-control form-control-sm form-select" data-placeholder="Bulk action">
              <option value="">Bulk action</option>
              <option value="0">Edit</option>
              <option value="1">Move To Trash</option>
            </select>
          </div>
          <div class="col-4">
            <button class="btn btn-sm btn-primary w-100">Apply</button>
          </div>
        </form>
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