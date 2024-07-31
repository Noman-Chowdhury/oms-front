<script setup>
import {defineProps} from 'vue';
import {designationStore} from "@/stores/designation";
import Swal from "sweetalert2";

const props = defineProps({
  designation: {
    type: Object,
    required: true
  }
});

const desStore = designationStore();

const handleEdit = () => {
  desStore.designationId = props.designation.id
  desStore.designation = props.designation
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
      desStore.designationId = props.designation.id
      desStore.deleteDesignation()
    }
  });
};
</script>

<template>
  <div class="btn-box">
    <button @click="handleEdit"><i class="fa-light fa-pen"></i></button>
    <button @click="handleDelete"><i class="fa-light fa-trash"></i></button>
  </div>
</template>

<style scoped>

</style>