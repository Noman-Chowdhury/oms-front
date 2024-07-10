<script setup>

</script>

<template>
  <div class="col-lg-6">
    <div class="panel">
      <div class="panel-header">
        <h5>Upcoming Activities</h5>
        <div class="btn-box">
          <a href="#" class="btn btn-sm btn-primary">View All</a>
        </div>
      </div>
      <div class="panel-body">
        <div class="table-responsive">
          <table class="table table-hover table-activity">
            <tbody>
            <tr v-for="i in 4" :key="'upcoming_activity_'+i">
              <td>
                <div class="activity-box">
                  <div class="date-box">
                    <span>14</span>
                    <span>Feb</span>
                  </div>
                  <div class="part-txt">
                    <span>Meeting for campaign with sales team</span>
                    <span>12:00am - 03:30pm</span>
                  </div>
                </div>
              </td>
              <td>
                <div class="avatar-box justify-content-end">
                  <div class="avatar">
                    <img src="@/assets/images/avatar-2.png" alt="image">
                  </div>
                  <div class="avatar">
                    <img src="@/assets/images/avatar-3.png" alt="image">
                  </div>
                  <div class="avatar">
                    <img src="@/assets/images/avatar-4.png" alt="image">
                  </div>
                  <div class="avatar bg-primary rounded-circle d-flex justify-content-center align-items-center text-white">6</div>
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