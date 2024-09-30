<script setup>
import {defineProps} from 'vue';
import Swal from "sweetalert2";
import {useShiftStore} from "@/stores/shift";
import {useLeaveStore} from "@/stores/leave";
import {useUserInfoStore} from "@/stores/userInfoStore";
import {useRolePermissionStore} from "@/stores/rolePermission";
import {useRouter} from "vue-router";

const props = defineProps({
  role: {
    type: Object,
    required: true
  }
});

const store = useRolePermissionStore();
const userInfoStore = useUserInfoStore()
const router = useRouter()
const handleEdit = () => {
  store.roleId = props.role.id
  store.role = props.role
  router.push('roles/edit/' + props.role.id)
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
      store.roleId = props.role.id
      store.deleteData()
    }
  });
};

</script>

<template>
  <div class="btn-box">
    <button @click="handleEdit" class="btn btn-sm btn-primary"><i class="fa-solid fa-pen"></i>
    </button>
    <button @click="handleDelete" class="btn btn-sm btn-primary"><i
        class="fa-solid fa-trash"></i></button>
  </div>
</template>

<style scoped>

</style>