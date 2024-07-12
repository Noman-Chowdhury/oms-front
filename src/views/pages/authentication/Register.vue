<script setup>
import {onMounted, ref} from "vue";
import {useToast} from "vue-toast-notification";
import RequiredInputIcon from "@/components/RequiredInputIcon.vue";
import {axiosInstance} from "@/plugins/axiosInstance";
import Loader from "@/components/Loader.vue";
import {categories} from "@/static/companyCategories";

const $toast = useToast({position: 'top-right'});

const currentStep = ref(0);
const isLoading = ref(false);

const steps = ref([
  {
    step: 1,
    title: 'COMPANY INFORMATION',
    subTitle: 'Select your Company Info',
  },
  {
    step: 2,
    title: 'COMPANY DETAILS',
    subTitle: 'Setup your Company Details',
  },
  {
    step: 3,
    title: 'SELECT YOUR PLAN',
    subTitle: 'Select You Version',
  },
  {
    step: 4,
    title: 'COMPLETE',
    subTitle: 'Finalize',
  },
]);

const company = ref({
  name: '',
  phone_number: '',
  email: '',
  country: 'bangladesh',
  url: '',
  address: '',
  city: '',
  state: '',
  zip_code: '',
  contact_person: '',
  contact_person_phone: '',
  category: '',
  number_of_employees: '',
  version: 'trial',
})

const validateStep = (stepIndex) => {
  if (stepIndex === 0) {
    return company.value.name && company.value.phone_number && company.value.email && company.value.country;
  } else if (stepIndex === 1) {
    return company.value.address && company.value.city && company.value.state && company.value.zip_code && company.value.contact_person && company.value.contact_person_phone && company.value.category && company.value.number_of_employees;
  }
  return true;
};


const nextStep = ((index) => {
  if (validateStep(index)) {
    if (index < steps.value.length - 1) {
      currentStep.value = index + 1;
    }
  } else {
    $toast.error('Please fill in all required fields.');
  }
});

const prevStep = ((index) => {
  if (index > 0) {
    currentStep.value = index - 1;
  }
});

const finish = async () => {
  isLoading.value = true;
  try {
    axiosInstance.post('/api/register', company.value)
        .then(() => {
          currentStep.value = 0
          company.value = {}
          $toast.success('Successfully Created')
        }).catch((error) => {
      if (error.response && error.response.status === 422) {
        const errors = error.response.data.errors;
        for (const field in errors) {
          if (errors.hasOwnProperty(field)) {
            $toast.error(errors[field][0]);
          }
        }
      } else {
        $toast.error('Something went wrong!.');
        console.error('An error occurred:', error);
      }
    }).finally(() => {
      isLoading.value = false
    })
  } catch (error) {
    $toast.error('Something went wrong!.');
  }
}


onMounted(() => {
})

</script>

