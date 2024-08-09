<script setup>
import {defineProps} from 'vue';
import Swal from "sweetalert2";
import {useDepartmentStore} from "@/stores/department";

const props = defineProps({
  department: {
    type: Object,
    required: true
  }
});

const store = useDepartmentStore();

const handleEdit = () => {
  store.departmentId = props.department.id
  store.department = props.department
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
      store.departmentId = props.department.id
      store.deleteDepartments()
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