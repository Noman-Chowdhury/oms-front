<script setup>
import {onMounted, ref, shallowRef} from "vue";
import ModalWrapper from "@/components/ModalWrapper.vue";
import NewMessage from "@/components/modals/NewMessage.vue";
import InboxModal from "@/components/modals/InboxModal.vue";
import EmailTableComponent from "@/components/email/EmailTableComponent.vue";
import EmailTableFilterComponent from "@/components/email/EmailTableFilterComponent.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import ComposeNewMailComponent from "@/components/modals/ComposeNewMailComponent.vue";
import AddNewLabelModalComponent from "@/components/modals/AddNewLabelModalComponent.vue";
import DigiDataTable from "@/components/datatable/DigiDataTable.vue";

import EmailTableAction from "@/components/email/EmailTableAction.vue";
import EmailTableHeaderComponent from "@/components/email/EmailTableHeaderComponent.vue";
import MailDetailsComponent from "@/components/email/MailDetailsComponent.vue";

const emailActionComponent = shallowRef(EmailTableAction);

const isOpenModal = ref(false);
const isOpenInboxModal = ref(false);
const isOpenInboxModalExpand = ref(false);
const labelList = ref([]);

const table = ref(null);
const selectedItems = ref([]);
const isSearch = ref(true);
const perPageOptions = ref([10, 25, 50, 100]);

const openModal = ((modalType) => {
  if (typeof modalType === 'object') {
    isOpenInboxModal.value = true
  } else {
    isOpenModal.value = true
  }
});

const openInboxExpand = (() => {
  isOpenInboxModalExpand.value = true
})

const closeInboxExpand = (() => {
  isOpenInboxModalExpand.value = false
})

const closeModal = (() => {
  isOpenModal.value = false
  isOpenInboxModal.value = false
});

const tabs = ref([
  {name: 'Inbox', slug: 'inbox', icon: 'fa-inbox', badge: '9+'},
  {name: 'Starred', slug: 'starred', icon: 'fa-star'},
  {name: 'Trash', slug: 'trash', icon: 'fa-trash-can'},
  {name: 'Sent', slug: 'sent', icon: 'fa-paper-plane-top'},
  {name: 'Draft', slug: 'draft', icon: 'fa-file'},
  {name: 'All Email', slug: 'all-email', icon: 'fa-envelopes'},
  {name: 'Spam', slug:'spam', icon: 'fa-hexagon-exclamation'},
  {name: 'Important', slug:'important', icon: 'fa-ribbon'},
])
const inboxTabs = ref([
  {name: 'Primary', slug: 'inbox', icon: 'fa-inbox'},
  {name: 'Promotion', slug: 'starred', icon: 'fa-star', badge: '9+'},
  {name: 'Social', slug: 'trash', icon: 'fa-trash-can'},
  {name: 'Updates', slug: 'sent', icon: 'fa-paper-plane-top'},
])

const tableColumns = ref([
  { label: "", key: "selected", type: "checkbox" },
  { label: '<i class="fa-light fa-star"></i>', key: "star", sortable: true, class: 'table-txt', hasMethod: true, type: "html" },
  { label: "Sender", key: "sender", sortable: true, class: 'table-txt', hasMethod: true },
  { label: "Subject", key: "subject", sortable: true, class: 'table-txt', type: 'html' },
  { label: '<i class="fa-light fa-paperclip"></i>', key: "attachment", type: "html" },
  { label: "Action", key: "action", type: "component" },
]);

