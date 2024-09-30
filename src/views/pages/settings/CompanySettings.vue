<script setup>
import {onMounted, ref} from "vue";
import {useCompanyStore} from "@/stores/useCompanies";
import {categories} from "@/static/companyCategories";
import {useCalenderStore} from "@/stores/calenders";
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import * as bootstrap from "bootstrap";
import ModalWindow from "@/components/ModalWindow.vue";
import {useUserInfoStore} from "@/stores/userInfoStore";

const days = ref([
  'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'
]);


const config = ref({
  wrap: true, // set wrap to true only when using 'input-group'
  altFormat: 'M j, Y',
  altInput: true,
  dateFormat: 'Y-m-d',
});

const isShowModal = ref(false);


const openModal = (() => {
  isShowModal.value = true
  const myModal = new bootstrap.Modal('#holiday-modal', {
    keyboard: false
  })
  myModal.show();
});

const modalClose = (() => {
  isShowModal.value = false
  const myModal = new bootstrap.Modal('#holiday-modal', {
    keyboard: false
  })
  myModal.hide()
});

const days_between = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const differenceInTime = endDate.getTime() - startDate.getTime();

  // Calculate difference in days
  const diff = Math.ceil(differenceInTime / (1000 * 3600 * 24)) + 1;
  if (diff > 1) {
    return diff + ' Days'
  } else {
    return diff + ' Day'
  }
};

const companyStore = useCompanyStore()
const holidayStore = useCalenderStore()
const permissionStore = useUserInfoStore()

const updateBasicSettings = async () => {
  event.preventDefault()
  await companyStore.updateCompanyInfo()
}
const updateGeneralSettings = async () => {
  event.preventDefault()
  await companyStore.updateCompanySettigs()
}

const updateStatus = async (id) => {
  event.preventDefault()
  holidayStore.postData.holiday_id = id
  await holidayStore.storeOrUpdateHoliday()
}

const handleFormSubmit = async () => {
  event.preventDefault()
  holidayStore.postData.is_new = true
  await holidayStore.storeOrUpdateHoliday()
}


