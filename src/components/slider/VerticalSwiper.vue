<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Pagination, Mousewheel} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

const modulesPagination = [Pagination];
</script>

<template>
  <div class="col-lg-4 col-sm-6">
    <div class="panel">
      <div class="panel-header">
        <h5>Vertical Swiper</h5>
      </div>
      <div class="panel-body">
        <div class="swiper navigation-swiper">
          <div class="swiper-wrapper">
            <swiper
                :slidesPerView="1"
                :spaceBetween="30"
                :pagination="{
              clickable: true
            }"
                :modules="modulesPagination"
            >
              <swiper-slide>
                <img src="@/assets/images/slider-2.jpg" alt="image">
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/slider-3.jpg" alt="image">
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/slider-4.jpg" alt="image">
              </swiper-slide>
            </swiper>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.swiper-wrapper {
  min-height: 100%;
}

.swiper-slide {
  height: auto !important;
}
</style>
