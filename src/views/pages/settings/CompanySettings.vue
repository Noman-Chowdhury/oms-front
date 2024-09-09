<script setup>
import {onMounted, ref} from "vue";
import DataTable from "@/components/datatable/DigiDataTable.vue";
import TableFilterOption from "@/components/datatable/TableFilterOption.vue";
import Loader from "@/components/Loader.vue";
import {designationStore} from "@/stores/designation";
import {useDepartmentStore} from "@/stores/department";
import {useShiftStore} from "@/stores/shift";
import {useLeaveTypeStore} from "@/stores/leaveTypes";
import {useCompanyStore} from "@/stores/useCompanies";
import {categories} from "@/static/companyCategories";

const desTable = ref(null);
const depTable = ref(null);
const shiftTable = ref(null);
const selectedItems = ref([]);
const depSelectedItems = ref([]);
const shiftSelectedItems = ref([]);
const isSearch = ref(true);



const desStore = designationStore()
const depStore = useDepartmentStore()
const shiftStore = useShiftStore()
const leaveTypeStore = useLeaveTypeStore()
const companyStore = useCompanyStore()

const updateBasicSettings = async () => {
  event.preventDefault()
  alert('Under Construction')
}

onMounted(() => {
  companyStore.fetchCompanyInfo()
})
</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="row d-flex align-items-stretch">
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
                  <option :value="category" v-for="category in categories">{{ category}}</option>
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
    </div>
  </div>
</template>

<style scoped>

</style>