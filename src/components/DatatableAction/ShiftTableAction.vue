<script setup>
import {defineProps} from 'vue';
import Swal from "sweetalert2";
import {useShiftStore} from "@/stores/shift";
import {useUserInfoStore} from "@/stores/userInfoStore";

const props = defineProps({
  shift: {
    type: Object,
    required: true
  }
});

const store = useShiftStore();
const permissionStore = useUserInfoStore()
const handleEdit = () => {
  store.shiftId = props.shift.id
  store.shift = props.shift
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
      store.shiftId = props.shift.id
      store.deleteShift()
    }
  });
};
</script>

<template>
  <div class="btn-box">
    <button @click="handleEdit" class="btn btn-sm btn-primary" v-if="permissionStore.hasPermission('edit shift')"><i class="fa-solid fa-pen"></i></button>
    <button @click="handleDelete" class="btn btn-sm btn-primary" v-if="permissionStore.hasPermission('delete shift')"><i class="fa-solid fa-trash"></i></button>
  </div>
</template>

<style scoped>

</style>