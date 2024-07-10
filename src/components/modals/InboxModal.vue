<script setup>
import {onMounted, ref} from "vue";
import TextEditorComponent from "@/components/TextEditorComponent.vue";

const props = defineProps(['closeModal']);

const isReplayShow = ref(false);
const message = ref('');
const isStar = ref(null);

const setImportantMail = ((index) => {
  isStar.value = index
})

const replayShowHide = (() => {
  isReplayShow.value = !isReplayShow.value;
});

onMounted(() => {
});
</script>

<template>
  <div class="mail-details-expanded active">
    <div class="mail-details" data-mail-tab="nav-primary">
      <div class="mail-body-top d-flex justify-content-between align-items-center mb-10">
        <div class="left d-flex align-items-center gap-2">
          <button class="btn btn-sm btn-icon btn-outline-danger close-mail" @click="closeModal"><i class="fa-light fa-xmark"></i></button>
          <span class="badge bg-secondary p-1 rounded">Inbox</span>
        </div>
        <div class="right d-flex align-items-center gap-3">
          <button class="btn-flush"><i class="fa-light fa-print"></i></button>
          <button class="btn-flush expandReply" @click="closeModal"><i class="fa-light fa-compress"></i></button>
        </div>
      </div>
      <div class="mail-conversation">
        <template v-for="i in 2">
          <div class="single-mail">
            <div class="mail-top" data-bs-toggle="collapse" :href="`#collapseMailInboxExpand-${i}`" role="button" aria-expanded="false" :aria-controls="`collapseMailInboxExpand-${i}`">
              <div class="mail-profile">
                <div class="avatar">
                  <img src="@/assets/images/avatar-2.png" alt="Image">
                </div>
                <div class="part-txt">
                  <span class="name">Amelie Harris</span>
                  <span class="mail">amelianda@example.com</span>
                </div>
              </div>
              <div class="mail-action">
                <span class="date">Jan 25<span class="d-sm-inline-block d-none">, 2023, 8:24 PM</span></span>
                <button class="btn-star" :class="{'starred': isStar === i}" @click="setImportantMail(i)"><i class="fa-solid fa-star"></i></button>
              </div>
            </div>
            <div class="collapse" :class="{show: i === 2}" :id="`collapseMailInboxExpand-${i}`">
              <div class="mail-body">
                <p>Dear Sanoar Vai,</p>
                <p>As discussed with you over phone. It would be very helpful for me to handle audits if I can enter
                  holidays separately. Please get back to me for further explanation.</p>
                <p>Regards,</p>
                <p>Farhad Reza</p>
                <p>Assistant Manager I HR &amp; Compliance</p>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="mail-reply-option">
        <div v-if="isReplayShow" class="mail-reply">
          <form>
            <input type="email" class="form-control form-control-sm mb-15" placeholder="To"
                   value="amelianda@example.com">
            <div class="editor">
              <TextEditorComponent v-model="message"/>
            </div>

            <div class="btn-box d-flex justify-content-end">
              <button class="btn btn-sm btn-primary">Send <i class="fa-light fa-paper-plane-top"></i></button>
            </div>
          </form>
        </div>
        <div v-if="!isReplayShow" class="btn-box gap-2 justify-content-end">
          <button class="btn btn-sm btn-primary reply-mail-btn" @click="replayShowHide">Reply</button>
          <button class="btn btn-sm btn-primary">Forward</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.single-mail:first-child {
  padding-top: 0;
}

.single-mail {
  border-bottom: 1px dashed rgba(255, 255, 255, 0.08);
}
</style>