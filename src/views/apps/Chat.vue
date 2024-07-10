<script setup>
import {onMounted, ref} from "vue";
import ModalWindow from "@/components/ModalWindow.vue";
import VoiceCallModal from "@/components/modals/VoiceCallModal.vue";
import VideoCallModal from "@/components/modals/VideoCallModal.vue";
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import {OverlayScrollbars} from "overlayscrollbars";
import 'vue3-carousel/dist/carousel.css'

const isShowModal = ref(false);
const isShowVideoModal = ref(false);
const isMessageSearch = ref(false);

const avatars = ref([
    new URL('/src/assets/images/avatar-2.png', import.meta.url),
    new URL('/src/assets/images/avatar-3.png', import.meta.url),
    new URL('/src/assets/images/avatar-4.png', import.meta.url),
    new URL('/src/assets/images/avatar-5.png', import.meta.url),
    new URL('/src/assets/images/avatar-6.png', import.meta.url),
    new URL('/src/assets/images/avatar-2.png', import.meta.url),
    new URL('/src/assets/images/avatar-3.png', import.meta.url),
    new URL('/src/assets/images/avatar.png', import.meta.url),
])

const openModal = ((type) => {
  if (type === 'video') {
    isShowVideoModal.value = true
  } else {
    isShowModal.value = true
  }
});

const closeModal = ((type) => {
  isShowModal.value = false
  isShowVideoModal.value = false
});

onMounted(() => {
  const elements = document.querySelectorAll('.scrollable');
  elements.forEach((element) => {
    OverlayScrollbars(element, {});
  });
})
</script>

