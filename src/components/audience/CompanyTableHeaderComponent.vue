<script setup>

</script>

<template>
  <div class="digi-dropdown dropdown">
    <button class="btn btn-sm btn-icon btn-outline-primary" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i class="fa-regular fa-ellipsis-vertical"></i></button>
    <ul class="dropdown-menu">
      <li class="dropdown-title">Show Table Title</li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showFirstName" checked>
          <label class="form-check-label" for="showFirstName">
            First Name
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showLastName" checked>
          <label class="form-check-label" for="showLastName">
            Last Name
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
          <input class="form-check-input" type="checkbox" id="showPhone" checked>
          <label class="form-check-label" for="showPhone">
            Phone
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showPosition" checked>
          <label class="form-check-label" for="showPosition">
            Position
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showLastLogin" checked>
          <label class="form-check-label" for="showLastLogin">
            Last Login
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