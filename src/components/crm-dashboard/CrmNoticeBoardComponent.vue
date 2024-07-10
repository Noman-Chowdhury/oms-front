<script setup>

</script>

<template>
  <div class="col-xl-4 col-lg-6">
    <div class="panel">
      <div class="panel-header">
        <h5>Notice Board</h5>
        <a class="btn btn-sm btn-primary" href="#">View All</a>
      </div>
      <div class="panel-body p-0">
        <div class="table-responsive">
          <table class="table notice-board-table table-hover">
            <thead>
            <tr>
              <th>Notice</th>
              <th>Published By</th>
              <th>Date Added</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr  v-for="i in 6" :key="'notice_'+i">
              <td>New Notice</td>
              <td>Mr. Alrazy</td>
              <td>20th April 2020</td>
              <td>
                <div class="btn-box d-flex justify-content-end gap-3">
                  <button class="btn-flush"><i class="fa-light fa-eye"></i></button>
                  <button class="btn-flush"><i class="fa-light fa-pen"></i></button>
                  <button class="btn-flush"><i class="fa-light fa-trash-can"></i></button>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>