<template>
  <div class="chatting-panel">
    <div class="d-flex">
      <div class="panel border-end rounded-0">
        <div class="panel-body border-bottom">
          <carousel :items-to-show="6" class="active-members">
            <slide v-for="(avatar, index) in avatars" :key="index" class="single-member">
                <button class="btn-flush avatar">
                  <img :src="avatar" alt="User">
                  <span class="active-status active"></span>
                </button>
            </slide>

            <template #addons>
              <navigation />
            </template>
          </carousel>
        </div>
        <div class="panel-body message-list">
          <div class="scrollable">
            <div class="single-message">
              <div class="avatar">
                <img src="@/assets/images/avatar-2.png" alt="User">
                <span class="active-status active"></span>
              </div>
              <div class="part-txt">
                <div class="top">
                  <span class="user-name">Amelie Harris</span>
                  <span class="msg-time">13 min.</span>
                </div>
                <div class="msg-short">
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente cum labore obcaecati totam laudantium fuga cumque veritatis veniam. Veritatis, ducimus aspernatur. Odio fuga a alias aspernatur harum distinctio veritatis.</span>
                </div>
              </div>
            </div>
            <div class="single-message unread">
              <div class="avatar">
                <img src="@/assets/images/avatar-3.png" alt="User">
                <span class="active-status active"></span>
              </div>
              <div class="part-txt">
                <div class="top">
                  <span class="user-name">Lucy Burrows</span>
                  <span class="msg-time">14 min.</span>
                </div>
                <div class="msg-short">
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente cum labore obcaecati totam laudantium fuga cumque veritatis veniam. Veritatis, ducimus aspernatur. Odio fuga a alias aspernatur harum distinctio veritatis.</span>
                </div>
              </div>
            </div>
            <div class="single-message">
              <div class="avatar">
                <img src="@/assets/images/avatar-4.png" alt="User">
                <span class="active-status"></span>
              </div>
              <div class="part-txt">
                <div class="top">
                  <span class="user-name">Tia Goddard</span>
                  <span class="msg-time">1 hr.</span>
                </div>
                <div class="msg-short">
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente cum labore obcaecati totam laudantium fuga cumque veritatis veniam. Veritatis, ducimus aspernatur. Odio fuga a alias aspernatur harum distinctio veritatis.</span>
                </div>
              </div>
            </div>
            <div class="single-message unread">
              <div class="avatar">
                <img src="@/assets/images/avatar-5.png" alt="User">
                <span class="active-status"></span>
              </div>
              <div class="part-txt">
                <div class="top">
                  <span class="user-name">Abigail Henry</span>
                  <span class="msg-time">2 hr.</span>
                </div>
                <div class="msg-short">
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente cum labore obcaecati totam laudantium fuga cumque veritatis veniam. Veritatis, ducimus aspernatur. Odio fuga a alias aspernatur harum distinctio veritatis.</span>
                </div>
              </div>
            </div>
            <div class="single-message unread">
              <div class="avatar">
                <img src="@/assets/images/avatar-6.png" alt="User">
                <span class="active-status"></span>
              </div>
              <div class="part-txt">
                <div class="top">
                  <span class="user-name">Harry Bailey</span>
                  <span class="msg-time">3 hr.</span>
                </div>
                <div class="msg-short">
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente cum labore obcaecati totam laudantium fuga cumque veritatis veniam. Veritatis, ducimus aspernatur. Odio fuga a alias aspernatur harum distinctio veritatis.</span>
                </div>
              </div>
            </div>
            <div class="single-message">
              <div class="avatar">
                <img src="@/assets/images/avatar-2.png" alt="User">
                <span class="active-status"></span>
              </div>
              <div class="part-txt">
                <div class="top">
                  <span class="user-name">Luke Hall</span>
                  <span class="msg-time">3 hr.</span>
                </div>
                <div class="msg-short">
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente cum labore obcaecati totam laudantium fuga cumque veritatis veniam. Veritatis, ducimus aspernatur. Odio fuga a alias aspernatur harum distinctio veritatis.</span>
                </div>
              </div>
            </div>
            <div class="single-message unread">
              <div class="avatar">
                <img src="@/assets/images/avatar.png" alt="User">
                <span class="active-status active"></span>
              </div>
              <div class="part-txt">
                <div class="top">
                  <span class="user-name">Owen Walker</span>
                  <span class="msg-time">3 hr.</span>
                </div>
                <div class="msg-short">
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente cum labore obcaecati totam laudantium fuga cumque veritatis veniam. Veritatis, ducimus aspernatur. Odio fuga a alias aspernatur harum distinctio veritatis.</span>
                </div>
              </div>
            </div>
            <div class="single-message">
              <div class="avatar">
                <img src="@/assets/images/avatar-3.png" alt="User">
                <span class="active-status active"></span>
              </div>
              <div class="part-txt">
                <div class="top">
                  <span class="user-name">Evie Charlton</span>
                  <span class="msg-time">4 hr.</span>
                </div>
                <div class="msg-short">
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente cum labore obcaecati totam laudantium fuga cumque veritatis veniam. Veritatis, ducimus aspernatur. Odio fuga a alias aspernatur harum distinctio veritatis.</span>
                </div>
              </div>
            </div>
            <div class="single-message">
              <div class="avatar">
                <img src="@/assets/images/avatar-6.png" alt="User">
                <span class="active-status"></span>
              </div>
              <div class="part-txt">
                <div class="top">
                  <span class="user-name">Jay Thorpe</span>
                  <span class="msg-time">4 hr.</span>
                </div>
                <div class="msg-short">
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente cum labore obcaecati totam laudantium fuga cumque veritatis veniam. Veritatis, ducimus aspernatur. Odio fuga a alias aspernatur harum distinctio veritatis.</span>
                </div>
              </div>
            </div>
            <div class="single-message unread">
              <div class="avatar">
                <img src="@/assets/images/avatar-2.png" alt="User">
                <span class="active-status active"></span>
              </div>
              <div class="part-txt">
                <div class="top">
                  <span class="user-name">Spencer May</span>
                  <span class="msg-time">5 hr.</span>
                </div>
                <div class="msg-short">
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente cum labore obcaecati totam laudantium fuga cumque veritatis veniam. Veritatis, ducimus aspernatur. Odio fuga a alias aspernatur harum distinctio veritatis.</span>
                </div>
              </div>
            </div>
            <div class="single-message">
              <div class="avatar">
                <img src="@/assets/images/avatar.png" alt="User">
                <span class="active-status active"></span>
              </div>
              <div class="part-txt">
                <div class="top">
                  <span class="user-name">Mason Joyce</span>
                  <span class="msg-time">5 hr.</span>
                </div>
                <div class="msg-short">
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente cum labore obcaecati totam laudantium fuga cumque veritatis veniam. Veritatis, ducimus aspernatur. Odio fuga a alias aspernatur harum distinctio veritatis.</span>
                </div>
              </div>
            </div>
            <div class="single-message">
              <div class="avatar">
                <img src="@/assets/images/avatar-3.png" alt="User">
                <span class="active-status active"></span>
              </div>
              <div class="part-txt">
                <div class="top">
                  <span class="user-name">Eva Birch</span>
                  <span class="msg-time">6 hr.</span>
                </div>
                <div class="msg-short">
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente cum labore obcaecati totam laudantium fuga cumque veritatis veniam. Veritatis, ducimus aspernatur. Odio fuga a alias aspernatur harum distinctio veritatis.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel rounded-0 position-relative">
        <div class="chatting-area">
          <div class="panel-body">
            <div class="chat-top-bar">
              <div class="user">
                <button class="back-to-all-chat btn-flush fs-14 d-md-none"><i class="fa-light fa-arrow-left"></i></button>
                <div class="avatar">
                  <img src="@/assets/images/avatar-2.png" alt="User">
                </div>
                <div class="part-txt">
                  <span class="user-name">Amelie Harris</span>
                  <span class="active-status active">Active Now</span>
                </div>
              </div>
              <div class="chatting-panel-top-btns">
                <button class="btn btn-icon btn-outline-primary d-xxl-none" data-bs-toggle="modal" data-bs-target="#voiceCallModal" @click="openModal('voice')"><i class="fa-light fa-phone"></i></button>
                <button class="btn btn-icon btn-outline-primary d-xxl-none" data-bs-toggle="modal" data-bs-target="#videoCallModal" @click="openModal('video')"><i class="fa-light fa-video"></i></button>
                <div class="digi-dropdown dropdown">
                  <button class="btn btn-sm btn-icon btn-outline-primary" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-regular fa-ellipsis"></i></button>
                  <ul class="digi-dropdown-menu dropdown-menu dropdown-menu-sm dropdown-menu-end">
                    <li class="p-0"><a href="#" class="dropdown-item"><span class="dropdown-icon"><i class="fa-light fa-box-archive"></i></span> Archive</a></li>
                    <li class="p-0"><a href="#" class="dropdown-item"><span class="dropdown-icon"><i class="fa-light fa-microphone-slash"></i></span> Mute</a></li>
                    <li class="p-0"><a href="#" class="dropdown-item"><span class="dropdown-icon"><i class="fa-light fa-trash-can"></i></span> Delete</a></li>
                    <li class="p-0"><a href="#" class="dropdown-item d-xxl-none show-chatting-info"><span class="dropdown-icon"><i class="fa-light fa-ellipsis-vertical"></i></span> More</a></li>
                  </ul>
                </div>
              </div>
              <div class="search-in-chat" :class="{active: isMessageSearch}">
                <input type="search" class="form-control" placeholder="Search message...">
              </div>
            </div>
          </div>
          <div class="panel-body msg-area">
            <div class="scrollable">
              <div class="single-message outgoing">
                <div class="msg-box">
                  <div class="msg-box-inner">
                    <div class="msg-option">
                      <span class="msg-time">1 day.</span>
                      <button class="btn-flush"><i class="fa-light fa-ellipsis-vertical"></i></button>
                    </div>
                    <span class="sent-status seen" title="seen">
                                                <i class="fa-solid fa-circle-check"></i>
                                            </span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolorum rerum odit esse sunt quisquam pariatur nesciunt nihil amet!</p>
                  </div>
                  <div class="msg-box-inner">
                    <div class="msg-option">
                      <span class="msg-time">1 day.</span>
                      <button class="btn-flush"><i class="fa-light fa-ellipsis-vertical"></i></button>
                    </div>
                    <span class="sent-status seen" title="seen">
                                                <i class="fa-solid fa-circle-check"></i>
                                            </span>
                    <p>Omnis distinctio eaque voluptatibus. Reiciendis natus harum ea ipsam, et facere?</p>
                  </div>
                </div>
                <div class="avatar">
                  <img src="@/assets/images/admin.png" alt="Image">
                </div>
              </div>
              <div class="single-message">
                <div class="avatar">
                  <img src="@/assets/images/avatar-2.png" alt="Image">
                </div>
                <div class="msg-box">
                  <div class="msg-box-inner">
                    <div class="msg-option">
                      <span class="msg-time">1 day.</span>
                      <button class="btn-flush"><i class="fa-light fa-ellipsis-vertical"></i></button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolorum rerum odit esse sunt quisquam pariatur nesciunt nihil amet!</p>
                  </div>
                  <div class="msg-box-inner">
                    <div class="msg-option">
                      <span class="msg-time">1 day.</span>
                      <button class="btn-flush"><i class="fa-light fa-ellipsis-vertical"></i></button>
                    </div>
                    <p>Omnis distinctio eaque voluptatibus. Reiciendis natus harum ea ipsam, et facere?</p>
                  </div>
                </div>
              </div>
              <div class="single-message outgoing">
                <div class="msg-box">
                  <div class="msg-box-inner">
                    <div class="msg-option">
                      <span class="msg-time">1 day.</span>
                      <button class="btn-flush"><i class="fa-light fa-ellipsis-vertical"></i></button>
                    </div>
                    <span class="sent-status seen" title="seen">
                                                <i class="fa-solid fa-circle-check"></i>
                                            </span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolorum rerum odit esse sunt quisquam pariatur nesciunt nihil amet!</p>
                  </div>
                  <div class="msg-box-inner">
                    <div class="msg-option">
                      <span class="msg-time">1 day.</span>
                      <button class="btn-flush"><i class="fa-light fa-ellipsis-vertical"></i></button>
                    </div>
                    <span class="sent-status seen" title="seen">
                                                <i class="fa-solid fa-circle-check"></i>
                                            </span>
                    <p>Omnis distinctio eaque voluptatibus. Reiciendis natus harum ea ipsam, et facere?</p>
                  </div>
                </div>
                <div class="avatar">
                  <img src="@/assets/images/admin.png" alt="Image">
                </div>
              </div>
              <div class="day-divider"><span>Today</span></div>
              <div class="single-message">
                <div class="avatar">
                  <img src="@/assets/images/avatar-2.png" alt="Image">
                </div>
                <div class="msg-box">
                  <div class="msg-box-inner">
                    <div class="msg-option">
                      <span class="msg-time">1 hr.</span>
                      <button class="btn-flush"><i class="fa-light fa-ellipsis-vertical"></i></button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolorum rerum odit esse sunt quisquam pariatur nesciunt nihil amet!</p>
                  </div>
                  <div class="msg-box-inner">
                    <div class="msg-option">
                      <span class="msg-time">1 hr.</span>
                      <button class="btn-flush"><i class="fa-light fa-ellipsis-vertical"></i></button>
                    </div>
                    <p>Omnis distinctio eaque voluptatibus. Reiciendis natus harum ea ipsam, et facere?</p>
                  </div>
                </div>
              </div>
              <div class="single-message outgoing">
                <div class="msg-box">
                  <div class="msg-box-inner">
                    <div class="msg-option">
                      <span class="msg-time">1 hr.</span>
                      <button class="btn-flush"><i class="fa-light fa-ellipsis-vertical"></i></button>
                    </div>
                    <span class="sent-status" title="sent">
                                                <i class="fa-solid fa-circle-check"></i>
                                            </span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolorum rerum odit esse sunt quisquam pariatur nesciunt nihil amet!</p>
                  </div>
                  <div class="msg-box-inner">
                    <div class="msg-option">
                      <span class="msg-time">1 hr.</span>
                      <button class="btn-flush"><i class="fa-light fa-ellipsis-vertical"></i></button>
                    </div>
                    <span class="sent-status" title="sent">
                                                <i class="fa-solid fa-circle-check"></i>
                                            </span>
                    <p>Omnis distinctio eaque voluptatibus. Reiciendis natus harum ea ipsam, et facere?</p>
                  </div>
                </div>
                <div class="avatar">
                  <img src="@/assets/images/admin.png" alt="Image">
                </div>
              </div>
            </div>
          </div>
          <div class="panel-body msg-type-area">
            <form>
              <label class="btn btn-icon btn-outline-primary" for="chatAttachment"><i class="fa-light fa-link"></i></label>
              <input type="file" class="chat-attachment" id="chatAttachment">
              <input autocomplete="off" type="text" class="form-control chat-input" autofocus="" id="chat-input" placeholder="Type your message...">
              <button class="btn btn-icon btn-outline-primary"><i class="fa-light fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
      </div>
      <div class="panel border-start rounded-0 closed">
        <div class="panel-body border-bottom">
          <div class="user-short">
            <button class="back-to-chat-btn btn-flush fs-14 d-xxl-none"><i class="fa-light fa-arrow-left"></i></button>
            <div class="avatar avatar-lg">
              <img src="@/assets/images/avatar-2.png" alt="Image">
            </div>
            <div class="part-txt">
              <span class="user-name">Amelie Harris</span>
              <span class="user-mail">example@info.com</span>
            </div>
            <div class="user-option">
              <button class="btn btn-icon btn-outline-primary" data-bs-toggle="modal" data-bs-target="#voiceCallModal"><i class="fa-light fa-phone"></i></button>
              <button class="btn btn-icon btn-outline-primary" data-bs-toggle="modal" data-bs-target="#videoCallModal"><i class="fa-light fa-video"></i></button>
              <button class="btn btn-icon btn-outline-primary" @click="isMessageSearch = !isMessageSearch"><i class="fa-light fa-magnifying-glass"></i></button>
            </div>
          </div>
        </div>
        <div class="panel-body">
          <div class="scrollable">
            <div class="chatting-option mb-20">
              <ul>
                <li><a href="#"><span><i class="fa-light fa-photo-film"></i></span>Media</a></li>
                <li><a href="#"><span><i class="fa-light fa-file-lines"></i></span>Files</a></li>
                <li><a href="#"><span><i class="fa-light fa-link"></i></span>Links</a></li>
              </ul>
            </div>
            <div class="chatting-option">
              <ul>
                <li><a href="#"><span><i class="fa-light fa-bell-slash"></i></span>Mute notification</a></li>
                <li><a href="#"><span><i class="fa-light fa-message-slash"></i></span>Ignore message</a></li>
                <li><a href="#"><span><i class="fa-light fa-circle-minus"></i></span>Block user</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ModalWindow>
    <VoiceCallModal v-show="isShowModal" :closeModal="closeModal" />
  </ModalWindow>
  <ModalWindow>
    <VideoCallModal v-show="isShowVideoModal" :closeModal="closeModal" />
  </ModalWindow>
