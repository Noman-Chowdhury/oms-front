<script setup>
import {ref} from "vue";
import {useToast} from 'vue-toast-notification';
const $toast = useToast({ position: 'top-right'});

const input = ref(null)

const copyClipboard = ((link) => {
  navigator.clipboard.writeText(`${link}`);
  $toast.success('Your link has been copied')
});

</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>Font Awesome 6</h5>
        </div>
        <div class="panel-body">
          <div class="icon-row">
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-house'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-solid fa-house"></i>' hidden>
                <span class="icon"><i class="fa-solid fa-house"></i></span>
                <span class="icon-name">house</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-light fa-house'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-regular fa-house"></i>' hidden>
                <span class="icon"><i class="fa-regular fa-house"></i></span>
                <span class="icon-name">house</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-light fa-house'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-light fa-house"></i>' hidden>
                <span class="icon"><i class="fa-light fa-house"></i></span>
                <span class="icon-name">house</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-light fa-house'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-thin fa-house"></i>' hidden>
                <span class="icon"><i class="fa-thin fa-house"></i></span>
                <span class="icon-name">house</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-light fa-house'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-duotone fa-house"></i>' hidden>
                <span class="icon"><i class="fa-duotone fa-house"></i></span>
                <span class="icon-name">house</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-light fa-house'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-sharp fa-solid fa-house"></i>' hidden>
                <span class="icon"><i class="fa-sharp fa-solid fa-house"></i></span>
                <span class="icon-name">house</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-light fa-house'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-sharp fa-regular fa-house"></i>' hidden>
                <span class="icon"><i class="fa-sharp fa-regular fa-house"></i></span>
                <span class="icon-name">house</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-magnifying-glass'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-solid fa-magnifying-glass"></i>' hidden>
                <span class="icon"><i class="fa-solid fa-magnifying-glass"></i></span>
                <span class="icon-name">magnifying glass</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-magnifying-glass'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-regular fa-magnifying-glass"></i>' hidden>
                <span class="icon"><i class="fa-regular fa-magnifying-glass"></i></span>
                <span class="icon-name">magnifying glass</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-magnifying-glass'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-light fa-magnifying-glass"></i>' hidden>
                <span class="icon"><i class="fa-light fa-magnifying-glass"></i></span>
                <span class="icon-name">magnifying glass</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-magnifying-glass'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-thin fa-magnifying-glass"></i>' hidden>
                <span class="icon"><i class="fa-thin fa-magnifying-glass"></i></span>
                <span class="icon-name">magnifying glass</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-magnifying-glass'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-duotone fa-magnifying-glass"></i>' hidden>
                <span class="icon"><i class="fa-duotone fa-magnifying-glass"></i></span>
                <span class="icon-name">magnifying glass</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-sharp fa-solid fa-magnifying-glass"></i>' hidden>
                <span class="icon"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></span>
                <span class="icon-name">magnifying glass</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-magnifying-glass'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-sharp fa-regular fa-magnifying-glass"></i>' hidden>
                <span class="icon"><i class="fa-sharp fa-regular fa-magnifying-glass"></i></span>
                <span class="icon-name">magnifying glass</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-user'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-solid fa-user"></i>' hidden>
                <span class="icon"><i class="fa-solid fa-user"></i></span>
                <span class="icon-name">user</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-user'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-regular fa-user"></i>' hidden>
                <span class="icon"><i class="fa-regular fa-user"></i></span>
                <span class="icon-name">user</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-user'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-light fa-user"></i>' hidden>
                <span class="icon"><i class="fa-light fa-user"></i></span>
                <span class="icon-name">user</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-user'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-thin fa-user"></i>' hidden>
                <span class="icon"><i class="fa-thin fa-user"></i></span>
                <span class="icon-name">user</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-user'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-duotone fa-user"></i>' hidden>
                <span class="icon"><i class="fa-duotone fa-user"></i></span>
                <span class="icon-name">user</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-user'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-sharp fa-solid fa-user"></i>' hidden>
                <span class="icon"><i class="fa-sharp fa-solid fa-user"></i></span>
                <span class="icon-name">user</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-user'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-sharp fa-regular fa-user"></i>' hidden>
                <span class="icon"><i class="fa-sharp fa-regular fa-user"></i></span>
                <span class="icon-name">user</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-check'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-solid fa-check"></i>' hidden>
                <span class="icon"><i class="fa-solid fa-check"></i></span>
                <span class="icon-name">check</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-check'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-regular fa-check"></i>' hidden>
                <span class="icon"><i class="fa-regular fa-check"></i></span>
                <span class="icon-name">check</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-check'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-light fa-check"></i>' hidden>
                <span class="icon"><i class="fa-light fa-check"></i></span>
                <span class="icon-name">check</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-check'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-thin fa-check"></i>' hidden>
                <span class="icon"><i class="fa-thin fa-check"></i></span>
                <span class="icon-name">check</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-check'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-duotone fa-check"></i>' hidden>
                <span class="icon"><i class="fa-duotone fa-check"></i></span>
                <span class="icon-name">check</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-check'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-sharp fa-solid fa-check"></i>' hidden>
                <span class="icon"><i class="fa-sharp fa-solid fa-check"></i></span>
                <span class="icon-name">check</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-check'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-sharp fa-regular fa-check"></i>' hidden>
                <span class="icon"><i class="fa-sharp fa-regular fa-check"></i></span>
                <span class="icon-name">check</span>
              </div>
            </div>

            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-download'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-solid fa-download"></i>' hidden>
                <span class="icon"><i class="fa-solid fa-download"></i></span>
                <span class="icon-name">download</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-download'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-regular fa-download"></i>' hidden>
                <span class="icon"><i class="fa-regular fa-download"></i></span>
                <span class="icon-name">download</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-download'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-light fa-download"></i>' hidden>
                <span class="icon"><i class="fa-light fa-download"></i></span>
                <span class="icon-name">download</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-download'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-thin fa-download"></i>' hidden>
                <span class="icon"><i class="fa-thin fa-download"></i></span>
                <span class="icon-name">download</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-download'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-duotone fa-download"></i>' hidden>
                <span class="icon"><i class="fa-duotone fa-download"></i></span>
                <span class="icon-name">download</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-download'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-sharp fa-solid fa-download"></i>' hidden>
                <span class="icon"><i class="fa-sharp fa-solid fa-download"></i></span>
                <span class="icon-name">download</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-download'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-sharp fa-regular fa-download"></i>' hidden>
                <span class="icon"><i class="fa-sharp fa-regular fa-download"></i></span>
                <span class="icon-name">download</span>
              </div>
            </div>

            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-image'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-solid fa-image"></i>' hidden>
                <span class="icon"><i class="fa-solid fa-image"></i></span>
                <span class="icon-name">image</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-image'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-regular fa-image"></i>' hidden>
                <span class="icon"><i class="fa-regular fa-image"></i></span>
                <span class="icon-name">image</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-image'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-light fa-image"></i>' hidden>
                <span class="icon"><i class="fa-light fa-image"></i></span>
                <span class="icon-name">image</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-image'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-thin fa-image"></i>' hidden>
                <span class="icon"><i class="fa-thin fa-image"></i></span>
                <span class="icon-name">image</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-image'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-duotone fa-image"></i>' hidden>
                <span class="icon"><i class="fa-duotone fa-image"></i></span>
                <span class="icon-name">image</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-image'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-sharp fa-solid fa-image"></i>' hidden>
                <span class="icon"><i class="fa-sharp fa-solid fa-image"></i></span>
                <span class="icon-name">image</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-image'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-sharp fa-regular fa-image"></i>' hidden>
                <span class="icon"><i class="fa-sharp fa-regular fa-image"></i></span>
                <span class="icon-name">image</span>
              </div>
            </div>

            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-phone'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-solid fa-phone"></i>' hidden>
                <span class="icon"><i class="fa-solid fa-phone"></i></span>
                <span class="icon-name">phone</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-regular fa-phone"></i>' hidden>
                <span class="icon"><i class="fa-regular fa-phone"></i></span>
                <span class="icon-name">phone</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-light fa-phone'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-light fa-phone"></i>' hidden>
                <span class="icon"><i class="fa-light fa-phone"></i></span>
                <span class="icon-name">phone</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-thin fa-phone'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-thin fa-phone"></i>' hidden>
                <span class="icon"><i class="fa-thin fa-phone"></i></span>
                <span class="icon-name">phone</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-duotone fa-phone'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-duotone fa-phone"></i>' hidden>
                <span class="icon"><i class="fa-duotone fa-phone"></i></span>
                <span class="icon-name">phone</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-sharp fa-solid fa-phone'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-sharp fa-solid fa-phone"></i>' hidden>
                <span class="icon"><i class="fa-sharp fa-solid fa-phone"></i></span>
                <span class="icon-name">phone</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-sharp fa-regular fa-phone'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-sharp fa-regular fa-phone"></i>' hidden>
                <span class="icon"><i class="fa-sharp fa-regular fa-phone"></i></span>
                <span class="icon-name">phone</span>
              </div>
            </div>

            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-solid fa-bars'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-solid fa-bars"></i>' hidden>
                <span class="icon"><i class="fa-solid fa-bars"></i></span>
                <span class="icon-name">bars</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-regular fa-bars'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-regular fa-bars"></i>' hidden>
                <span class="icon"><i class="fa-regular fa-bars"></i></span>
                <span class="icon-name">bars</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-light fa-bars'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-light fa-bars"></i>' hidden>
                <span class="icon"><i class="fa-light fa-bars"></i></span>
                <span class="icon-name">bars</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-thin fa-bars'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-thin fa-bars"></i>' hidden>
                <span class="icon"><i class="fa-thin fa-bars"></i></span>
                <span class="icon-name">bars</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-duotone fa-bars'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-duotone fa-bars"></i>' hidden>
                <span class="icon"><i class="fa-duotone fa-bars"></i></span>
                <span class="icon-name">bars</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-sharp fa-solid fa-bars'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-sharp fa-solid fa-bars"></i>' hidden>
                <span class="icon"><i class="fa-sharp fa-solid fa-bars"></i></span>
                <span class="icon-name">bars</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-sharp fa-regular fa-bars'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-sharp fa-regular fa-bars"></i>' hidden>
                <span class="icon"><i class="fa-sharp fa-regular fa-bars"></i></span>
                <span class="icon-name">bars</span>
              </div>
            </div>

            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-solid fa-envelope"></i>' hidden>
                <span class="icon"><i class="fa-solid fa-envelope"></i></span>
                <span class="icon-name">envelope</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-regular fa-envelope'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-regular fa-envelope"></i>' hidden>
                <span class="icon"><i class="fa-regular fa-envelope"></i></span>
                <span class="icon-name">envelope</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-light fa-envelope'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-light fa-envelope"></i>' hidden>
                <span class="icon"><i class="fa-light fa-envelope"></i></span>
                <span class="icon-name">envelope</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-thin fa-envelope'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-thin fa-envelope"></i>' hidden>
                <span class="icon"><i class="fa-thin fa-envelope"></i></span>
                <span class="icon-name">envelope</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-duotone fa-envelope'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-duotone fa-envelope"></i>' hidden>
                <span class="icon"><i class="fa-duotone fa-envelope"></i></span>
                <span class="icon-name">envelope</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-sharp fa-solid fa-envelope'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-sharp fa-solid fa-envelope"></i>' hidden>
                <span class="icon"><i class="fa-sharp fa-solid fa-envelope"></i></span>
                <span class="icon-name">envelope</span>
              </div>
            </div>
            <div class="icon-col">
              <div class="icon-box">
                <button class="btn-flush copy-icon" @click="copyClipboard(`<i class='fa-sharp fa-regular fa-envelope'></i>`)"><i class="fa-light fa-clone"></i></button>
                <input type='text' class='icon-code' value='<i class="fa-sharp fa-regular fa-envelope"></i>' hidden>
                <span class="icon"><i class="fa-sharp fa-regular fa-envelope"></i></span>
                <span class="icon-name">envelope</span>
              </div>
            </div>
            <div class="w-100 text-center">
              <a href="https://fontawesome.com/" target="_blank" class="btn btn-sm btn-primary">See More Icons <i class="fa-light fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>