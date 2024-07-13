<script setup>
import {defineProps} from 'vue';
import {useCompanyStore} from "@/stores/useCompanies";

const props = defineProps({
  company: {
    type: Object,
    required: true
  }
});

const companyStore = useCompanyStore();

const handleEdit = () => {
  alert('under construction')
};

const handleShow = () => {
  alert('under construction')
};

const approveCompany = () => {
  companyStore.approveCompany(props.company.id)
};

const handleDelete = () => {
  alert('under construction')
};
</script>

<template>
  <div class="btn-box">
    <button @click="approveCompany" v-if="company.status ==='pending'"><i class="fa-light fa-check-circle"></i></button>
    <button @click="handleEdit"><i class="fa-light fa-eye"></i></button>
    <button @click="handleShow"><i class="fa-light fa-pen"></i></button>
    <button @click="handleDelete"><i class="fa-light fa-trash"></i></button>
  </div>
</template>

<style scoped>

</style>