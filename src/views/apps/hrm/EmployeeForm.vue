<script setup>
import {onMounted, ref} from "vue";
import DashboardBreadcrumb from "@/components/DashboardBreadcrumb.vue";

import flatPickr from 'vue-flatpickr-component';

import 'flatpickr/dist/flatpickr.css';
import {useShiftStore} from "@/stores/shift";
import {designationStore} from "@/stores/designation";
import {useDepartmentStore} from "@/stores/department";
import {useLocationStore} from "@/stores/locations";
import {useEmployeeStore} from "@/stores/employee";
import Loader from "@/components/Loader.vue";

let PADistricts = ref([]);
let PRDistricts = ref([]);
let PAUpazilas = ref([]);
let PRUpazilas = ref([]);
let PAUnion = ref([]);
let PRUnion = ref([]);

const config = ref({
  wrap: true, // set wrap to true only when using 'input-group'
  altFormat: 'M j, Y',
  altInput: true,
  dateFormat: 'Y-m-d',
});

const shiftStore = useShiftStore()
const desigStore = designationStore()
const departmentStore = useDepartmentStore()
const locationStore = useLocationStore()
const employeeStore = useEmployeeStore()

const handleFileUpload = (event) => {
  const file = event.target.files[0]; // Get the selected file
  if (file) {
    // Create a FileReader to read the file and set it to the store
    const reader = new FileReader();
    reader.onload = (e) => {
      employeeStore.employee.image = e.target.result; // Set the image data to the store
    };
    reader.readAsDataURL(file); // Read the file as a data URL
  }
};

const getPresentAddressDistricts = async (division_id) => {
  await locationStore.fetchDistricts(division_id)
  PRDistricts.value = locationStore.districts
}
const getPermanentAddressDistricts = async (division_id) => {
  await locationStore.fetchDistricts(division_id)
  PADistricts.value = locationStore.districts
}

const getPresentAddressUpazilas = async (district_id) => {
  await locationStore.fetchUpazilas(district_id)
  PRUpazilas.value = locationStore.upazilas
}
const getPermanentAddressUpazilas = async (district_id) => {
  await locationStore.fetchUpazilas(district_id)
  PAUpazilas.value = locationStore.upazilas
}

const getPresentAddressUnions = async (upazila_id) => {
  await locationStore.fetchUnions(upazila_id)
  PRUnion.value = locationStore.unions
}
const getPermanentAddressUnions = async (upazila_id) => {
  await locationStore.fetchUnions(upazila_id)
  PAUnion.value = locationStore.unions
}

const submitForm = async () => {
  event.preventDefault()
  if (employeeStore.employeeId) {
    await employeeStore.updateEmployee()
  } else {
    await employeeStore.storeEmployee()
  }
}

onMounted(() => {
  shiftStore.fetchShifts()
  desigStore.fetchDesignations()
  departmentStore.fetchDepartments()
  locationStore.fetchDivisions()
})
</script>

