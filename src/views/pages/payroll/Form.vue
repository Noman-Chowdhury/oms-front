<script setup>

import DashboardBreadcrumb from "@/components/DashboardBreadcrumb.vue";
import {useEmployeeStore} from "@/stores/employee";
import {computed, onMounted, ref} from "vue";

import flatPickr from 'vue-flatpickr-component';

import 'flatpickr/dist/flatpickr.css';
import {usePayrollStore} from "@/stores/payroll";
import Loader from "@/components/Loader.vue";
import {useRouter} from "vue-router";

const employeeStore = useEmployeeStore();
const payrollStore = usePayrollStore()

const config = ref({
  wrap: true, // set wrap to true only when using 'input-group'
  altFormat: 'M j, Y',
  altInput: true,
  dateFormat: 'Y-m-d',
});

const getPayrollDetails = async () => {
  await payrollStore.getPayrollDetails()
}

const netSalary = computed({
  get() {
    return payrollStore.payroll.basic_salary + payrollStore.payroll.bonuses - payrollStore.payroll.deductions;
  },
  set(value) {
    payrollStore.payroll.net_salary = value;
  }
});

const router = useRouter()
const submitForm = async () => {
  event.preventDefault()
  if (payrollStore.payrollId) {
    await payrollStore.updateData()
  } else {
    await payrollStore.storeData()
    router.push('/payrolls')
  }
}

onMounted(() => {
  employeeStore.fetchEmployees()
})
</script>

<template>
  <div v-if="payrollStore.loading">
    <Loader/>
  </div>
  <DashboardBreadcrumb>
    <template v-slot:title>Payrolls</template>
    <template v-slot:buttons>
      <router-link :to="{ name: 'payrolls' }" class="btn btn-sm btn-primary">
        All Payrolls
      </router-link>
    </template>
  </DashboardBreadcrumb>
  <div class="row">
    <div class="col-md-12">
      <div class="panel">
        <div class="panel-header">
          <h5>Payroll Information</h5>
        </div>
        <div class="panel-body">
          <div class="row g3">
            <div class="col-md-3">
              <label class="form-label">Employee</label>
              <select class="form-control form-control-sm form-select" data-placeholder="Choose Employee"
                      v-model="payrollStore.payroll.employee_id">
                <option value="">Choose Employee</option>
                <option :value="employee.id" v-for="employee in employeeStore.employees">{{ employee.name }}
                  ({{ employee.employee_id }})
                </option>
              </select>
            </div>
            <div class="col-md-3">
              <label class="form-label">Period Start Date</label>
              <flat-pickr
                  v-model="payrollStore.payroll.pay_period_start"
                  :config="config"
                  class="form-control form-control-sm date-picker"
                  placeholder="Eg: Feb 12 2024"
                  name="start_date"
              />
            </div>
            <div class="col-md-3">
              <label class="form-label">Period End Date</label>
              <flat-pickr
                  v-model="payrollStore.payroll.pay_period_end"
                  :config="config"
                  class="form-control form-control-sm date-picker"
                  placeholder="Eg: Feb 12 2024"
                  name="end_date"
              />
            </div>
            <div class="col-md-12 d-flex justify-content-end">
              <button class="btn btn-sm btn-primary" @click="getPayrollDetails">Get Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-2" v-if="payrollStore.payroll.basic_salary > 0">
    <div class="col-md-12">
      <div class="panel">
        <div class="panel-body">
          <div class="row g3">
            <div class="col-6">
              <div class="row mb-20">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Basic Salary</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputEmail3" disabled
                         v-model="payrollStore.payroll.basic_salary">
                </div>
              </div>
              <div class="row mb-20">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Bonuses</label>
                <div class="col-sm-10">
                  <input type="number" class="form-control" id="inputPassword3" v-model="payrollStore.payroll.bonuses">
                </div>
              </div>
              <div class="row mb-20">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Deductions</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputPassword3" disabled
                         v-model="payrollStore.payroll.deductions">
                </div>
              </div>
              <div class="row mb-20">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Net Salary</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputPassword3" disabled
                         v-model="netSalary">
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="row mb-20">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Payment Date</label>
                <div class="col-sm-10">
                  <flat-pickr
                      v-model="payrollStore.payroll.payment_date"
                      :config="config"
                      class="form-control form-control-sm date-picker"
                      placeholder="Eg: Feb 12 2024"
                      name="paymanet_date"
                  />
                </div>
              </div>
              <div class="row mb-20">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Payment Note</label>
                <div class="col-sm-10">
                  <textarea class="form-control" id="" cols="30" rows="5"
                            v-model="payrollStore.payroll.payment_notes"></textarea>
                </div>
              </div>
            </div>
            <div class="col-12 d-flex justify-content-end">
              <button class="btn btn-sm btn btn-primary" @click="submitForm">Generate Payroll</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>