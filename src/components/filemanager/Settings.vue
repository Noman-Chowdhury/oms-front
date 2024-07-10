<script setup>

</script>

<template>
  <div class="tab-pane fade show active" id="nav-general" role="tabpanel" aria-labelledby="nav-general-tab" tabindex="0">
    <div class="file-manager-user">
      <div class="avatar">
        <img src="@/assets/images/admin.png" class="border border-2 border-primary" alt="Image">
      </div>
      <div class="part-txt">
        <div class="name"><span>Shaikh Abu Dardah</span> <button class="btn-flush"><i class="fa-light fa-pen"></i></button></div>
        <div class="email"><span>info@example.com</span> <button class="btn-flush"><i class="fa-light fa-pen"></i></button></div>
      </div>
    </div>
    <div class="file-manager-settings-group">
      <div class="file-manager-settings-subtitle">
        <h6>Subscription Plan</h6>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="about-plan">
          <h3 class="plan-name">
            <span class="text-primary"><i class="fa-light fa-database"></i></span>
            <span>Omuk Basic</span>
          </h3>
          <span class="used-storage">13.00 GB / 15.00 GB</span>
        </div>
        <a href="#" class="btn btn-sm btn-primary">Upgrade Plan</a>
      </div>
    </div>
    <div class="file-manager-settings-group mb-25">
      <div class="file-manager-settings-subtitle">
        <h6>Personal Basic</h6>
      </div>
      <div class="table-responsive">
        <table class="table file-manager-settings-table">
          <tbody>
          <tr>
            <td>Recovery Email</td>
            <td>info@example.com</td>
            <td><button class="btn-flush">Edit</button></td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>Not added yet</td>
            <td><button class="btn-flush">Add Number</button></td>
          </tr>
          <tr>
            <td>Date of birth</td>
            <td>21 Jan. 1999</td>
            <td><button class="btn-flush">Change</button></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="file-manager-settings-group mb-0">
      <div class="file-manager-settings-subtitle">
        <h6>Preferences</h6>
      </div>
      <div class="table-responsive">
        <table class="table file-manager-settings-table">
          <tbody>
          <tr>
            <td>Language</td>
            <td>English (United State)</td>
            <td><button class="btn-flush">Change Language</button></td>
          </tr>
          <tr>
            <td>Date Format</td>
            <td>DD/MM/YYYY</td>
            <td><button class="btn-flush">Change</button></td>
          </tr>
          <tr>
            <td>Timezone</td>
            <td>Bangladesh (GMT +6)</td>
            <td><button class="btn-flush">Change</button></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="nav-billings" role="tabpanel" aria-labelledby="nav-billings-tab" tabindex="0">
    <div class="table-responsive pt-4">
      <table class="table">
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
  <div class="tab-pane fade" id="nav-notification" role="tabpanel" aria-labelledby="nav-notification-tab" tabindex="0">
    <ul class="notification-dropdown border-top mt-4">
      <li class="d-flex align-items-center gap-20 py-3 border-bottom">
        <div class="avatar">
          <img src="@/assets/images/avatar.png" alt="image">
        </div>
        <div class="notification-txt fs-14">
          <span class="notification-icon text-primary"><i class="fa-solid fa-thumbs-up"></i></span> <span class="fw-medium">Archer</span> Likes your post
        </div>
      </li>
      <li class="d-flex align-items-center gap-20 py-3 border-bottom">
        <div class="avatar">
          <img src="@/assets/images/avatar-2.png" alt="image">
        </div>
        <div class="notification-txt fs-14">
          <span class="notification-icon text-success"><i class="fa-solid fa-comment-dots"></i></span> <span class="fw-medium">Cody</span> Commented on your post
        </div>
      </li>
      <li class="d-flex align-items-center gap-20 py-3 border-bottom">
        <div class="avatar">
          <img src="@/assets/images/avatar-3.png" alt="image">
        </div>
        <div class="notification-txt fs-14">
          <span class="notification-icon"><i class="fa-solid fa-share"></i></span> <span class="fw-medium">Zane</span> Shared your post
        </div>
      </li>
      <li class="d-flex align-items-center gap-20 py-3 border-bottom">
        <div class="avatar">
          <img src="@/assets/images/avatar-4.png" alt="image">
        </div>
        <div class="notification-txt fs-14">
          <span class="notification-icon text-primary"><i class="fa-solid fa-thumbs-up"></i></span> <span class="fw-medium">Christopher</span> Likes your post
        </div>
      </li>
      <li class="d-flex align-items-center gap-20 py-3 border-bottom">
        <div class="avatar">
          <img src="@/assets/images/avatar-5.png" alt="image">
        </div>
        <div class="notification-txt fs-14">
          <span class="notification-icon text-success"><i class="fa-solid fa-comment-dots"></i></span> <span class="fw-medium">Charlie</span> Commented on your post
        </div>
      </li>
      <li class="d-flex align-items-center gap-20 py-3 border-bottom">
        <div class="avatar">
          <img src="@/assets/images/avatar-6.png" alt="image">
        </div>
        <div class="notification-txt fs-14">
          <span class="notification-icon"><i class="fa-solid fa-share"></i></span> <span class="fw-medium">Jayden</span> Shared your post
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>