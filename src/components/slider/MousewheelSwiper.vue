<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Pagination, Mousewheel} from "swiper/modules";
import 'swiper/css/pagination';
import 'swiper/css';

const modulesPagination = [Pagination, Mousewheel];

</script>

<template>
  <div class="col-lg-4 col-sm-6">
    <div class="panel">
      <div class="panel-header">
        <h5>Mousewheel Control Swiper</h5>
      </div>
      <div class="panel-body">
        <swiper
            :slidesPerView="1"
            :spaceBetween="30"
            :mousewheel="true"
            :pagination="{
              clickable: true,
            }"
            :modules="modulesPagination"
        >
          <swiper-slide>
            <div class="swiper-slide">
              <img src="@/assets/images/slider-5.jpg" alt="image">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-slide">
              <img src="@/assets/images/slider-6.jpg" alt="image">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-slide">
              <img src="@/assets/images/slider-7.jpg" alt="image">
            </div>
          </swiper-slide>
          <div class="swiper-pagination"></div>
        </swiper>
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