const tableData = ref([
  { id: 1, star: '<button class="btn-star starred"><i class="fa-solid fa-star"></i></button>', sender: "Rachelle Zellick", subject: 'Atherosclerosis of native coronary artery of transplanted heart without angina pectoris', attachment: '<i class="fa-light fa-paperclip"></i>', action: emailActionComponent },
  { id: 2, star: '<button class="btn-star starred"><i class="fa-solid fa-star"></i></button>', sender: "Alec Conradsen", subject: 'Congenital dilatation of esophagus', attachment: '<i class="fa-light fa-paperclip"></i>', action: emailActionComponent },
  { id: 3, star: '<button class="btn-star starred"><i class="fa-solid fa-star"></i></button>', sender: "Other dystonia", subject: 'Other dystonia', attachment: '<i class="fa-light fa-paperclip"></i>', action: emailActionComponent },
  { id: 4, star: '<button class="btn-star starred"><i class="fa-solid fa-star"></i></button>', sender: "Mercy Wetherell", subject: 'Medium chain acyl CoA dehydrogenase deficiency', attachment: '<i class="fa-light fa-paperclip"></i>', action: emailActionComponent },
  { id: 5, star: '<button class="btn-star starred"><i class="fa-solid fa-star"></i></button>', sender: "Shaikh Abu Dardah", subject: 'Medium chain acyl CoA dehydrogenase deficiency', attachment: '<i class="fa-light fa-paperclip"></i>', action: emailActionComponent },
  { id: 6, star: '<button class="btn-star starred"><i class="fa-solid fa-star"></i></button>', sender: "Rachelle Zellick", subject: 'Atherosclerosis of native coronary artery of transplanted heart without angina pectoris', attachment: '<i class="fa-light fa-paperclip"></i>', action: emailActionComponent },
  { id: 7, star: '<button class="btn-star starred"><i class="fa-solid fa-star"></i></button>', sender: "Alec Conradsen", subject: 'Congenital dilatation of esophagus', attachment: '<i class="fa-light fa-paperclip"></i>', action: emailActionComponent },
  { id: 8, star: '<button class="btn-star starred"><i class="fa-solid fa-star"></i></button>', sender: "Other dystonia", subject: 'Other dystonia', attachment: '<i class="fa-light fa-paperclip"></i>', action: emailActionComponent },
  { id: 9, star: '<button class="btn-star starred"><i class="fa-solid fa-star"></i></button>', sender: "Mercy Wetherell", subject: 'Medium chain acyl CoA dehydrogenase deficiency', attachment: '<i class="fa-light fa-paperclip"></i>', action: emailActionComponent },
  { id: 10, star: '<button class="btn-star starred"><i class="fa-solid fa-star"></i></button>', sender: "Shaikh Abu Dardah", subject: 'Medium chain acyl CoA dehydrogenase deficiency', attachment: '<i class="fa-light fa-paperclip"></i>', action: emailActionComponent },
  { id: 11, star: '<button class="btn-star starred"><i class="fa-solid fa-star"></i></button>', sender: "Shaikh Abu Dardah", subject: 'Medium chain acyl CoA dehydrogenase deficiency', attachment: '<i class="fa-light fa-paperclip"></i>', action: emailActionComponent },
])

const dtSearch = ((searchText) => {
  table.value.updateSearch(searchText)
})

const handleAddLabel = ((label) => {
  labelList.value.push(label)
});

const updatePerPage = ((perPage) => {
  table.value.updatePerPage(perPage)
})

onMounted(() => {

});
</script>

