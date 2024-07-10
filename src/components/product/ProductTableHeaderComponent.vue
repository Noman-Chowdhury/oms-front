<script setup>

</script>

<template>
  <div class="digi-dropdown dropdown">
    <button class="btn btn-sm btn-icon btn-outline-primary" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i class="fa-regular fa-ellipsis-vertical"></i></button>
    <ul class="digi-dropdown-menu dropdown-menu">
      <li class="dropdown-title">Show Table Title</li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showProduct" checked>
          <label class="form-check-label" for="showProduct">
            Products
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showPublished" checked>
          <label class="form-check-label" for="showPublished">
            Published
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showStock" checked>
          <label class="form-check-label" for="showStock">
            Stock
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
          <input class="form-check-input" type="checkbox" id="showSales" checked>
          <label class="form-check-label" for="showSales">
            Sales
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="showRating" checked>
          <label class="form-check-label" for="showRating">
            Rating
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
  <div class="btn-box">
    <router-link to="/add-product" class="btn btn-sm btn-primary"><i class="fa-light fa-plus"></i> Add New</router-link>
  </div>
</template>

<style scoped>

</style>