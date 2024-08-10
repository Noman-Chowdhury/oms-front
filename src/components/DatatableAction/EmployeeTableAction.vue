<script setup>
import {defineProps} from 'vue';
import {designationStore} from "@/stores/designation";
import Swal from "sweetalert2";
import {useEmployeeStore} from "@/stores/employee";

const props = defineProps({
  employee: {
    type: Object,
    required: true
  }
});

const employeeStore = useEmployeeStore();

const handleEdit = () => {
  employeeStore.employeeId = props.employee.id
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
      employeeStore.employeeId = props.employee.id
      employeeStore.deleteDesignation()
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