<script setup>
import {ref} from "vue";
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/themes/dark.css';
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import TextEditorComponent from "@/components/TextEditorComponent.vue";
const description = ref('Et quo odio aut aut natus facere consequatur eius. Eos non enim repudiandae voluptatem. Animi libero illo tempora. Id ut autem quis omnis fuga. Enim est reiciendis et. Ipsam autem maxime culpa quos. Velit reiciendis eos saepe. Nemo ut officiis dolores sequi error cum eum facilis. Praesentium porro porro ipsa nihil ipsum rerum sint. Sit omnis consequatur consequatur voluptates ipsa. Quam in occaecati alias sapiente voluptas eveniet. Consequuntur non deserunt exercitationem amet.');
const date = ref(null);
const endDate = ref(null);

const config = ref({
  wrap: true, // set wrap to true only when using 'input-group'
  altFormat: 'M j, Y',
  altInput: true,
  dateFormat: 'Y-m-d',    
});

const options = ref([
  'Lewis Stone', 'Jack Holland', 'Lily Burgess', 'Harrison French', 'Isabel Mellor',
  'Adam Bates', 'Millie Lee', 'Madeleine Hart', 'Louise Goddard', 'Joseph Francis',
  'Kai Barker', 'Erin Knight', 'Jayden Taylor', 'Sophie Hilton', 'Leah Wright', 'Lewis Hooper'
]);

const selectedTag = ref(['Lewis Stone', 'Erin Knight']);

</script>

<template>
  <div class="modal fade" id="editTaskModal" tabindex="-1" aria-labelledby="editTaskModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title" id="editTaskModalLabel">Edit Task</h2>
          <button type="button" class="btn btn-sm btn-icon btn-outline-primary" data-bs-dismiss="modal" aria-label="Close"><i class="fa-light fa-times"></i></button>
        </div>
        <div class="modal-body">
          <div class="row g-3">
            <div class="col-12">
              <label for="editTaskName" class="form-label">Name</label>
              <input type="text" id="editTaskName" class="form-control form-control-sm" placeholder="Task Name" value="Web Design & Development">
            </div>
            <div class="col-12">
              <label for="editTaskAttchment" class="form-label">Attach File</label>
              <input type="file" id="editTaskAttchment" class="form-control form-control-sm" multiple>
            </div>
            <div class="col-sm-6">
              <label for="editTaskStartDate" class="form-label">Start Date</label>
              <flat-pickr
                v-model="date"
                :config="config"
                class="form-control form-control-sm date-picker"
                placeholder="Eg: 12 Feb, 20"
                name="date"
              />
            </div>
            <div class="col-sm-6">
              <label for="editTaskEndDate" class="form-label">End Date</label>
              <flat-pickr
                v-model="endDate"
                :config="config"
                class="form-control form-control-sm date-picker"
                placeholder="Eg: 12 Feb, 20"
                name="date"
              />
            </div>
            <div class="col-sm-6">
              <label class="form-label">Priority</label>
              <select class="form-control form-control-sm form-select" data-placeholder="Select Priority">
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium" selected>Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
            <div class="col-sm-6">
              <label class="form-label">Repeat every</label>
              <select class="form-control form-control-sm form-select" data-placeholder="Select Time">
                <option value="">Select Time</option>
                <option value="week">Week</option>
                <option value="2week" selected>2 Weeks</option>
                <option value="month">1 Month</option>
                <option value="2months">2 Months</option>
                <option value="3months">3 Months</option>
                <option value="6months">6 Months</option>
                <option value="year">1 Year</option>
              </select>
            </div>
            <div class="col-12">
              <label class="form-label">Assign To</label>
              <v-select
                taggable
                multiple
                label="title"
                :options="options"
                v-model="selectedTag"
              />
            </div>
            <div class="col-12">
              <label class="form-label">Task Description</label>
              <TextEditorComponent v-model="description"/>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-sm btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>