<script setup>
import {ref} from "vue";
const props = defineProps(['isOpenModal', 'closeModal', 'isComposeModalExpand']);
import TextEditorComponent from "@/components/TextEditorComponent.vue";
const message = ref('');
const isComposeModalExpand = ref(false);
</script>

<template>
  <div class="modal fade show d-block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="compose-mail" :class="{open: isOpenModal, 'expanded': isComposeModalExpand}">
          <div class="panel border">
            <div class="panel-header">
              <h5>New Message</h5>
              <div class="btn-box">
                <button class="btn btn-sm btn-icon btn-outline-primary" @click="closeModal"><i class="fa-light fa-minus"></i></button>
                <button class="btn btn-sm btn-icon btn-outline-primary d-xl-inline-block d-none" @click="isComposeModalExpand = !isComposeModalExpand"><i class="fa-light fa-arrow-up-right-and-arrow-down-left-from-center"></i></button>
                <button class="btn btn-sm btn-icon btn-outline-primary" id="closeComposeMail" @click="closeModal"><i class="fa-light fa-xmark"></i></button>
              </div>
            </div>
            <div class="panel-body">
              <form>
                <div class="d-flex gap-2 mb-15">
                  <input type="email" class="form-control form-control-sm" placeholder="To">
                  <a role="button" class="btn btn-sm btn-outline-primary add-cc">cc</a>
                  <a role="button" class="btn btn-sm btn-outline-primary add-bcc">bcc</a>
                </div>
                <input type="text" class="form-control form-control-sm mb-15 d-none input-cc" placeholder="Cc">
                <input type="text" class="form-control form-control-sm mb-15 d-none input-bcc" placeholder="Bcc">
                <input type="text" class="form-control form-control-sm mb-15" placeholder="Subject">
                <div class="editor">
                  <TextEditorComponent v-model="message"/>
                </div>
                <div class="d-flex justify-content-end gap-2">
                  <button type="reset" class="btn btn-sm btn-outline-danger" id="discardMail" @click="closeModal">Discard</button>
                  <button class="btn btn-sm btn-primary">Send <i class="fa-light fa-paper-plane-top"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>