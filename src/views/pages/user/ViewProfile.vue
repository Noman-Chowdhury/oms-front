<script setup>
import DashboardBreadcrumb from "@/components/DashboardBreadcrumb.vue";
</script>

<template>
  <DashboardBreadcrumb>
    <template #title>View Profile</template>
  </DashboardBreadcrumb>
  <div class="row g-4">
    <div class="col-md-4">
      <div class="panel">
        <div class="panel-body">
          <div class="profile-sidebar">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="profile-sidebar-title">User Information</h5>
              <div class="dropdown">
                <button class="btn btn-sm btn-icon btn-outline-primary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa-solid fa-ellipsis"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-sm dropdown-menu-sm-end">
                  <li><router-link :to="{ name: 'edit_profile'}" class="dropdown-item"><i class="fa-regular fa-pen-to-square"></i> Edit Information</router-link></li>
                </ul>
              </div>
            </div>
            <div class="top">
              <div class="image-wrap">
                <div class="part-img rounded-circle overflow-hidden">
                  <img src="@/assets/images/admin.png" alt="admin">
                </div>
                <button class="image-change"><i class="fa-light fa-camera"></i></button>
              </div>
              <div class="part-txt">
                <h4 class="admin-name">Mitchell C. Shay</h4>
                <span class="admin-role">Graphic Designer</span>
                <div class="admin-social">
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i class="fa-brands fa-twitter"></i></a>
                  <a href="#"><i class="fa-brands fa-google"></i></a>
                  <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div class="bottom">
              <h6 class="profile-sidebar-subtitle">Communication Info</h6>
              <ul>
                <li><span>Full Name:</span>Anna Adame</li>
                <li><span>Mobile:</span>+(1) 987 65433</li>
                <li><span>Mail:</span>example@mail.com</li>
                <li><span>Address:</span>California, United States</li>
                <li><span>Joining Date:</span>24 Nov 2022</li>
              </ul>
              <h6 class="profile-sidebar-subtitle">About Me</h6>
              <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <div class="row mb-25">
        <div class="col-lg-4">
          <div class="dashboard-top-box rounded-bottom panel-bg">
            <div class="left">
              <h3>$34,152</h3>
              <p>Shipping fees are not</p>
              <a href="#">View net earnings</a>
            </div>
            <div class="right">
              <span class="text-primary">+16.24%</span>
              <div class="part-icon rounded">
                <span><i class="fa-light fa-dollar-sign"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-6 col-xs-12">
          <div class="dashboard-top-box rounded-bottom panel-bg">
            <div class="left">
              <h3>36,894</h3>
              <p>Orders</p>
              <a href="#">Excluding orders in transit</a>
            </div>
            <div class="right">
              <span class="text-primary">+16.24%</span>
              <div class="part-icon rounded">
                <span><i class="fa-light fa-bag-shopping"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-6 col-xs-12">
          <div class="dashboard-top-box rounded-bottom panel-bg">
            <div class="left">
              <h3>$34,152</h3>
              <p>Customers</p>
              <a href="#">See details</a>
            </div>
            <div class="right">
              <span class="text-primary">+16.24%</span>
              <div class="part-icon rounded">
                <span><i class="fa-light fa-user"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-header">
          <h5>User Activities</h5>
          <div class="dropdown">
            <a href="#" class="btn btn-sm btn-primary">View All</a>
          </div>
        </div>
        <div class="panel-body">
          <div class="user-activity">
            <ul>
              <li>
                <div class="left">
                  <span class="user-activity-title">Your account is logged in</span>
                  <span class="user-activity-details">From "RuthDyer" UiDesign Leave</span>
                  <span class="user-activity-date">Monday 12 Jan 2020.</span>
                </div>
                <div class="right">
                  <span class="user-activity-time">6 min ago</span>
                </div>
              </li>
              <li>
                <div class="left">
                  <span class="user-activity-title">Current language has been changed</span>
                  <span class="user-activity-details">From "RuthDyer" UiDesign Leave</span>
                  <span class="user-activity-date">Monday 12 Jan 2020.</span>
                </div>
                <div class="right">
                  <span class="user-activity-time">16 min ago</span>
                </div>
              </li>
              <li>
                <div class="left">
                  <span class="user-activity-title">Leave Approval Request</span>
                  <span class="user-activity-details">From "RuthDyer" UiDesign Leave</span>
                  <span class="user-activity-date">Monday 12 Jan 2020.</span>
                </div>
                <div class="right">
                  <span class="user-activity-time">6 min ago</span>
                </div>
              </li>
              <li>
                <div class="left">
                  <span class="user-activity-title">Asked about this product</span>
                  <span class="user-activity-details">From "RuthDyer" UiDesign Leave</span>
                  <span class="user-activity-date">Monday 12 Jan 2020.</span>
                </div>
                <div class="right">
                  <span class="user-activity-time">16 min ago</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>