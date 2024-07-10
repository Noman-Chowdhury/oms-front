<script setup>

</script>

<template>
  <div class="modal fade" id="viewTaskModal" tabindex="-1" aria-labelledby="viewTaskModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title" id="viewTaskModalLabel">Web Design & Development</h1>
          <div class="btn-box d-flex gap-3">
            <button class="btn-flush text-info"><i class="fa-light fa-edit"></i></button>
            <button class="btn-flush text-danger"><i class="fa-light fa-trash-can"></i></button>
            <button type="button" class="btn btn-sm btn-icon btn-outline-primary" data-bs-dismiss="modal" aria-label="Close"><i class="fa-light fa-times"></i></button>
          </div>
        </div>
        <div class="modal-body view-task">
          <div class="row g-3">
            <div class="col-lg-8 col-md-7">
              <span class="task-created"><i class="fa-light fa-clock"></i> Created at 16/02/2023 03:20:50 by <router-link to="/view-profile">Admin</router-link></span>
              <div class="task-dscr">
                <h6 class="dscr-title">Description</h6>
                <p>Et quo odio aut aut natus facere consequatur eius. Eos non enim repudiandae voluptatem. Animi libero illo tempora. Id ut autem quis omnis fuga. Enim est reiciendis et. Ipsam autem maxime culpa quos. Velit reiciendis eos saepe. Nemo ut officiis dolores sequi error cum eum facilis. Praesentium porro porro ipsa nihil ipsum rerum sint. Sit omnis consequatur consequatur voluptates ipsa. Quam in occaecati alias sapiente voluptas eveniet. Consequuntur non deserunt exercitationem amet.</p>
                <h6 class="dscr-title">Attachment</h6>
                <div class="task-attachment">
                  <div class="attched-box">
                    <img src="@/assets/images/product-img-1.jpg" alt="Image">
                  </div>
                  <button class="btn btn-sm btn-primary w-100">Download All (1)</button>
                </div>
              </div>
              <div class="comments">
                <h6>Comments</h6>
                <div class="add-a-comment">
                  <textarea class="form-control form-control-sm mb-15" rows="3" placeholder="Add a comment here..."></textarea>
                  <div class="btn-box d-flex justify-content-end">
                    <button class="btn btn-sm btn-primary">Submit</button>
                  </div>
                </div>
                <div class="single-comment">
                  <button class="btn-flush text-danger comment-delete"><i class="fa-light fa-trash-can"></i></button>
                  <div class="avatar">
                    <img src="@/assets/images/admin.png" alt="Image">
                  </div>
                  <div class="part-txt">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum, minus iste nam deleniti enim eveniet illum tempore hic non quam id voluptates veniam ullam inventore autem odit, recusandae earum.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-5">
              <div class="task-info-box">
                <h6>Task Info:</h6>
                <ul>
                  <li><span class="part-icon"><i class="fa-light fa-calendar"></i></span> Start Date: 12 Feb, 2023</li>
                  <li><span class="part-icon"><i class="fa-light fa-calendar-check"></i></span> End Date: 12 Mar, 2023</li>
                  <li><span class="part-icon"><i class="fa-light fa-star"></i></span> Status: <span class="badge bg-primary p-1 rounded">Not Started</span></li>
                  <li><span class="part-icon"><i class="fa-light fa-bolt"></i></span> Priority: <span class="badge bg-success p-1 rounded">Low</span></li>
                </ul>
              </div>
              <div class="task-info-box">
                <h6>Assigned To</h6>
                <ul>
                  <li>Harrison French</li>
                  <li>Isabel Mellor</li>
                  <li>Adam Bates</li>
                  <li>Kai Barker</li>
                </ul>
              </div>
              <div class="task-info-box">
                <h6>Reminders</h6>
                <ul>
                  <li>2 Weeks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>