<script setup>
import {onMounted, ref} from "vue";

const currentStep = ref(0);
const steps = ref([
  {
    step: 1,
    title: 'Step 1',
    subTitle: 'Select your account type',
  },
  {
    step: 2,
    title: 'Step 2',
    subTitle: 'Setup your account settings',
  },
  {
    step: 3,
    title: 'Step 3',
    subTitle: 'Setup your business details',
  },
  {
    step: 4,
    title: 'Step 4',
    subTitle: 'Your account is created',
  },
]);

const company = ref({
  name: '',
  phone:'',
  email:'',
  country:'bangladesh',
  website:'https://....',
  address:'',
  city:'',
  state:'',
  postal_code:'',
  contact_person_name:'',
  contact_person_phone:'',
  category:'',
  employees:'',
  version: 'trial',
})

const nextStep = ((index) => {
  if (index < steps.value.length - 1) {
    currentStep.value = index + 1;
  }
});

const prevStep = ((index) => {
  if (index > 0) {
    currentStep.value = index - 1;
  }
});

const finish = (() => {
  console.log('great')
});

onMounted(() => {
})
</script>

<template>
  <div class="steps-sidebar bg-primary">
    <div class="sidebar-content">
      <div class="sidebar-logo">
        <router-link :to="{name: 'dashboard_index'}">
          <img src="@/assets/images/logo-big.png" alt="Logo">
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
            <h4 class="step-title">Step 1</h4>
            <!--            <span>For further details, visit our <a href="#">Help Page</a>.</span>-->
          </div>
          <div class="account-info-wrap">
            <form style="min-width: 500px">
              <div class="team-title">
                <span class="account-info-title">Company Name</span>
                <input type="text" class="form-control" placeholder="Enter Name" v-model="company.name">
              </div>
              <div class="team-title">
                <span class="account-info-title">Phone Number</span>
                <input type="text" class="form-control" placeholder="Enter Number" v-model="company.phone">
              </div>
              <div class="team-title">
                <span class="account-info-title">Email</span>
                <input type="email" class="form-control" placeholder="Enter Email" v-model="company.email">
              </div>
              <div class="team-title">
                <span class="account-info-title">Country</span>
                <select class="form-control form-select"  v-model="company.country">
                  <option value="bangladesh">Bangladesh</option>
                </select>
              </div>
              <div class="team-title">
                <span class="account-info-title">Website</span>
                <input type="text" class="form-control" placeholder="Enter Number" v-model="company.website">
              </div>
            </form>
          </div>
        </div>
        <div class="btn-box w-100 d-flex justify-content-between">
          <button class="btn btn-sm btn-primary next-button px-3" @click="nextStep(0)">Continue <i
              class="fa-light fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
    <div class="single-step scrollable" :class="{show: currentStep === 1}">
      <div class="step-content-wrap">
        <div class="step-content">
          <div class="step-heading">
            <h4 class="step-title">Step 2</h4>
<!--            <span>For further details, visit our <a href="#">Help Page</a>.</span>-->
          </div>
          <div class="business-details-wrap">
            <form class="row">
              <div class="col-12">
                <label for="businessDscr" class="form-label">Address</label>
                <textarea id="businessDscr" rows="3" class="form-control" placeholder="Enter Address" v-model="company.address"></textarea>
              </div>
              <div class="col-12">
                <label for="businessName" class="form-label">City</label>
                <input type="text" id="" class="form-control" placeholder="Enter City Name" v-model="company.city">
              </div>
              <div class="col-12">
                <label for="businessName" class="form-label">State</label>
                <input type="text" id="" class="form-control" placeholder="Enter State Name" v-model="company.state">
              </div>
              <div class="col-12">
                <label for="businessName" class="form-label">Postal Code</label>
                <input type="text" id="" class="form-control"  placeholder="Enter Postal Code" v-model="company.postal_code">
              </div>
              <div class="col-12">
                <label for="shortenedDscr" class="form-label">Contact Person Name</label>
                <input type="text" id="shortenedDscr" class="form-control" placeholder="Enter Name" v-model="company.contact_person_name">
              </div>
              <div class="col-12">
                <label for="shortenedDscr" class="form-label">Contact Person Phone</label>
                <input type="text" id="shortenedDscr" class="form-control" placeholder="Enter Phone" v-model="company.contact_person_phone">
              </div>
              <div class="col-12">
                <label class="form-label">Company Category</label>
                <select class="form-control form-select" v-model="company.category">
                  <option value="1">IT</option>
                  <option value="2">FOOD</option>
                </select>
              </div>
              <div class="col-12">
                <label for="businessName" class="form-label">No. Of Employee</label>
                <input type="number" id="" class="form-control" placeholder="Enter Total Employee " v-model="company.employees">
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
            <h4 class="step-title">Billing Details</h4>
<!--            <span>For further details, visit our <a href="#">Help Page</a>.</span>-->
          </div>
          <div class="account-types">
            <div class="row">
              <div class="col-6">
                <div class="form-check border-primary">
                  <input class="form-check-input" type="radio" name="accountType" id="personalAccountType" value="trial"  v-model="company.version" :checked="company.version === 'trial'">
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
                  <input class="form-check-input" type="radio" name="accountType" id="corporateAccountType" value="paid"  v-model="company.version" :checked="company.version === 'paid'">
                  <label class="form-check-label" for="corporateAccountType">
                <span class="part-icon">
                  <i class="fa-duotone fa-briefcase"></i>
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
            <h4 class="step-title">Thank You!</h4>
<!--            <span>For further details, visit our <a href="#">Help Page</a>.</span>-->
          </div>
          <div class="success-wrap">
            <p class="bg-success bg-opacity-50 border border-success rounded-1 py-2 px-3 fs-14">You will get an confirmation email soon.</p>
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
          <button class="btn btn-sm btn-primary next-button px-3"><i
              class="fa-light fa-arrow-right" @click="finish"></i> Finish
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>