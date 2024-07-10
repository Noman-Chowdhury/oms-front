<script setup>
import {ref} from "vue";
const props = defineProps(['search', 'dtSearch', 'isSearch'])
const search = ref(props.search)

</script>

<template>
  <div class="digi-dropdown dropdown">
    <button class="btn btn-sm btn-icon btn-outline-primary" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i class="fa-regular fa-ellipsis-vertical"></i></button>
    <ul class="dropdown-menu">
      <li class="dropdown-title">Show Table Title</li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showName" checked>
          <label class="form-check-label" for="showName">
            Name
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showStatus" checked>
          <label class="form-check-label" for="showStatus">
            Status
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showStartDate" checked>
          <label class="form-check-label" for="showStartDate">
            Start Date
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showDueDate" checked>
          <label class="form-check-label" for="showDueDate">
            Due Date
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showAssignedTo" checked>
          <label class="form-check-label" for="showAssignedTo">
            Assigned To
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showPriority" checked>
          <label class="form-check-label" for="showPriority">
            Priority
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
  <button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#addTaskModal"><i class="fa-light fa-plus"></i> Add New</button>
</template>

<style scoped>

</style>