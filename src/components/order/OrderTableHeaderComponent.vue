<script setup>

</script>

<template>
  <div class="digi-dropdown dropdown">
    <button class="btn btn-sm btn-icon btn-outline-primary" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i class="fa-regular fa-ellipsis-vertical"></i></button>
    <ul class="digi-dropdown-menu dropdown-menu">
      <li class="dropdown-title">Show Table Title</li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showOrderId" checked>
          <label class="form-check-label" for="showOrderId">
            Order ID
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showCustomer" checked>
          <label class="form-check-label" for="showCustomer">
            Customer
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
          <input class="form-check-input" type="checkbox" id="showProduct" checked>
          <label class="form-check-label" for="showProduct">
            Product
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showPrice" checked>
          <label class="form-check-label" for="showPrice">
            Price
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showPaymentMethod" checked>
          <label class="form-check-label" for="showPaymentMethod">
            Payment Method
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showDeliveryStatus" checked>
          <label class="form-check-label" for="showDeliveryStatus">
            Delivery Status
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showOrderDate" checked>
          <label class="form-check-label" for="showOrderDate">
            Order Date
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showAction" checked>
          <label class="form-check-label" for="showAction">
            Action
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