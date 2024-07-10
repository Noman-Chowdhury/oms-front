<script setup>
import {ref} from "vue";
const props = defineProps(['search', 'dtSearch', 'isSearch'])
const search = ref(props.search || '')
</script>

<template>
  <div class="panel-header">
    <h5>
      <slot name="title"></slot>
    </h5>
    <div class="btn-box d-flex gap-2">
      <div v-if="isSearch">
        <div class="dataTables_filter">
          <label>
            <input type="search" v-model="search" class="form-control form-control-sm" placeholder="Search..." aria-controls="targetAudienceTable" @input="dtSearch(search)">
          </label>
        </div>
      </div>
      <button class="btn btn-sm btn-icon btn-outline-primary"><i class="fa-light fa-arrows-rotate"></i></button>
      <slot name="filter-column"></slot>
    </div>
  </div>
</template>

<style scoped>

</style>