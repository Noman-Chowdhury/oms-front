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
          <input class="form-check-input" type="checkbox" id="showCustomerId" checked>
          <label class="form-check-label" for="showCustomerId">
            Customer ID
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
          <input class="form-check-input" type="checkbox" id="showPhone" checked>
          <label class="form-check-label" for="showPhone">
            Phone
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showGroup" checked>
          <label class="form-check-label" for="showGroup">
            Group
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showCustomerType" checked>
          <label class="form-check-label" for="showCustomerType">
            Customer Type
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showCreditLimit" checked>
          <label class="form-check-label" for="showCreditLimit">
            Credit Limit
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showOpeningBalance" checked>
          <label class="form-check-label" for="showOpeningBalance">
            Opening Balance
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showDebit" checked>
          <label class="form-check-label" for="showDebit">
            Debit
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showCredit" checked>
          <label class="form-check-label" for="showCredit">
            Credit
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showClosingBalance" checked>
          <label class="form-check-label" for="showClosingBalance">
            Closing Balance
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
</template>

<style scoped>

</style>