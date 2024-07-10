<script setup>
import {ref} from "vue";
const props = defineProps(['perPageOptions', 'updatePerPage', 'isSend', 'tab'])

const perPageData = ref(10)
</script>

<template>
  <div class="product-table-quantity d-flex flex-wrap align-items-center gap-2 mb-20">
    <ul class="mb-0">
      <li class="text-white">All (23)</li>
      <li>Unread (19)</li>
      <li>Draft (05)</li>
      <li>Trush (05)</li>
    </ul>
    <ul v-if="!isSend" class="top-action mb-0 d-none">
      <li>|</li>
      <li><button class="btn-flush" data-bs-toggle="tooltip" data-bs-title="Move to archive"><i class="fa-light fa-box-archive"></i></button></li>
      <li><button class="btn-flush" data-bs-toggle="tooltip" data-bs-title="Report to spam"><i class="fa-light fa-circle-exclamation"></i></button></li>
      <li><button class="btn-flush" data-bs-toggle="tooltip" data-bs-title="Mark as read"><i class="fa-light fa-envelope"></i></button></li>
      <li><button class="btn-flush" data-bs-toggle="tooltip" data-bs-title="Move to trash"><i class="fa-light fa-trash-can"></i></button></li>
    </ul>
  </div>
  <div class="table-filter-option">
    <div class="row" :class="[!isSend ? 'g-3' : 'g-2']">
      <div v-if="!isSend" class="col-xxl-6 col-md-12">
        <div class="row g-3">
          <div class="col">
            <div v-if="tab.slug === 'inbox'" :class="`btn-box ${tab.slug}-tab d-flex gap-2 nav`" role="tablist">
              <button class="btn btn-sm btn-outline-primary active" id="nav-primary-tab" data-bs-toggle="tab" data-bs-target="#nav-primary" type="button" role="tab" aria-controls="nav-primary" aria-selected="true">Primary</button>
              <button class="btn btn-sm btn-outline-primary" id="nav-promotion-tab" data-bs-toggle="tab" data-bs-target="#nav-promotion" type="button" role="tab" aria-controls="nav-promotion" aria-selected="false">Promotion <span class="badge bg-danger">9+</span></button>
              <button class="btn btn-sm btn-outline-primary" id="nav-social-tab" data-bs-toggle="tab" data-bs-target="#nav-social" type="button" role="tab" aria-controls="nav-social" aria-selected="false">Social</button>
              <button class="btn btn-sm btn-outline-primary" id="nav-updates-tab" data-bs-toggle="tab" data-bs-target="#nav-updates" type="button" role="tab" aria-controls="nav-updates" aria-selected="false">Updates</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-4 col-9 col-xs-12">
        <div class="row g-3">
          <div class="col">
            <form>
              <select class="form-control form-control-sm form-select" data-placeholder="Bulk action">
                <option value="">Bulk action</option>
                <option value="0">Move to archive</option>
                <option value="1">Report to spam</option>
                <option value="2">Mark as read</option>
                <option value="3">Move to trash</option>
              </select>
            </form>
          </div>
          <div class="col">
            <select class="form-control form-control-sm form-select">
              <option value="0">All</option>
              <option value="1">None</option>
              <option value="2">Read</option>
              <option value="3">Unread</option>
              <option value="4">Starred</option>
              <option value="5">Unstarred</option>
            </select>
          </div>
          <div class="col">
            <button class="btn btn-sm btn-primary"><i class="fa-light fa-filter"></i> Filter</button>
          </div>
        </div>
      </div>
      <div class="col-xxl-2 col-3 col-xs-12 d-flex justify-content-end">
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