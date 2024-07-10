<script setup>
import AutoNumberCounter from "@/components/AutoNumberCounterComponent.vue"

</script>

<template>
  <div class="row mb-25">
    <div class="col-lg-3 col-6 col-xs-12">
      <div class="dashboard-top-box rounded-bottom panel-bg">
        <div class="left">
          <h3>$
            <AutoNumberCounter
              ref='counter'
              :startAmount='0'
              :endAmount='34152'
              :duration='3'
              separator=','
              :autoinit='true'
            />
          </h3>
          <p>Shipping fees are not</p>
          <a href="#">View net earnings</a>
        </div>
        <div class="right">
          <span class="text-primary">+16.24%</span>
          <div class="part-icon rounded">
            <span><i class="fa-light fa-dollar-sign"></i></span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-6 col-xs-12">
      <div class="dashboard-top-box rounded-bottom panel-bg">
        <div class="left">
          <h3>
            <AutoNumberCounter
              ref='counter'
              :startAmount='0'
              :endAmount='36894'
              :duration='3'
              separator=','
              :autoinit='true'
            />
          </h3>
          <p>Orders</p>
          <a href="#">Excluding orders in transit</a>
        </div>
        <div class="right">
          <span class="text-primary">+16.24%</span>
          <div class="part-icon rounded">
            <span><i class="fa-light fa-bag-shopping"></i></span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-6 col-xs-12">
      <div class="dashboard-top-box rounded-bottom panel-bg">
        <div class="left">
          <h3>$
            <AutoNumberCounter
                ref='counter'
                :startAmount='0'
                :endAmount='34152'
                :duration='3'
                separator=','
                :autoinit='true'
            />
          </h3>
          <p>Customers</p>
          <a href="#">See details</a>
        </div>
        <div class="right">
          <span class="text-primary">+16.24%</span>
          <div class="part-icon rounded">
            <span><i class="fa-light fa-user"></i></span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-6 col-xs-12">
      <div class="dashboard-top-box rounded-bottom panel-bg">
        <div class="left">
          <h3>
            <AutoNumberCounter
                ref='counter'
                :startAmount='0'
                :endAmount='724152'
                :duration='3'
                separator=','
                :autoinit='true'
            />
          </h3>
          <p>My Balance</p>
          <a href="#">Withdraw</a>
        </div>
        <div class="right">
          <span class="text-primary">+16.24%</span>
          <div class="part-icon rounded">
            <span><i class="fa-light fa-credit-card"></i></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>