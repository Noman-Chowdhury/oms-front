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
          <input class="form-check-input" type="checkbox" id="showCompany" checked>
          <label class="form-check-label" for="showCompany">
            Company
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showAddress" checked>
          <label class="form-check-label" for="showAddress">
            Address
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showEmail" checked>
          <label class="form-check-label" for="showEmail">
            Email
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showPhone" checked>
          <label class="form-check-label" for="showPhone">
            Phone
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showContactPerson" checked>
          <label class="form-check-label" for="showContactPerson">
            Contact Person
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
    </ul>
  </div>
</template>

<style scoped>

</style>