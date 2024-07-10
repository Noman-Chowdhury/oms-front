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
                <select class="form-control form-control-sm form-select" data-placeholder="Bulk action" @change="updatePerPage">
                  <option value="">Bulk action</option>
                  <option value="0">Move to trash</option>
                </select>
              </div>
              <div class="col">
                <button class="btn btn-sm btn-primary w-100">Apply</button>
              </div>
            </form>
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