<template>
  <div v-if="isLoading">
    <Loader/>
  </div>

  <div class="steps-sidebar bg-primary">
    <div class="sidebar-content">
      <div class="sidebar-logo text-center">
        <router-link :to="{name: 'dashboard_index'}">
          <img src="@/assets/images/oms-logo-big.png" alt="Logo">
        </router-link>
      </div>
      <ul class="step-list scrollable">
        <li v-for="(step, index) in steps" :key="step.step"
            :class="{ 'active': currentStep === index ,'completed': index < currentStep}">
          <span class="step-txt">
            <span class="step-name">{{ step.title }}</span>
            <span class="step-info">{{ step.subTitle }}</span>
          </span>
          <span class="step-number border-primary">{{ step.step }}</span>
        </li>
      </ul>
    </div>
  </div>
  <div class="all-steps">
    <div class="single-step scrollable" :class="{show: currentStep === 0}">
      <div class="step-content-wrap">
        <div class="step-content">
          <div class="step-heading">
            <h4 class="step-title">COMPANY INFORMATION</h4>
            <!--            <span>For further details, visit our <a href="#">Help Page</a>.</span>-->
          </div>
          <div class="account-info-wrap">
            <form class="row">
              <div class="col-12">
                <label for="" class="form-label">Company Name <RequiredInputIcon/></label>
                <input type="text" class="form-control" placeholder="Enter Name" v-model="company.name">
              </div>
              <div class="col-6">
                <label for="" class="form-label">Email <RequiredInputIcon/></label>
                <input type="email" class="form-control" placeholder="Enter Email" v-model="company.email">
              </div>
              <div class="col-6">
                <label for="" class="form-label">Phone Number <RequiredInputIcon/></label>
                <input type="text" class="form-control" placeholder="Enter Number" v-model="company.phone_number">
              </div>
              <div class="col-6">
                <label for="" class="form-label">Country <RequiredInputIcon/></label>
                <select class="form-control form-select" v-model="company.country">
                  <option value="bangladesh">Bangladesh</option>
                </select>
              </div>
              <div class="col-6">
                <label for="" class="form-label">Website</label>
                <input type="text" class="form-control" placeholder="Enter Number" v-model="company.url">
              </div>
            </form>
          </div>
        </div>
        <div class="btn-box w-100 d-flex justify-content-end">
          <button class="btn btn-sm btn-primary next-button px-3" @click="nextStep(0)">Continue <i
              class="fa-light fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
    <div class="single-step scrollable" :class="{show: currentStep === 1}">
      <div class="step-content-wrap">
        <div class="step-content">
          <div class="step-heading">
            <h4 class="step-title">COMPANY DETAILS</h4>
            <!--            <span>For further details, visit our <a href="#">Help Page</a>.</span>-->
          </div>
          <div class="business-details-wrap">
            <form class="row">

              <div class="col-6">
                <label for="city" class="form-label">City
                  <RequiredInputIcon/>
                </label>
                <input type="text" id="city" class="form-control" placeholder="Enter City Name" v-model="company.city">
              </div>
              <div class="col-6">
                <label for="state" class="form-label">State
                  <RequiredInputIcon/>
                </label>
                <input type="text" id="state" class="form-control" placeholder="Enter State Name" v-model="company.state">
              </div>
              <div class="col-6">
                <label for="zip_code" class="form-label">Postal Code
                  <RequiredInputIcon/>
                </label>
                <input type="text" id="zip_code" class="form-control" placeholder="Enter Postal Code"
                       v-model="company.zip_code">
              </div>
              <div class="col-12">
                <label for="address" class="form-label">Address
                  <RequiredInputIcon/>
                </label>
                <textarea id="address" rows="3" class="form-control" placeholder="Enter Address"
                          v-model="company.address"></textarea>
              </div>
              <div class="col-6">
                <label for="contact_person" class="form-label">Contact Person Name
                  <RequiredInputIcon/>
                </label>
                <input type="text" id="contact_person" class="form-control" placeholder="Enter Name"
                       v-model="company.contact_person">
              </div>
              <div class="col-6">
                <label for="contact_person_phone" class="form-label">Contact Person Phone
                  <RequiredInputIcon/>
                </label>
                <input type="text" id="contact_person_phone" class="form-control" placeholder="Enter Phone"
                       v-model="company.contact_person_phone">
              </div>
              <div class="col-6">
                <label class="form-label">Company Category
                  <RequiredInputIcon/>
                </label>
                <select class="form-control form-select" v-model="company.category">
                  <option value="">Select Category</option>
                  <option :value="category" v-for="category in categories">{{ category}}</option>
                </select>
              </div>
              <div class="col-6">
                <label for="number_of_employees" class="form-label">No. Of Employee
                  <RequiredInputIcon/>
                </label>
                <input type="number" id="number_of_employees" class="form-control" placeholder="Enter Total Employee "
                       v-model="company.number_of_employees">
              </div>
            </form>
          </div>
        </div>
        <div class="btn-box w-100 d-flex justify-content-between">
          <button class="btn btn-sm btn-secondary prev-button px-3" @click="prevStep(1)"><i
              class="fa-light fa-arrow-left"></i> Previous
          </button>
          <button class="btn btn-sm btn-primary next-button px-3" @click="nextStep(1)">Continue <i
              class="fa-light fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
    <div class="single-step scrollable" :class="{show: currentStep === 2}">
      <div class="step-content-wrap">
        <div class="step-content">
          <div class="step-heading">
            <h4 class="step-title">SELECT YOUR PLAN</h4>
            <!--            <span>For further details, visit our <a href="#">Help Page</a>.</span>-->
          </div>
          <div class="account-types">
            <div class="row">
              <div class="col-6">
                <div class="form-check border-primary">
                  <input class="form-check-input" type="radio" name="accountType" id="personalAccountType"
                         value="trial" v-model="company.version" :checked="company.version === 'trial'">
                  <label class="form-check-label" for="personalAccountType">
                <span class="part-icon">
                    <i class="fa-duotone fa-user-tie"></i>
                </span>
                    <span class="part-txt">
                    <span class="title">Trial Version</span>
                      <!--                    <span class="dscr">You can use trial version free.</span>-->
                </span>
                  </label>
                </div>
              </div>
              <div class="col-6">
                <div class="form-check border-primary">
                  <input class="form-check-input" type="radio" name="accountType" id="corporateAccountType"
                         value="paid" v-model="company.version" :checked="company.version === 'paid'">
                  <label class="form-check-label" for="corporateAccountType" style="display: -webkit-box">
                <span class="part-icon">
                  <i class="fa-duotone fa-credit-card"></i>
                </span>
                    <span class="part-txt">
                  <span class="title">Paid Version</span>
                      <!--                  <span class="dscr">Will cost according to employee</span>-->
                </span>
                  </label>
                </div>
              </div>
            </div>


          </div>
        </div>
        <div class="btn-box d-flex flex-wrap gap-2 justify-content-between">
          <button class="btn btn-sm btn-secondary prev-button px-sm-3" @click="prevStep(2)"><i
              class="fa-light fa-arrow-left"></i> Previous
          </button>
          <button class="btn btn-sm btn-primary next-button px-sm-3" @click="nextStep(2)">Complete Submission <i
              class="fa-light fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
    <div class="single-step scrollable" :class="{show: currentStep === 3}">
      <div class="step-content-wrap">
        <div class="step-content mb-0">
          <div class="step-heading">
            <h4 class="step-title">COMPLETE</h4>
            <!--            <span>For further details, visit our <a href="#">Help Page</a>.</span>-->
          </div>
          <div class="success-wrap">
            <p class="bg-success bg-opacity-50 border border-success rounded-1 py-2 px-3 fs-14">You will get an
              confirmation email soon after click on finish.</p>
            <div class="d-flex justify-content-center">
              <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                   xml:space="preserve" class="check-mark" width="200" height="200" viewBox="0 0 300 300">
                                    <path class="circle" stroke="#1C9943" stroke-width="3" fill="#fff" fill-opacity="0"
                                          stroke-miterlimit="10"
                                          d="M150,47.9c18.4,0,35.4,4.6,51,13.8s28,21.6,37.2,37.2s13.8,32.6,13.8,51s-4.6,35.4-13.8,51s-21.6,28-37.2,37.2 s-32.6,13.8-51,13.8s-35.4-4.6-51-13.8s-28-21.6-37.2-37.2s-13.8-32.6-13.8-51s4.6-35.4,13.8-51s21.6-28,37.2-37.2 S131.7,47.9,150,47.9z"/>
                <path class="tick" fill="#1C9943" stroke="" stroke-width="3"
                      d="M208.4,118.6c0.8-0.8,1.2-1.9,1.2-3.3c0-1.4-0.4-2.6-1.2-3.7l-3.7-3.3c-0.8-1.1-1.9-1.6-3.3-1.6 s-2.6,0.4-3.7,1.2l-67,67l-28.4-28.8c-1.1-0.8-2.3-1.2-3.7-1.2c-1.4,0-2.5,0.4-3.3,1.2l-3.7,3.3c-0.8,1.1-1.2,2.3-1.2,3.7 s0.4,2.5,1.2,3.3l35.4,35.8c1.1,1.1,2.3,1.6,3.7,1.6c1.4,0,2.5-0.5,3.3-1.6L208.4,118.6z"/>
                                </svg>
            </div>
          </div>
        </div>
        <div class="btn-box d-flex justify-content-between">
          <button class="btn btn-sm btn-secondary prev-button px-3" @click="prevStep(3)"><i
              class="fa-light fa-arrow-left"></i> Previous
          </button>
          <button class="btn btn-sm btn-primary next-button px-3" @click="finish()"><i
              class="fa-light fa-arrow-right"></i> Finish
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
