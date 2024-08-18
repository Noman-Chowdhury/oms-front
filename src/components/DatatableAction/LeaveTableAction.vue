<script setup>
import {defineProps} from 'vue';
import Swal from "sweetalert2";
import {useShiftStore} from "@/stores/shift";
import {useLeaveStore} from "@/stores/leave";
import {useUserInfoStore} from "@/stores/userInfoStore";

const props = defineProps({
  leave: {
    type: Object,
    required: true
  }
});

const store = useLeaveStore();
const userInfoStore = useUserInfoStore()

const handleEdit = () => {
  store.leaveId = props.leave.id
  store.leave = props.leave
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
      store.leaveId = props.leave.id
      store.deleteData()
    }
  });
};

const handleApprove = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#034f75",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Approve it!"
  }).then((result) => {
    if (result.isConfirmed) {
      store.leaveId = props.leave.id
      store.updateStatus('approved')
    }
  });
};

const handleReject = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#034f75",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Reject it!"
  }).then((result) => {
    if (result.isConfirmed) {
      store.leaveId = props.leave.id
      store.updateStatus('rejected')
    }
  });
};
</script>

<template>
  <div class="btn-box">
    <button @click="handleEdit" class="btn btn-sm btn-primary"
            v-if="userInfoStore.user.is_employee && props.leave.status === 'In Review'"><i class="fa-solid fa-pen"></i>
    </button>
    <button @click="handleDelete" class="btn btn-sm btn-primary"
            v-if="userInfoStore.user.is_employee && props.leave.status === 'In Review'"><i
        class="fa-solid fa-trash"></i></button>
    <button @click="handleReject" class="btn btn-sm btn-primary"
            v-if="!userInfoStore.user.is_employee && props.leave.status === 'In Review'"><i
        class="fa-solid fa-times-circle"></i></button>
    <button @click="handleApprove" class="btn btn-sm btn-primary"
            v-if="!userInfoStore.user.is_employee && props.leave.status === 'In Review'"><i
        class="fa-solid fa-check-circle"></i></button>
  </div>
</template>

<style scoped>

</style>