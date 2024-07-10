<script setup>

import ModalWindow from "@/components/ModalWindow.vue";
import AddTaskModal from "@/components/modals/AddTaskModal.vue";
</script>

<template>
  <div class="col-xl-4 col-lg-5">
    <div class="panel">
      <div class="panel-header">
        <h5>My Tasks</h5>
        <button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#addTaskModal">Add Task <i class="fa-light fa-plus"></i></button>
      </div>
      <div class="panel-body p-0">
        <div class="table-responsive">
          <table class="table task-table table-hover">
            <tbody>
            <tr>
              <td>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input me-2" type="checkbox">
                    Web design & development
                  </label>
                </div>
              </td>
              <td>15 Sep, 2022</td>
            </tr>
            <tr>
              <td>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input me-2" type="checkbox">
                    Logo design
                  </label>
                </div>
              </td>
              <td>15 Sep, 2022</td>
            </tr>
            <tr>
              <td>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input me-2" type="checkbox">
                    Meeting with client
                  </label>
                </div>
              </td>
              <td>15 Sep, 2022</td>
            </tr>
            <tr>
              <td>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input me-2" type="checkbox">
                    Laravel devloper interview
                  </label>
                </div>
              </td>
              <td>15 Sep, 2022</td>
            </tr>
            <tr>
              <td>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input me-2" type="checkbox">
                    Client support
                  </label>
                </div>
              </td>
              <td>15 Sep, 2022</td>
            </tr>
            <tr>
              <td>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input me-2" type="checkbox">
                    Factory visit
                  </label>
                </div>
              </td>
              <td>15 Sep, 2022</td>
            </tr>
            <tr>
              <td>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input me-2" type="checkbox">
                    Landing page design
                  </label>
                </div>
              </td>
              <td>15 Sep, 2022</td>
            </tr>
            <tr>
              <td>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input me-2" type="checkbox">
                    Important meeting
                  </label>
                </div>
              </td>
              <td>15 Sep, 2022</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="btn-box px-lg-3 px-2 mx-xl-1 m-lg-0 mx-1 py-2">
          <router-link to="/task" class="view-all-task text-white fs-14 text-decoration-underline">Show More</router-link>
        </div>
      </div>
    </div>
  </div>
  <ModalWindow>
    <AddTaskModal />
  </ModalWindow>
</template>

<style scoped>

</style>