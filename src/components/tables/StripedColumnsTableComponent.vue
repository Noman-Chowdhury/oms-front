<script setup>

</script>

<template>
  <div class="col-lg-6">
    <div class="card">
      <div class="card-header">
        Striped columns
      </div>
      <div class="card-body">
        <p class="fs-14 pb-1 mb-10">Use <code>.table-striped-columns</code> to add zebra-striping to any table column.</p>
        <div class="table-responsive">
          <table class="table table-striped-columns">
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
            <tr>
              <td>#INV-0001</td>
              <td>Hazel Nutt</td>
              <td>9 Aug 2018</td>
              <td>$240</td>
              <td>
                <span class="badge bg-primary px-2">Partially Paid</span>
              </td>
            </tr>
            <tr>
              <td>#INV-0002</td>
              <td>Hazel Nutt</td>
              <td>9 Aug 2018</td>
              <td>$240</td>
              <td>
                <span class="badge bg-success px-2">Paid</span>
              </td>
            </tr>
            <tr>
              <td>#INV-0003</td>
              <td>Hazel Nutt</td>
              <td>9 Aug 2018</td>
              <td>$240</td>
              <td>
                <span class="badge bg-primary px-2">Partially Paid</span>
              </td>
            </tr>
            <tr>
              <td>#INV-0004</td>
              <td>Hazel Nutt</td>
              <td>9 Aug 2018</td>
              <td>$240</td>
              <td>
                <span class="badge bg-success px-2">Paid</span>
              </td>
            </tr>
            <tr>
              <td>#INV-0005</td>
              <td>Hazel Nutt</td>
              <td>9 Aug 2018</td>
              <td>$240</td>
              <td>
                <span class="badge bg-primary px-2">Partially Paid</span>
              </td>
            </tr>
            <tr>
              <td>#INV-0006</td>
              <td>Hazel Nutt</td>
              <td>9 Aug 2018</td>
              <td>$240</td>
              <td>
                <span class="badge bg-success px-2">Paid</span>
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