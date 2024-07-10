<script setup>

</script>

<template>
  <div class="digi-dropdown dropdown">
    <button class="btn btn-sm btn-icon btn-outline-primary" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i class="fa-regular fa-ellipsis-vertical"></i></button>
    <ul class="digi-dropdown-menu dropdown-menu">
      <li class="dropdown-title">Show Table Title</li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showEmployeeId" checked>
          <label class="form-check-label" for="showEmployeeId">
            Employee ID
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showPhoto" checked>
          <label class="form-check-label" for="showPhoto">
            Photo
          </label>
        </div>
      </li>
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
          <input class="form-check-input" type="checkbox" id="showSection" checked>
          <label class="form-check-label" for="showSection">
            Section
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
          <input class="form-check-input" type="checkbox" id="showPresentAddress" checked>
          <label class="form-check-label" for="showPresentAddress">
            Present Address
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
      <li class="dropdown-title pb-1">Showing</li>
      <li>
        <div class="input-group">
          <input type="number" class="form-control form-control-sm w-50" value="10">
          <button class="btn btn-sm btn-primary w-50">Apply</button>
        </div>
      </li>
    </ul>
  </div>
  <router-link :to="{ name: 'hrm_add_employee' }" class="btn btn-sm btn-primary"><i class="fa-light fa-plus"></i> Add New</router-link>
</template>

<style scoped>

</style>