<script setup>

</script>

<template>
  <div class="digi-dropdown dropdown">
    <button class="btn btn-sm btn-icon btn-outline-primary" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i class="fa-regular fa-ellipsis-vertical"></i></button>
    <ul class="dropdown-menu">
      <li class="dropdown-title">Show Table Title</li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showAction" checked>
          <label class="form-check-label" for="showAction">
            Action
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
          <input class="form-check-input" type="checkbox" id="showAddress" checked>
          <label class="form-check-label" for="showAddress">
            Address
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
          <input class="form-check-input" type="checkbox" id="showEmail" checked>
          <label class="form-check-label" for="showEmail">
            Email
          </label>
        </div>
      </li>
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
          <input class="form-check-input" type="checkbox" id="showDescription" checked>
          <label class="form-check-label" for="showDescription">
            Description
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
</template>

<style scoped>

</style>