<script setup>
import {ref} from "vue";

const props = defineProps(['isSearch', 'dtSearch'])
const search = ref('')
</script>

<template>
  <div class="panel-header">
    <div class="d-flex align-items-center gap-1">
      <button class="btn btn-sm btn-icon btn-primary mail-menu-btn d-lg-none"><i class="fa-light fa-bars"></i></button>
      <h5><slot name="title"/></h5>
    </div>
    <div class="btn-box d-flex gap-2">
      <div v-if="isSearch">
        <div class="dataTables_filter">
          <label>
            <input type="search" v-model="search" class="form-control form-control-sm" placeholder="Search..."
                   aria-controls="targetAudienceTable" @input="dtSearch(search)">
          </label>
        </div>
      </div>
      <button class="btn btn-sm btn-icon btn-outline-primary"><i class="fa-light fa-arrows-rotate"></i></button>
      <div class="digi-dropdown dropdown">
        <button class="btn btn-sm btn-icon btn-outline-primary" data-bs-toggle="dropdown" data-bs-auto-close="outside"
                aria-expanded="false"><i class="fa-regular fa-ellipsis-vertical"></i></button>
        <ul class="digi-dropdown-menu dropdown-menu">
          <li class="dropdown-title">Show Table Title</li>
          <li>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="showSender" checked>
              <label class="form-check-label" for="showSender">
                Sender
              </label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="showSubject" checked>
              <label class="form-check-label" for="showSubject">
                Subject
              </label>
            </div>
          </li>
          <li class="dropdown-title pb-1">Showing</li>
          <li>
            <div class="input-group">
              <input type="number" class="form-control form-control-sm w-50" value="10">
              <button class="btn btn-sm btn-primary w-50">Apply</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>