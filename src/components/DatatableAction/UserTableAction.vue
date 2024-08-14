<script setup>
import {defineProps} from 'vue';
import Swal from "sweetalert2";
import {useUserStore} from "@/stores/users";

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
});

const userStore = useUserStore();

const handleEdit = () => {
  userStore.userId = props.user.id
  userStore.user = props.user
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
      userStore.userId = props.user.id
      userStore.deleteData()
    }
  });
};
</script>

<template>
  <div class="btn-box">
    <button @click="handleEdit" class="btn btn-sm btn-primary"><i class="fa-solid fa-pen"></i></button>
    <button @click="handleDelete" class="btn btn-sm btn-primary"><i class="fa-solid fa-trash"></i></button>
  </div>
</template>

<style scoped>

</style>