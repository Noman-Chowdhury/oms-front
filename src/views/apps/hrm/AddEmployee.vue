<script setup>
import {ref} from "vue";
import DashboardBreadcrumb from "@/components/DashboardBreadcrumb.vue";

import flatPickr from 'vue-flatpickr-component';

import 'flatpickr/dist/flatpickr.css';

const joinDate = ref(null);
const leaveDate = ref(null);
const birthDate = ref(null);
const sameAsPresent = ref(false);

const config = ref({
    wrap: true, // set wrap to true only when using 'input-group'
    altFormat: 'M j, Y',
    altInput: true,
    dateFormat: 'Y-m-d',    
});

</script>

<template>
<DashboardBreadcrumb>
  <template v-slot:title>Add Employee</template>
  <template v-slot:buttons>
    <router-link :to="{ name: 'hrm_all_employee' }" class="btn btn-sm btn-primary">
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
              <input type="text" class="form-control form-control-sm">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Full Name</label>
              <input type="text" class="form-control form-control-sm">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Email</label>
              <input type="email" class="form-control form-control-sm">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Phone</label>
              <input type="tel" class="form-control form-control-sm">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Shift</label>
              <select class="form-control form-control-sm form-select" data-placeholder="Select Shift">
                <option value="">Select Shift</option>
                <option value="0">Shift 1</option>
                <option value="1">Shift 2</option>
                <option value="2">Shift 3</option>
              </select>
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Alternative Phone</label>
              <input type="tel" class="form-control form-control-sm">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Country</label>
              <select class="form-control form-control-sm form-select" data-placeholder="Select Country">
                <option value="">Select Country</option>
                <option value="0">Country 1</option>
                <option value="1">Country 2</option>
                <option value="2">Country 3</option>
              </select>
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
              <select class="form-control form-control-sm form-select" data-placeholder="Choose Department">
                <option value="">Choose Department</option>
                <option value="0">Department 1</option>
                <option value="1">Department 2</option>
                <option value="2">Department 3</option>
              </select>
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Section</label>
              <select class="form-control form-control-sm form-select" data-placeholder="Choose Section">
                <option value="">Choose Section</option>
                <option value="0">Section 1</option>
                <option value="1">Section 2</option>
                <option value="2">Section 3</option>
              </select>
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Sub Section</label>
              <select class="form-control form-control-sm form-select" data-placeholder="Choose Subsection">
                <option value="">Choose Subsection</option>
                <option value="0">Subsection 1</option>
                <option value="1">Subsection 2</option>
                <option value="2">Subsection 3</option>
              </select>
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Designation</label>
              <select class="form-control form-control-sm form-select" data-placeholder="Choose Designation">
                <option value="">Choose Designation</option>
                <option value="0">Designation 1</option>
                <option value="1">Designation 2</option>
                <option value="2">Designation 3</option>
              </select>
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Employee Type</label>
              <select class="form-control form-control-sm form-select" data-placeholder="Choose Employee Type">
                <option value="">Choose Employee Type</option>
                <option value="0">Employee Type 1</option>
                <option value="1">Employee Type 2</option>
                <option value="2">Employee Type 3</option>
              </select>
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Duty Type</label>
              <select class="form-control form-control-sm" data-placeholder="Choose Duty Type">
                <option value="">Choose Duty Type</option>
                <option value="0">Duty Type 1</option>
                <option value="1">Duty Type 2</option>
                <option value="2">Duty Type 3</option>
              </select>
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Joining Date</label>
              <flat-pickr
                v-model="joinDate"
                :config="config"
                class="form-control form-control-sm date-picker"
                placeholder="Eg: Feb 12 2024"
                name="date"
              />
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Leave / Expire Date</label>
              <flat-pickr
                v-model="leaveDate"
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
          <h5>Salary</h5>
        </div>
        <div class="panel-body">
          <div class="row g-3">
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Grade</label>
              <select class="form-control form-control-sm form-select" data-placeholder="Choose Grade">
                <option value="">Choose Grade</option>
                <option value="0">Grade 1</option>
                <option value="1">Grade 2</option>
                <option value="2">Grade 3</option>
              </select>
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Starting Gross Salary</label>
              <input type="number" class="form-control form-control-sm">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Salary System</label>
              <select class="form-control form-control-sm form-select" data-placeholder="Choose Salary System">
                <option value="">Choose Salary System</option>
                <option value="0">Salary System 1</option>
                <option value="1">Salary System 2</option>
                <option value="2">Salary System 3</option>
              </select>
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
              <label class="form-label">Mobile Banking Provider Name</label>
              <input type="text" class="form-control form-control-sm">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Mobile Banking Account Number</label>
              <input type="tel" class="form-control form-control-sm">
            </div>
            <div class="col-xxl-6 col-lg-4"></div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Bank Name</label>
              <input type="text" class="form-control form-control-sm">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Bank Branch Name</label>
              <input type="text" class="form-control form-control-sm">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Bank Account Name</label>
              <input type="text" class="form-control form-control-sm">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Bank Account Number</label>
              <input type="number" class="form-control form-control-sm">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="panel">
        <div class="panel-header">
          <h5>Permanent & Present Address</h5>
        </div>
        <div class="panel-body">
          <div class="card mb-20">
            <div class="card-header">
              Permanent Address
            </div>
            <div class="card-body">
              <div class="row g-3">
                <div class="col-xxl-3 col-lg-4 col-sm-6">
                  <label class="form-label">Division</label>
                  <select class="form-control form-control-sm form-select" data-placeholder="Choose Division">
                    <option value="">Choose Division</option>
                    <option value="0">Division 1</option>
                    <option value="1">Division 2</option>
                    <option value="2">Division 3</option>
                  </select>
                </div>
                <div class="col-xxl-3 col-lg-4 col-sm-6">
                  <label class="form-label">District</label>
                  <select class="form-control form-control-sm form-select" data-placeholder="Choose District">
                    <option value="">Choose District</option>
                    <option value="0">District 1</option>
                    <option value="1">District 2</option>
                    <option value="2">District 3</option>
                  </select>
                </div>
                <div class="col-xxl-3 col-lg-4 col-sm-6">
                  <label class="form-label">Subdistrict</label>
                  <select class="form-control form-control-sm form-select" data-placeholder="Choose Subdistrict">
                    <option value="">Choose Subdistrict</option>
                    <option value="0">Subdistrict 1</option>
                    <option value="1">Subdistrict 2</option>
                    <option value="2">Subdistrict 3</option>
                  </select>
                </div>
                <div class="col-xxl-3 col-lg-4 col-sm-6">
                  <label class="form-label">Post Office</label>
                  <select class="form-control form-control-sm form-select" data-placeholder="Choose Post Office">
                    <option value="">Choose Post Office</option>
                    <option value="0">Post Office 1</option>
                    <option value="1">Post Office 2</option>
                    <option value="2">Post Office 3</option>
                  </select>
                </div>
                <div class="col-xxl-6 col-lg-8">
                  <label class="form-label">Village / House / Road</label>
                  <input type="text" class="form-control form-control-sm">
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header d-flex gap-4">
              Present Address
              <div class="form-check d-inline-flex">
                <input class="form-check-input" type="checkbox" v-model="sameAsPresent" id="presentSameAsPermanent">
                <label class="form-check-label" for="presentSameAsPermanent">
                  Present Address Same As Permanent Address
                </label>
              </div>
            </div>
            <div v-if="!sameAsPresent" class="card-body">
              <div class="row g-3">
                <div class="col-xxl-3 col-lg-4 col-sm-6">
                  <label class="form-label">Division</label>
                  <select class="form-control form-control-sm form-select" data-placeholder="Choose Division">
                    <option value="">Choose Division</option>
                    <option value="0">Division 1</option>
                    <option value="1">Division 2</option>
                    <option value="2">Division 3</option>
                  </select>
                </div>
                <div class="col-xxl-3 col-lg-4 col-sm-6">
                  <label class="form-label">District</label>
                  <select class="form-control form-control-sm form-select" data-placeholder="Choose District">
                    <option value="">Choose District</option>
                    <option value="0">District 1</option>
                    <option value="1">District 2</option>
                    <option value="2">District 3</option>
                  </select>
                </div>
                <div class="col-xxl-3 col-lg-4 col-sm-6">
                  <label class="form-label">Subdistrict</label>
                  <select class="form-control form-control-sm form-select" data-placeholder="Choose Subdistrict">
                    <option value="">Choose Subdistrict</option>
                    <option value="0">Subdistrict 1</option>
                    <option value="1">Subdistrict 2</option>
                    <option value="2">Subdistrict 3</option>
                  </select>
                </div>
                <div class="col-xxl-3 col-lg-4 col-sm-6">
                  <label class="form-label">Post Office</label>
                  <select class="form-control form-control-sm form-select" data-placeholder="Choose Post Office">
                    <option value="">Choose Post Office</option>
                    <option value="0">Post Office 1</option>
                    <option value="1">Post Office 2</option>
                    <option value="2">Post Office 3</option>
                  </select>
                </div>
                <div class="col-xxl-6 col-lg-8">
                  <label class="form-label">Village / House / Road</label>
                  <input type="text" class="form-control form-control-sm">
                </div>
              </div>
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
              <label class="form-label">Father / Husband Name</label>
              <input type="text" class="form-control form-control-sm">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Mother's Name</label>
              <input type="tel" class="form-control form-control-sm">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Date of Birth</label>
              <flat-pickr
                v-model="birthDate"
                :config="config"
                class="form-control form-control-sm date-picker"
                placeholder="Eg: Feb 12 2024"
                name="date"
              />
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">NID No / Birth Certificate</label>
              <input type="number" class="form-control form-control-sm">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Employee Photo</label>
              <input type="file" class="form-control form-control-sm">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Gender</label>
              <select class="form-control form-control-sm" data-placeholder="Gender">
                <option value="">Gender</option>
                <option value="0">Male</option>
                <option value="1">Female</option>
              </select>
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Marital Status</label>
              <select class="form-control form-control-sm" data-placeholder="Marital Status">
                <option value="">Marital Status</option>
                <option value="0">Married</option>
                <option value="1">Unmarried</option>
                <option value="1">Divorced</option>
              </select>
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Blood Group</label>
              <select class="form-control form-control-sm" data-placeholder="Blood Group">
                <option value="">Blood Group</option>
                <option value="0">Blood Group 1</option>
                <option value="1">Blood Group 2</option>
                <option value="2">Blood Group 3</option>
              </select>
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Religion</label>
              <select class="form-control form-control-sm" data-placeholder="Choose Religion">
                <option value="">Choose Religion</option>
                <option value="0">Religion 1</option>
                <option value="1">Religion 2</option>
                <option value="2">Religion 3</option>
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
              <input type="text" class="form-control form-control-sm" placeholder="Name">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Contact Person Phone</label>
              <input type="text" class="form-control form-control-sm" placeholder="Phone">
            </div>
            <div class="col-xxl-3 col-lg-4 col-sm-6">
              <label class="form-label">Relation</label>
              <input type="text" class="form-control form-control-sm" placeholder="Relation">
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
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
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
      <button class="btn btn-sm btn btn-success">Save Employee</button>
    </div>
  </div>
</template>

<style scoped>

</style>