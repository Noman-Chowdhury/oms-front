<script setup>
import {onMounted} from "vue";

const props = defineProps(['recentFiles']);

onMounted(() => {
})

</script>

<template>
  <div class="table-responsive">
    <div class="file-manager-row list-view">
      <div class="file-manager-col-head">
        <span>Thumbnail</span>
        <span>Name</span>
        <span>File Size</span>
        <span>Type</span>
        <span></span>
      </div>
      <div v-for="(file, fileKey) in recentFiles" :key="'stared_file_'+ fileKey" class="file-manager-col">
        <div class="file-card">
          <div class="part-img">
            <button class="btn-flush" data-bs-toggle="modal" data-bs-target="#fileDetailsModal">
              <img :src="file.file_path" alt="Image">
            </button>
          </div>
          <div class="part-txt">
            <div class="d-flex justify-content-between">
              <button class="btn-flush file-name" data-bs-toggle="modal" data-bs-target="#fileDetailsModal">{{ file.file_name }}</button>
              <span class="file-size">{{ file.file_size }}</span>
            </div>
          </div>
          <div class="file-type">
            <span>{{ file.file_type }} file</span>
          </div>
          <div class="dropdown action">
            <button class="btn-star starred"><i class="fa-solid fa-star"></i></button>
            <button class="btn-flush" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-regular fa-ellipsis-vertical"></i>
            </button>
            <button class="btn btn-sm btn-outline-primary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Action <i class="fa-regular fa-angle-down"></i>
            </button>
            <ul class="dropdown-menu">
              <li><button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#fileDetailsModal"><span class="dropdown-icon"><i class="fa-light fa-eye"></i></span> View</button></li>
              <li><a class="dropdown-item" href="#"><span class="dropdown-icon"><i class="fa-light fa-pen"></i></span> Rename</a></li>
              <li><a class="dropdown-item" href="#"><span class="dropdown-icon"><i class="fa-light fa-arrows-up-down-left-right"></i></span> Move</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#"><span class="dropdown-icon"><i class="fa-light fa-trash"></i></span> Delete</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>