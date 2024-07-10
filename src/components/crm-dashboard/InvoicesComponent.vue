<script setup>

</script>

<template>
  <div class="col-xl-8 col-lg-7">
    <div class="panel">
      <div class="panel-header">
        <h5>Invoices</h5>
        <router-link class="btn btn-sm btn-primary" :to="{name: 'invoices' }">View All</router-link>
      </div>
      <div class="panel-body p-0">
        <div class="table-responsive">
          <table class="table invoice-table table-hover">
            <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Client</th>
              <th>Due Date</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr  v-for="i in 6" :key="'invoice_'+i">
              <td>#INV-000{{ i }}</td>
              <td>Hazel Nutt</td>
              <td>9 Aug 2018</td>
              <td>$240</td>
              <td>
                <span class="d-block text-end">
                    <span class="badge bg-primary px-2">Partially Paid</span>
                </span>
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