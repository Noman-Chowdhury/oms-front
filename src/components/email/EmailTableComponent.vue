<script setup>
const props = defineProps(['openModal']);
</script>

<template>
  <table class="table table-dashed table-hover digi-dataTable email-table">
    <thead>
    <tr>
      <th class="no-sort">
        <div class="form-check">
          <input class="form-check-input markAllMail" type="checkbox">
        </div>
      </th>
      <th class="no-sort"><i class="fa-light fa-star"></i></th>
      <th>Sender</th>
      <th>Subject</th>
      <th class="no-sort"><i class="fa-light fa-paperclip"></i></th>
      <th class="no-sort">Action</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(i, index) in 6" :class="{unread : index !== 2}">
      <td>
        <div class="form-check">
          <input class="form-check-input" type="checkbox">
        </div>
      </td>
      <td><button class="btn-star starred"><i class="fa-solid fa-star"></i></button></td>
      <td><span class="table-txt" @click="openModal('inbox')">Shaikh Abu Dardah</span></td>
      <td><span class="table-txt" @click="openModal('inbox')">Recommended for home: 20 Kinds Scented Candles Flower - Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere autem quae repellendus perferendis exercitationem, corrupti aspernatur? Iste possimus architecto voluptas, cupiditate facilis, placeat quod corrupti molestias minima mollitia voluptatum.</span></td>
      <td><i class="fa-light fa-paperclip"></i></td>
      <td>
        <div class="btn-box ms-0">
          <button class="btn-flush"><i class="fa-light fa-box-archive"></i></button>
          <button class="btn-flush"><i class="fa-light fa-circle-exclamation"></i></button>
          <button class="btn-flush"><i class="fa-light fa-envelope"></i></button>
          <button class="btn-flush"><i class="fa-light fa-trash-can"></i></button>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>