<template>
  <div class="email-panel d-flex rounded">
    <div class="panel rounded-0 border-end">
      <div class="panel-body email-menu">
        <div class="scrollable">
          <div class="btn-box d-flex gap-1 mb-20">
            <button class="btn btn-primary w-100 compose-mail-btn" @click="openModal('')"><i class="fa-light fa-pen-to-square"></i> Compose</button>
            <button class="btn btn-icon btn-primary close-mail-menu-btn d-lg-none"><i class="fa-light fa-bars"></i></button>
          </div>
          <div class="emial-menu-list">
            <div class="scrollable">
              <ul class="nav" role="tablist">
                <li v-for="(tab, index) in tabs">
                  <button :class="['btn-flush', { active: index === 0 }]" :id="`nav-${tab.slug}-tab`" data-bs-toggle="tab" :data-bs-target="`#nav-${tab.slug}`" type="button" role="tab" :aria-controls="`nav-${tab.slug}`" aria-selected="true">
                    <span v-if="tab.badge" class="badge bg-danger">{{ tab.badge }}</span>
                    <span class="part-icon"><i class="fa-light " :class="tab.icon"></i></span>
                    <span class="part-txt">{{ tab.name }}</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <button class="btn btn-sm btn-outline-primary w-100" data-bs-toggle="modal" data-bs-target="#addLabelModal"><i class="fa-light fa-plus"></i> Add New Label</button>
          <div class="new-label-list">
            <button v-for="label in labelList" class="btn-flush d-block w-100 text-start">
              <span class="part-icon"><i class="fa-light fa-badge"></i></span> <span class="part-txt">{{ label }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="panel rounded-0">
      <div class="tab-content">
        <div v-for="(tab, tIndex) in tabs" :class="['tab-pane fade', { 'show active': tIndex === 0 }]" :id="`nav-${tab.slug}`" role="tabpanel" :aria-labelledby="`nav-${tab.slug}-tab`" tabindex="0">
          <EmailTableHeaderComponent
            :dtSearch="dtSearch"
            :isSearch="isSearch"
          >
            <template #title>{{ tab.name }}</template>
          </EmailTableHeaderComponent>
          <div class="panel-body">
            <EmailTableFilterComponent :tab="tab" :perPageOptions="perPageOptions" :updatePerPage="updatePerPage"/>
            <div class="tab-content email-tab-content" :id="`nav-tabContent-${tab.slug}`">
              <div class="tab-pane fade show active" id="nav-primary" role="tabpanel" aria-labelledby="nav-primary-tab" tabindex="0">
                <div class="table-wrapper" :class="{'mail-opened': isOpenInboxModal}">
                  <div class="mail-list">
                    <digi-data-table
                      ref="table"
                      :data="tableData"
                      :columns="tableColumns"
                      :selectedItems="selectedItems"
                      @update:selectedItems="selectedItems = $event"
                      :handleRowClick="openModal"
                      :classes="'lc-start'"
                    >
                    </digi-data-table>
                  </div>
                  <MailDetailsComponent
                      v-if="!isOpenInboxModalExpand"
                      :isOpenModal="isOpenInboxModal"
                      :closeModal="closeModal"
                      :openInboxExpand="openInboxExpand"
                      :closeInboxExpand="closeInboxExpand"
                  />
                </div>
              </div>
              <div class="tab-pane fade" id="nav-promotion" role="tabpanel" aria-labelledby="nav-promotion-tab" tabindex="0">
                <div class="table-wrapper">
                  <div class="mail-list">
                    <digi-data-table
                        ref="table"
                        :data="tableData"
                        :columns="tableColumns"
                        :selectedItems="selectedItems"
                        @update:selectedItems="selectedItems = $event"
                        :handleRowClick="openModal"
                        :classes="'lc-start'"
                    >
                    </digi-data-table>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="nav-social" role="tabpanel" aria-labelledby="nav-social-tab" tabindex="0">
                <div class="table-wrapper">
                  <div class="mail-list">
                    <digi-data-table
                        ref="table"
                        :data="tableData"
                        :columns="tableColumns"
                        :selectedItems="selectedItems"
                        @update:selectedItems="selectedItems = $event"
                        :handleRowClick="openModal"
                        :classes="'lc-start'"
                    >
                    </digi-data-table>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="nav-updates" role="tabpanel" aria-labelledby="nav-updates-tab" tabindex="0">
                <div class="table-wrapper">
                  <div class="mail-list">
                    <digi-data-table
                        ref="table"
                        :data="tableData"
                        :columns="tableColumns"
                        :selectedItems="selectedItems"
                        @update:selectedItems="selectedItems = $event"
                        :handleRowClick="openModal"
                        :classes="'lc-start'"
                    >
                    </digi-data-table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ModalWindow v-if="isOpenModal">
    <ComposeNewMailComponent
        :isOpenModal="isOpenModal"
        :closeModal="closeModal"
    />
  </ModalWindow>

  <ModalWindow
      v-if="isOpenInboxModalExpand"
  >
    <InboxModal :closeModal="closeInboxExpand"/>
  </ModalWindow>

  <ModalWindow>
    <AddNewLabelModalComponent :handleAddLabel="handleAddLabel" />
  </ModalWindow>
</template>

<style scoped>

</style>