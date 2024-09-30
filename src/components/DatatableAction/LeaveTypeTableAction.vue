<script setup>
import {defineProps} from 'vue';
import Swal from "sweetalert2";
import {useLeaveTypeStore} from "@/stores/leaveTypes";
import {useUserInfoStore} from "@/stores/userInfoStore";

const props = defineProps({
  leaveType: {
    type: Object,
    required: true
  }
});

const store = useLeaveTypeStore();
const permissionStore = useUserInfoStore()

const handleEdit = () => {
  store.leaveTypeId = props.leaveType.id
  store.leaveType = props.leaveType
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
      store.leaveTypeId = props.leaveType.id
      store.deleteData()
    }
  });
};
</script>

<template>
  <div class="btn-box">
    <button @click="handleEdit" class="btn btn-sm btn-primary" v-if="permissionStore.hasPermission('edit leave type')"><i class="fa-solid fa-pen"></i></button>
    <button @click="handleDelete" class="btn btn-sm btn-primary" v-if="permissionStore.hasPermission('delete leave type')"><i class="fa-solid fa-trash"></i></button>
  </div>
</template>

<style scoped>

</style>