onMounted(() => {
  companyStore.fetchCompanyInfo()
  companyStore.fetchCompanySettings()
  holidayStore.fetchHolidays()
})
</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="row d-flex align-items-stretch">
        <div class="col-md-12"  v-if="permissionStore.hasPermission('update company basic settings')">
          <div class="panel">
            <div class="panel-header">
              <h5>
                Basic Setting
              </h5>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-xxl-3 col-lg-3 col-sm-6">
                  <label class="form-label">Company Name</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Enter Department Name"
                         v-model="companyStore.company.name">
                </div>
                <div class="col-xxl-3 col-lg-3 col-sm-6">
                  <label class="form-label">Email</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Enter Department Name"
                         v-model="companyStore.company.email">
                </div>
                <div class="col-xxl-3 col-lg-3 col-sm-6">
                  <label class="form-label">Phone Number</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Enter Department Name"
                         v-model="companyStore.company.phone_number">
                </div>
                <div class="col-xxl-3 col-lg-3 col-sm-6">
                  <label class="form-label">Country</label>
                  <select class="form-control form-select" v-model="companyStore.company.country">
                    <option value="bangladesh">Bangladesh</option>
                  </select>
                </div>
                <div class="col-xxl-3 col-lg-3 col-sm-6">
                  <label class="form-label">Website</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Enter Department Name"
                         v-model="companyStore.company.url">
                </div>
                <div class="col-xxl-3 col-lg-3 col-sm-6">
                  <label class="form-label">City</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Enter Department Name"
                         v-model="companyStore.company.city">
                </div>
                <div class="col-xxl-3 col-lg-3 col-sm-6">
                  <label class="form-label">State</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Enter Department Name"
                         v-model="companyStore.company.state">
                </div>
                <div class="col-xxl-3 col-lg-3 col-sm-6">
                  <label class="form-label">Postal Code</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Enter Department Name"
                         v-model="companyStore.company.zip_code">
                </div>

                <div class="col-xxl-3 col-lg-3 col-sm-6">
                  <label class="form-label">Address</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Enter Department Name"
                         v-model="companyStore.company.address">
                </div>
                <div class="col-xxl-3 col-lg-3 col-sm-6">
                  <label class="form-label">Contact Person Name</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Enter Department Name"
                         v-model="companyStore.company.contact_person">
                </div>
                <div class="col-xxl-3 col-lg-3 col-sm-6">
                  <label class="form-label">Contact Person Phone</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Enter Department Name"
                         v-model="companyStore.company.contact_person_phone">
                </div>
                <div class="col-xxl-3 col-lg-3 col-sm-6">
                  <label class="form-label">Company Category</label>
                  <select class="form-control form-select" v-model="companyStore.company.category">
                    <option value="">Select Category</option>
                    <option :value="category" v-for="category in categories">{{ category }}</option>
                  </select>
                </div>
                <div class="col-xxl-3 col-lg-3 col-sm-6">
                  <label class="form-label">No. Of Employee</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Enter Department Name"
                         v-model="companyStore.company.number_of_employees">
                </div>

                <div class="col-xxl-12 col-lg-12 col-sm-12 d-flex justify-content-end">
                  <button class="btn btn-primary" @click="updateBasicSettings">Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12" v-if="permissionStore.hasPermission('update company general settings')">
          <div class="panel">
            <div class="panel-header">
              <h5>
                General Setting
              </h5>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-xxl-3 col-lg-3 col-sm-6">
                  <label class="form-label">Office Start Time</label>
                  <input type="time" name="" id=""  v-model="companyStore.otherInfo.start_time" class="form-control">

                </div>
                <div class="col-xxl-3 col-lg-3 col-sm-6">
                  <label class="form-label">Office End Time</label>
                  <input type="time" name="" id=""  v-model="companyStore.otherInfo.end_time" class="form-control">
                </div>
                <div class="col-xxl-12 col-lg-12 col-sm-12">
                  <label class="form-label">Weekly Holidays</label>
                  <div class="form-check-inline" v-for="(day,index) in days" :key="index">
                    <input class="form-check-input" type="checkbox" :value="day"  :id="'day-' + index"  v-model="companyStore.otherInfo.weekly_holiday">
                    <label class="form-check-label" :for="'day-' + index">&nbsp;
                      {{ day }}
                    </label>
                  </div>
                </div>
                <div class="col-xxl-12 col-lg-12 col-sm-12 d-flex justify-content-end">
                  <button class="btn btn-primary" @click="updateGeneralSettings">Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12" v-if="permissionStore.hasPermission('update company holiday settings')">
          <div class="panel">
            <div class="panel-header">
              <h5>
                Holiday Setting
              </h5>
              <button class="btn btn-sm btn-primary" @click="openModal"><i
                  class="fa-light fa-plus"></i> Add New
              </button>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-12">
                  <table class="table table-hover digi-dataTable target-audience-table table-striped">
                    <thead>
                    <tr>
                      <th>Title</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Total Days</th>
                      <th style="text-align: left !important;">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(holiday,index) in holidayStore.holidays" :key="index">
                      <td>{{ holiday.title }}</td>
                      <td>{{ holiday.start }}</td>
                      <td>{{ holiday.end }}</td>
                      <td>{{ days_between(holiday.start, holiday.end) }}</td>
                      <td>
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" :checked="holiday.has_company"
                                 @change="updateStatus(holiday.id)">
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col-xxl-12 col-lg-12 col-sm-12 d-flex justify-content-end">
                  <button class="btn btn-primary" @click="updateBasicSettings">Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   <ModalWindow>
     <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="holiday-modal" tabindex="-1" v-show="isShowModal">
       <div class="modal-dialog modal-dialog-centered">
         <div class="modal-content">
           <form class="needs-validation" name="event-form" id="form-event" novalidate>
             <div class="modal-header">
               <h5 class="modal-title" id="modal-title">Add New Holiday</h5>
               <button type="button" class="btn btn-sm btn-icon btn-outline-primary" data-bs-dismiss="modal" aria-label="Close" @click="modalClose"><i class="fa-light fa-xmark"></i></button>
             </div>
             <div class="modal-body">
               <div class="row g-3">
                 <div class="col-12">
                   <div>
                     <label class="control-label form-label">Title</label>
                     <input class="form-control" v-model="holidayStore.postData.title" placeholder="Insert Event Name" type="text" name="title" id="event-title" required>
                   </div>
                 </div>
                 <div class="col-12">
                   <div class="mb-3">
                     <label class="control-label form-label">Start Date</label>
                     <flat-pickr
                         v-model="holidayStore.postData.start_date"
                         :config="config"
                         class="form-control form-control-sm date-picker"
                         placeholder="Eg: Feb 12 2024"
                         name="date"
                     />
                   </div>
                 </div>
                 <div class="col-12">
                   <div class="mb-3">
                     <label class="control-label form-label">End Date</label>
                     <flat-pickr
                         v-model="holidayStore.postData.end_date"
                         :config="config"
                         class="form-control form-control-sm date-picker"
                         placeholder="Eg: Feb 12 2024"
                         name="date"
                     />
                   </div>
                 </div>
               </div>
               <div class="row">
                 <div class="col-6">
                   <!--                <button type="button" class="btn btn-sm btn-danger" id="btn-delete-event">Delete</button>-->
                 </div>
                 <div class="col-6 text-end">
                   <button type="button" class="btn btn-sm btn-light me-1" data-bs-dismiss="modal" @click="modalClose">Close</button>
                   <button type="submit" class="btn btn-sm btn-primary" id="btn-save-event" @click.prevent="handleFormSubmit">Save</button>
                 </div>
               </div>
             </div>
           </form>
         </div>
       </div>
     </div>
   </ModalWindow>
  </div>
</template>

<style scoped>

</style>