<script setup>
import {ref} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {
  Pagination,
  Navigation,
  Scrollbar,
  EffectFade,
  EffectFlip,
  EffectCreative,
  EffectCoverflow
} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-coverflow';
import DashboardBreadcrumb from "@/components/DashboardBreadcrumb.vue";
import VerticalSwiper from "@/components/slider/VerticalSwiper.vue";
import MousewheelSwiper from "@/components/slider/MousewheelSwiper.vue";

const modules = [Pagination, Navigation];
const modulesScrollbar = [Scrollbar];
const modulesPagination = [Pagination];

const pagination = ref({
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + '</span>';
  }
})
</script>

<template>
  <DashboardBreadcrumb>
    <template #title>Swiper Slider</template>
  </DashboardBreadcrumb>
  <div class="row">
    <div class="col-lg-4 col-sm-6">
      <div class="panel">
        <div class="panel-header">
          <h5>Default Swiper</h5>
        </div>
        <div class="panel-body">
          <div class="swiper default-swiper">
            <div class="swiper-wrapper">
              <swiper
                  :slides-per-view="1"
                  :loop="!0"
                  :autoplay="{
                  delay: 2500,
                  disableOnInteraction: !1
                }"
              >
                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="@/assets/images/slider-1.jpg" alt="image">
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="@/assets/images/slider-2.jpg" alt="image">
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="@/assets/images/slider-3.jpg" alt="image">
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-sm-6">
      <div class="panel">
        <div class="panel-header">
          <h5>Navigation Swiper</h5>
        </div>
        <div class="panel-body">
          <div class="swiper navigation-swiper">
            <div class="swiper-wrapper">
              <swiper
                  :modules="modules"
                  :loop="true"
                  :navigation='{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                  }'
              >
                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="@/assets/images/slider-4.jpg" alt="image">
                  </div>
                </swiper-slide>
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
              </swiper>
            </div>
            <button class="btn btn-sm btn-icon btn-primary swiper-button-next"><i class="fa-solid fa-chevron-right"></i>
            </button>
            <button class="btn btn-sm btn-icon btn-primary swiper-button-prev"><i class="fa-solid fa-chevron-left"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-sm-6">
      <div class="panel">
        <div class="panel-header">
          <h5>Pagination Swiper</h5>
        </div>
        <div class="panel-body">
          <div class="swiper pagination-swiper">
            <div class="swiper-wrapper">
              <swiper
                  :pagination="{
                  dynamicBullets: true,
                }"
                  :modules="modules"
                  :autoplay="true"
                  :navigation='{
                  clickable: !0,
                  el: ".swiper-pagination",
                  dynamicBullets: !0
                }'
              >
                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="@/assets/images/slider-7.jpg" alt="image">
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="@/assets/images/slider-8.jpg" alt="image">
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="@/assets/images/slider-9.jpg" alt="image">
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-sm-6">
      <div class="panel">
        <div class="panel-header">
          <h5>Pagination Fraction Swiper</h5>
        </div>
        <div class="panel-body">
          <div class="swiper pagination-fraction-swiper">
            <div class="swiper-wrapper">
              <swiper
                  :pagination="{
                  type: 'fraction',
                }"
                  :navigation="true"
                  :modules="modules"
              >
                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="@/assets/images/slider-10.jpg" alt="image">
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="@/assets/images/slider-1.jpg" alt="image">
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="@/assets/images/slider-2.jpg" alt="image">
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-sm-6">
      <div class="panel">
        <div class="panel-header">
          <h5>Pagination Custom Swiper</h5>
        </div>
        <div class="panel-body">
          <div class="swiper pagination-custom-swiper">
            <div class="swiper-wrapper">
              <swiper
                  :pagination="pagination"
                  :modules="modules"
              >
                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="@/assets/images/slider-3.jpg" alt="image">
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="@/assets/images/slider-4.jpg" alt="image">
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="@/assets/images/slider-5.jpg" alt="image">
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-sm-6">
      <div class="panel">
        <div class="panel-header">
          <h5>Pagination Progress Swiper</h5>
        </div>
        <div class="panel-body">
          <div class="swiper pagination-progress-swiper">
            <div class="swiper-wrapper">
              <swiper
                  :pagination="{
                  type: 'progressbar',
                }"
                  :navigation="true"
                  :modules="modules"
              >
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
                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="@/assets/images/slider-8.jpg" alt="image">
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-sm-6">
      <div class="panel">
        <div class="panel-header">
          <h5>Pagination Scrollbar Swiper</h5>
        </div>
        <div class="panel-body">
          <div class="swiper pagination-scrollbar-swiper">
            <div class="swiper-wrapper">
              <swiper
                  :scrollbar='{
                  el: ".swiper-scrollbar",
                  hide: true
                }'
                  :modules="modulesScrollbar"
              >
                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="@/assets/images/slider-9.jpg" alt="image">
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="@/assets/images/slider-10.jpg" alt="image">
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="@/assets/images/slider-1.jpg" alt="image">
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="swiper-scrollbar"></div>
          </div>
        </div>
      </div>
    </div>
    <VerticalSwiper/>
    <MousewheelSwiper/>
    <div class="col-lg-4 col-sm-6">
      <div class="panel">
        <div class="panel-header">
          <h5>Effect Fade Swiper</h5>
        </div>
        <div class="panel-body">
          <swiper
              :spaceBetween="30"
              :effect="'fade'"
              :navigation="true"
              :pagination="{
                clickable: true,
              }"
              :modules="[EffectFade, Navigation, Pagination]">
            <swiper-slide>
              <img src="@/assets/images/slider-8.jpg" alt="image">
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/slider-9.jpg" alt="image">
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/slider-10.jpg" alt="image">
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-sm-6">
      <div class="panel">
        <div class="panel-header">
          <h5>Effect Flip Swiper</h5>
        </div>
        <div class="panel-body">
          <swiper
              :effect="'flip'"
              :grabCursor="true"
              :pagination="true"
              :navigation="true"
              :loop="true"
              :modules="[EffectFlip, Pagination, Navigation]"
          >
            <swiper-slide>
              <img src="@/assets/images/slider-1.jpg" alt="image">
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/slider-2.jpg" alt="image">
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/slider-3.jpg" alt="image">
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-sm-6">
      <div class="panel">
        <div class="panel-header">
          <h5>Effect Creative Swiper</h5>
        </div>
        <div class="panel-body">
          <swiper
              :loop="true"
              :grabCursor="true"
              :effect="'creative'"
              :creativeEffect="{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }"
              :modules="[EffectCreative]"
          >
            <swiper-slide>
              <img src="@/assets/images/slider-4.jpg" alt="image">
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/slider-5.jpg" alt="image">
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/slider-6.jpg" alt="image">
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>Effect Coverflow Swiper</h5>
        </div>
        <div class="panel-body">
          <swiper
              :loop="true"
              :slidesPerView="4"
              :effect="'coverflow'"
              :grabCursor="true"
              :centeredSlides="true"
              :coverflowEffect="{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }"
              :pagination="true"
              :modules="[EffectCoverflow, Pagination]"
              :breakpoints='{
              "@0.00": {
              slidesPerView: 2,
              },
              "@0.75": {
              slidesPerView: 2,
              },
              "@1.00": {
              slidesPerView: 2,
              },
              "@1.50": {
              slidesPerView: 2.5,
              },
              "@1.75": {
              slidesPerView: 3,
              },
              "@2.00": {
              slidesPerView: 4,
              },
            }'
          >
            <swiper-slide>
              <img src="@/assets/images/slider-1.jpg" alt="image">
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/slider-2.jpg" alt="image">
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/slider-3.jpg" alt="image">
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/slider-4.jpg" alt="image">
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/slider-5.jpg" alt="image">
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/slider-6.jpg" alt="image">
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>Responsive Breakpoints Swiper</h5>
        </div>
        <div class="panel-body">
          <swiper
            :loop="true"
            :slidesPerView="1"
            :spaceBetween="10"
            :pagination="{
              clickable: true,
            }"
            :breakpoints="{
            640: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              768: {
                  slidesPerView: 3,
                  spaceBetween: 10
              },
              1200: {
                  slidesPerView: 4,
                  spaceBetween: 20
              }
            }"
              :modules="[Pagination]">
            <swiper-slide>
              <img src="@/assets/images/slider-1.jpg" alt="image">
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/slider-2.jpg" alt="image">
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/slider-3.jpg" alt="image">
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/slider-4.jpg" alt="image">
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/slider-5.jpg" alt="image">
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/slider-6.jpg" alt="image">
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>