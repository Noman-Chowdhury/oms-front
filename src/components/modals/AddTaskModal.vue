<script setup>
import {ref} from "vue";
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/themes/dark.css';
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

import TextEditorComponent from "@/components/TextEditorComponent.vue";
const description = ref('');
const date = ref(null);
const endDate = ref(null);

const config = ref({
    wrap: true, // set wrap to true only when using 'input-group'
    altFormat: 'M j, Y',
    altInput: true,
    dateFormat: 'Y-m-d',    
});

const addTag = (() => {

})

const selected = ref(null);
const options = ref([
  'Lewis Stone', 'Jack Holland', 'Lily Burgess', 'Harrison French', 'Isabel Mellor',
  'Adam Bates', 'Millie Lee', 'Madeleine Hart', 'Louise Goddard', 'Joseph Francis',
  'Kai Barker', 'Erin Knight', 'Jayden Taylor', 'Sophie Hilton', 'Leah Wright', 'Lewis Hooper'
]);

</script>

<template>
  <div class="modal fade" id="addTaskModal" tabindex="-1" aria-labelledby="addTaskModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title" id="addTaskModalLabel">Add New Task</h2>
          <button type="button" class="btn btn-sm btn-icon btn-outline-primary" data-bs-dismiss="modal" aria-label="Close"><i class="fa-light fa-times"></i></button>
        </div>
        <div class="modal-body">
          <div class="row g-3">
            <div class="col-12">
              <label for="addTaskName" class="form-label">Name</label>
              <input type="text" id="addTaskName" class="form-control form-control-sm" placeholder="Task Name">
            </div>
            <div class="col-12">
              <label for="addTaskAttchment" class="form-label">Attach File</label>
              <input type="file" id="addTaskAttchment" class="form-control form-control-sm" multiple>
            </div>
            <div class="col-sm-6">
              <label for="addTaskStartDate" class="form-label">Start Date</label>
              <!-- <input type="text" id="addTaskStartDate" class="form-control form-control-sm date-picker" placeholder="Eg: 12 Feb, 20" readonly> -->
              <flat-pickr
                v-model="date"
                :config="config"
                class="form-control form-control-sm date-picker"
                placeholder="Eg: 12 Feb, 20"
                name="date"
              />
            </div>
            <div class="col-sm-6">
              <label for="addTaskEndDate" class="form-label">End Date</label>
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
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
            <div class="col-sm-6">
              <label class="form-label">Repeat every</label>
              <select class="form-control form-control-sm form-select" data-placeholder="Select Time">
                <option value="">Select Time</option>
                <option value="week">Week</option>
                <option value="2week">2 Weeks</option>
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
          <button type="button" class="btn btn-sm btn-primary">Save Task</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>