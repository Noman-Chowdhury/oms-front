import 'bootstrap'
import '@popperjs/core'

import '@/assets/vendor/css/all.min.css'
import 'overlayscrollbars/overlayscrollbars.css';
import '@/assets/vendor/css/bootstrap.min.css'
import '@/assets/vendor/css/jquery.uploader.css'
import '@/assets/vendor/css/dropzone.min.css'
import '@/assets/vendor/css/material-icon.css'
import 'vue-datepicker-next/index.css';
import '@/assets/css/style.css'
// import '@/assets/scss/style.scss'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

import AOS from 'aos'
import 'aos/dist/aos.css'

import i18n from "./i18n"

import {createApp, inject} from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import router from './router'

const app = createApp(App)

app.use(i18n);
app.use(ToastPlugin);
app.use(createPinia());
app.use(router);
app.use(VueSweetalert2);

app.mount('#app', AOS.init());
