<script setup>

</script>

<template>
  <div class="panel-body">
  <form>
    <div class="d-flex gap-2 mb-15">
      <input type="email" class="form-control form-control-sm" placeholder="To">
      <a role="button" class="btn btn-sm btn-outline-primary add-cc">cc</a>
      <a role="button" class="btn btn-sm btn-outline-primary add-bcc">bcc</a>
    </div>
    <input type="text" class="form-control form-control-sm mb-15 d-none input-cc" placeholder="Cc">
    <input type="text" class="form-control form-control-sm mb-15 d-none input-bcc" placeholder="Bcc">
    <input type="text" class="form-control form-control-sm mb-15" placeholder="Subject">
    <div class="editor"></div>
  </form>
  </div>
</template>

<style scoped>

</style>