<template>
  <div v-if="employeeStore.loading">
    <Loader/>
  </div>
  <DashboardBreadcrumb>
    <template v-slot:title>Employee</template>
    <template v-slot:buttons>
      <router-link :to="{ name: 'all_employee' }" class="btn btn-sm btn-primary">
        All Employee
      </router-link>
    </template>
  </DashboardBreadcrumb>
  <div class="row">
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>Basic Information</h5>
        </div>
        <div class="panel-body">
          <div class="row g-3">
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Employee ID</label>
              <input type="text" class="form-control form-control-sm" placeholder="Enter Employee ID"
                     v-model="employeeStore.employee.employee_id">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Full Name</label>
              <input type="text" class="form-control form-control-sm" placeholder="Enter Name"
                     v-model="employeeStore.employee.name">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Email</label>
              <input type="email" class="form-control form-control-sm" placeholder="Enter Email"
                     v-model="employeeStore.employee.email">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Phone</label>
              <input type="tel" class="form-control form-control-sm" placeholder="Enter Phone Number"
                     v-model="employeeStore.employee.phone_number">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Shift</label>
              <select class="form-control form-control-sm form-select" data-placeholder="Select Shift"
                      v-model="employeeStore.employee.shift_id">
                <option value="">Select Shift</option>
                <option :value="shift.id" v-for="shift in shiftStore.shifts">{{ shift.name }}</option>
              </select>
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Alternative Phone</label>
              <input type="tel" class="form-control form-control-sm" placeholder="Enter Alternative Phone Number"
                     v-model="employeeStore.employee.alternate_phone_number">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>Personal Information</h5>
        </div>
        <div class="panel-body">
          <div class="row g-3">
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Department</label>
              <select class="form-control form-control-sm form-select" data-placeholder="Choose Department"
                      v-model="employeeStore.employee.department_id">
                <option value="">Choose Department</option>
                <option :value="row.id" v-for="row in departmentStore.departments">{{ row.name }}</option>
              </select>
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Designation</label>
              <select class="form-control form-control-sm form-select" data-placeholder="Choose Designation"
                      v-model="employeeStore.employee.designation_id">
                <option value="">Choose Designation</option>
                <option :value="row.id" v-for="row in desigStore.designations">{{ row.name }}</option>
              </select>
            </div>

            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Joining Date</label>
              <flat-pickr
                  v-model="employeeStore.employee.date_of_hire"
                  :config="config"
                  class="form-control form-control-sm date-picker"
                  placeholder="Eg: Feb 12 2024"
                  name="date"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>Banking Account Details</h5>
        </div>
        <div class="panel-body">
          <div class="row g-3">
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Bank Name</label>
              <input type="text" class="form-control form-control-sm" v-model="employeeStore.employee.bank_name">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Bank Branch Name</label>
              <input type="text" class="form-control form-control-sm" v-model="employeeStore.employee.branch_name">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Bank Account Name</label>
              <input type="text" class="form-control form-control-sm"
                     v-model="employeeStore.employee.bank_account_name">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Bank Account Number</label>
              <input type="number" class="form-control form-control-sm"
                     v-model="employeeStore.employee.bank_account_number">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>Address</h5>
        </div>
        <div class="panel-body">
          <div class="row g-3">
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Country</label>
              <select class="form-control form-control-sm form-select" data-placeholder="Select Country"
                      v-model="employeeStore.employee.country">
                <option value="">Select Country</option>
                <option value="bangladesh">Bangladesh</option>
              </select>
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">City</label>
              <input type="text" name="" id="" class="form-control form-control-sm" v-model="employeeStore.employee.city">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">State</label>
              <input type="text" name="" id="" class="form-control form-control-sm" v-model="employeeStore.employee.state">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Zip Code</label>
              <input type="text" name="" id="" class="form-control form-control-sm" v-model="employeeStore.employee.zip_code">
            </div>
            <div class="col-xxl-6 col-lg-8">
              <label class="form-label">Address</label>
              <input type="text" class="form-control form-control-sm" v-model="employeeStore.employee.address">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>Biographical Information</h5>
        </div>
        <div class="panel-body">
          <div class="row g-3">
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Date of Birth</label>
              <flat-pickr
                  v-model="employeeStore.employee.date_of_birth"
                  :config="config"
                  class="form-control form-control-sm date-picker"
                  placeholder="Eg: Feb 12 2024"
                  name="date"
              />
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">NID No / Birth Certificate</label>
              <input type="number" class="form-control form-control-sm" v-model="employeeStore.employee.nid_no">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Employee Photo</label>
              <input type="file" class="form-control form-control-sm" @change="handleFileUpload">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Gender</label>
              <select class="form-control form-control-sm form-select" data-placeholder="Gender"
                      v-model="employeeStore.employee.gender">
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Marital Status</label>
              <select class="form-control form-control-sm form-select" data-placeholder="Marital Status"
                      v-model="employeeStore.employee.marital_status">
                <option value="">Marital Status</option>
                <option value="married">Married</option>
                <option value="unmarried">Unmarried</option>
                <option value="divorced">Divorced</option>
              </select>
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Blood Group</label>
              <select class="form-control form-control-sm form-select" data-placeholder="Blood Group"
                      v-model="employeeStore.employee.blood_group">
                <option value="">Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>Emergency Contact Information</h5>
        </div>
        <div class="panel-body">
          <div class="row g-3">
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Contact Person Name</label>
              <input type="text" class="form-control form-control-sm" placeholder="Name"
                     v-model="employeeStore.employee.contact_person_name">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Contact Person Phone</label>
              <input type="text" class="form-control form-control-sm" placeholder="Phone"
                     v-model="employeeStore.employee.contact_person_phone">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Relation</label>
              <input type="text" class="form-control form-control-sm" placeholder="Relation"
                     v-model="employeeStore.employee.contact_person_relation">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>Login Information</h5>
        </div>
        <div class="panel-body">
          <div class="row g-3">
            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                       v-model="employeeStore.employee.login_access">
                <label class="form-check-label" for="flexCheckDefault">
                  Login access
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-end">
      <button class="btn btn-sm btn btn-primary" @click="submitForm">Save Employee</button>
    </div>
  </div>
</template>

<style scoped>

</style>