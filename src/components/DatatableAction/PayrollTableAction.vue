<script setup>
import {defineProps} from 'vue';
import Swal from "sweetalert2";
import {useUserInfoStore} from "@/stores/userInfoStore";
import {usePayrollStore} from "@/stores/payroll";
import ModalWindow from "@/components/ModalWindow.vue";
import * as bootstrap from "bootstrap";

const props = defineProps({
  payroll: {
    type: Object,
    required: true
  }
});

const store = usePayrollStore();
const userInfoStore = useUserInfoStore()

const handleEdit = () => {
  store.payrollId = props.payroll.id
  store.payroll = props.payroll
};

const handleDelete = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#034f75",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      store.payrollId = props.payroll.id
      store.deleteData()
    }
  });
};

const handlePreview = () =>{
  store.payrollId = props.payroll.id
  store.getData()
  const myModal = new bootstrap.Modal('#payroll-modal', {
    keyboard: false
  })
  myModal.show();
}

const closePreview = () => {
  store.payrollPreviewHtml = null; // Clear the preview on close
};
</script>

<template>
  <div class="btn-box">
<!--    <button @click="handleEdit" class="btn btn-sm btn-primary"><i class="fa-solid fa-pen"></i>-->
<!--    </button>-->
    <button @click="handlePreview" class="btn btn-sm btn-primary"><i class="fa-solid fa-eye"></i>11
    </button>
<!--    <button @click="handleDelete" class="btn btn-sm btn-primary"><i-->
<!--        class="fa-solid fa-trash"></i></button>-->
  </div>
  <!-- Modal for preview -->
  <ModalWindow>
    <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="payroll-modal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <form class="needs-validation" name="event-form" id="form-event" novalidate>
            <div class="modal-header">
              <h5 class="modal-title" id="modal-title">Preview</h5>
              <button type="button" class="btn btn-sm btn-icon btn-outline-primary" data-bs-dismiss="modal" aria-label="Close"><i class="fa-light fa-xmark"></i></button>
            </div>
            <div class="modal-body">
              <div v-html="store.payrollPreviewHtml"></div>
              <div class="row">
                <div class="col-6">
                </div>
                <div class="col-6 text-end">
                  <button type="button" class="btn btn-sm btn-light me-1" data-bs-dismiss="modal" @click="closePreview">Close</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </ModalWindow>

</template>

<style scoped>
.modal-content{
  width: unset !important;
}
</style>