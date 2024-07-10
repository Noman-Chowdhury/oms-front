<script setup>

</script>

<template>
  <div class="col-xl-8 col-lg-6">
    <div class="panel">
      <div class="panel-header">
        <h5>Works Deadlines</h5>
        <a class="btn btn-sm btn-primary" href="#">View All</a>
      </div>
      <div class="panel-body p-0">
        <div class="table-responsive">
          <table class="table deadline-table table-hover">
            <thead>
            <tr>
              <th>Name</th>
              <th>Last Contacted</th>
              <th>Sales Representative</th>
              <th>Status</th>
              <th>Deal Value</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="i in 6" :key="'work_deadline_'+i">
              <td>Absternet LLC</td>
              <td>Sep 20, 2021</td>
              <td>Donald Risher</td>
              <td><span class="badge bg-primary-subtle px-2 rounded">Deal Won</span></td>
              <td>125K</td>
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