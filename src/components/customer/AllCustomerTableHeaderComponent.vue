<script setup>

</script>

<template>
  <div class="digi-dropdown dropdown">
    <button class="btn btn-sm btn-icon btn-outline-primary" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i class="fa-regular fa-ellipsis-vertical"></i></button>
    <ul class="digi-dropdown-menu dropdown-menu">
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
          <input class="form-check-input" type="checkbox" id="showUsername" checked>
          <label class="form-check-label" for="showUsername">
            Username
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showLastActive" checked>
          <label class="form-check-label" for="showLastActive">
            Last Active
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showDateRegistered" checked>
          <label class="form-check-label" for="showDateRegistered">
            Date Registered
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
          <input class="form-check-input" type="checkbox" id="showOrders" checked>
          <label class="form-check-label" for="showOrders">
            Orders
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showTotalSpend" checked>
          <label class="form-check-label" for="showTotalSpend">
            Total Spend
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showAOV" checked>
          <label class="form-check-label" for="showAOV">
            AOV
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showCountryRegion" checked>
          <label class="form-check-label" for="showCountryRegion">
            Country/Region
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showCity" checked>
          <label class="form-check-label" for="showCity">
            City
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showRegion" checked>
          <label class="form-check-label" for="showRegion">
            Region
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showPostalCode" checked>
          <label class="form-check-label" for="showPostalCode">
            Postal Code
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