</template>

<style>
.main-content .chatting-panel .active-members .carousel__next{
  padding-left: 15px !important;
  padding-right: 0 !important;
  background: -webkit-gradient(linear, right top, left top, color-stop(30%, #112143), to(transparent));
  background: linear-gradient(-90deg, #112143 30%, transparent);
  right: -10px;
  top: 17px;
  height: 35px;
}

.light-theme .main-content .chatting-panel .active-members .carousel__next {
  background: -webkit-gradient(linear, right top, left top, color-stop(30%, #fff), to(transparent));
  background: linear-gradient(-90deg, #fff 30%, transparent);
}
.dark-theme .main-content .chatting-panel .active-members .carousel__next {
  background: -webkit-gradient(linear, right top, left top, color-stop(30%, #242526), to(transparent));
  background: linear-gradient(-90deg, #242526 30%, transparent);
  height: 35px;
}
.carousel__icon {
  fill: #ffffff;
}
.dark-theme .main-content .chatting-panel .active-members .carousel__icon {
  fill: #ffffff;
}
.light-theme .main-content .chatting-panel .active-members .carousel__icon {
  fill: #242526;
}

.carousel__prev{
  background: -webkit-gradient(linear, right top, left top, color-stop(30%, #112143), to(transparent));
  background: linear-gradient(-90deg, #112143 30%, transparent);
  height: 36px;
  padding-right: 15px !important;
  left: -20px;
  top: 17px;
}
.dark-theme .main-content .chatting-panel .active-members .carousel__prev{
  background: -webkit-gradient(linear, left top, right top, color-stop(30%, #242526), to(transparent));
  background: linear-gradient(90deg, #242526 30%, transparent);
}
.light-theme .main-content .chatting-panel .active-members .carousel__prev{
  background: -webkit-gradient(linear, left top, right top, color-stop(30%, #fff), to(transparent));
  background: linear-gradient(90deg, #fff 30%, transparent);
}
</style>