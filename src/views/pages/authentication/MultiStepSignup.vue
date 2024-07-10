<script setup>
import {onMounted, ref} from "vue";

const currentStep = ref(0);
const steps = ref([
  {
    step: 1,
    title: 'Account Type',
    subTitle: 'Select your account type',
  },
  {
    step: 2,
    title: 'Account Info',
    subTitle: 'Setup your account settings',
  },
  {
    step: 3,
    title: 'Business Details',
    subTitle: 'Setup your business details',
  },
  {
    step: 4,
    title: 'Billing Details',
    subTitle: 'Provide your payment info',
  },
  {
    step: 5,
    title: 'Completed',
    subTitle: 'Your account is created',
  },
]);

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
        <li v-for="(step, index) in steps" :key="step.step" :class="{ 'active': currentStep === index ,'completed': index < currentStep}">
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
            <h4 class="step-title">Choose Account Type <button class="btn-flush" data-bs-toggle="tooltip" data-bs-title="Billing is issued based on your selected account type"><i class="fa-duotone fa-circle-info"></i></button></h4>
            <span>For further details, visit our <a href="#">Help Page</a>.</span>
          </div>
          <div class="account-types">
            <div class="form-check border-primary">
              <input class="form-check-input" type="radio" name="accountType" id="personalAccountType">
              <label class="form-check-label" for="personalAccountType">
                <span class="part-icon">
                    <i class="fa-duotone fa-user-tie"></i>
                </span>
                <span class="part-txt">
                    <span class="title">Personal Account</span>
                    <span class="dscr">Create a personal account for your self only</span>
                </span>
              </label>
            </div>
            <div class="form-check border-primary">
              <input class="form-check-input" type="radio" name="accountType" id="corporateAccountType" checked>
              <label class="form-check-label" for="corporateAccountType">
                <span class="part-icon">
                  <i class="fa-duotone fa-briefcase"></i>
                </span>
                <span class="part-txt">
                  <span class="title">Corporate Account</span>
                  <span class="dscr">Create corporate account to manage users</span>
                </span>
              </label>
            </div>
          </div>
        </div>
        <div class="btn-box w-100 d-flex justify-content-end">
          <button class="btn btn-sm btn-primary next-button px-3" @click="nextStep(0)">Continue <i class="fa-light fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
    <div class="single-step scrollable" :class="{show: currentStep === 1}">
      <div class="step-content-wrap">
        <div class="step-content">
          <div class="step-heading">
            <h4 class="step-title">Account Info</h4>
            <span>For further details, visit our <a href="#">Help Page</a>.</span>
          </div>
          <div class="account-info-wrap">
            <form>
              <span class="account-info-title">Set the Team Size. <button class="btn-flush fs-14" data-bs-toggle="tooltip" data-bs-title="Provide your team size to help us setup your billing"><i class="fa-duotone fa-circle-info"></i></button></span>
              <div class="team-size">
                <div class="form-check text-primary">
                  <input class="form-check-input" type="radio" name="teamSize" id="teamSize_1-1" checked>
                  <label class="form-check-label" for="teamSize_1-1">
                    1-1
                  </label>
                </div>
                <div class="form-check text-primary">
                  <input class="form-check-input" type="radio" name="teamSize" id="teamSize_2-10">
                  <label class="form-check-label" for="teamSize_2-10">
                    2-10
                  </label>
                </div>
                <div class="form-check text-primary">
                  <input class="form-check-input" type="radio" name="teamSize" id="teamSize_11-50">
                  <label class="form-check-label" for="teamSize_11-50">
                    11-50
                  </label>
                </div>
                <div class="form-check text-primary">
                  <input class="form-check-input" type="radio" name="teamSize" id="teamSize_50">
                  <label class="form-check-label" for="teamSize_50">
                    50+
                  </label>
                </div>
              </div>
              <div class="team-title">
                <span class="account-info-title">Team Account Name</span>
                <input type="text" class="form-control" placeholder="Enter Name">
              </div>
              <div class="account-plan account-types gap-0">
                <span class="account-info-title">Select Account Plan <button class="btn-flush fs-14" data-bs-toggle="tooltip" data-bs-title="Monthly billing will be based on your account plan"><i class="fa-duotone fa-circle-info"></i></button></span>
                <div class="row g-2">
                  <div class="col-6">
                    <div class="form-check border-primary">
                      <input class="form-check-input" type="radio" name="accountPlan" id="companyAccount" checked>
                      <label class="form-check-label" for="companyAccount">
                        <span class="part-icon">
                            <i class="fa-duotone fa-user-tie"></i>
                        </span>
                        <span class="part-txt">
                            <span class="title">Company Account</span>
                            <span class="dscr">Create an account for Compnay</span>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-check border-primary">
                      <input class="form-check-input" type="radio" name="accountPlan" id="developerAccount">
                      <label class="form-check-label" for="developerAccount">
                        <span class="part-icon">
                            <i class="fa-duotone fa-briefcase"></i>
                        </span>
                        <span class="part-txt">
                            <span class="title">Developer Account</span>
                            <span class="dscr">Create an account for Developer</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="btn-box w-100 d-flex justify-content-between">
          <button class="btn btn-sm btn-secondary prev-button px-3" @click="prevStep(1)"><i class="fa-light fa-arrow-left"></i> Previous</button>
          <button class="btn btn-sm btn-primary next-button px-3" @click="nextStep(1)">Continue <i class="fa-light fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
    <div class="single-step scrollable" :class="{show: currentStep === 2}">
      <div class="step-content-wrap">
        <div class="step-content">
          <div class="step-heading">
            <h4 class="step-title">Business Details</h4>
            <span>For further details, visit our <a href="#">Help Page</a>.</span>
          </div>
          <div class="business-details-wrap">
            <form class="row">
              <div class="col-12">
                <label for="businessName" class="form-label">Business Name</label>
                <input type="text" id="businessName" class="form-control">
              </div>
              <div class="col-12">
                <label for="shortenedDscr" class="form-label">Shortened Description</label>
                <input type="text" id="shortenedDscr" class="form-control">
              </div>
              <div class="col-12">
                <label class="form-label">Corporation Type</label>
                <select class="form-control form-select">
                  <option value="1">S Corporation</option>
                  <option value="2">C Corporation</option>
                  <option value="3">Sole Proprietorship</option>
                  <option value="4">Non-profit</option>
                  <option value="5">Limited Liability</option>
                </select>
              </div>
              <div class="col-12">
                <label for="businessDscr" class="form-label">Business Description</label>
                <textarea id="businessDscr" rows="6" class="form-control"></textarea>
              </div>
              <div class="col-12">
                <label for="contactEmail" class="form-label">Contact Email</label>
                <input type="text" id="contactEmail" class="form-control">
              </div>
            </form>
          </div>
        </div>
        <div class="btn-box w-100 d-flex justify-content-between">
          <button class="btn btn-sm btn-secondary prev-button px-3" @click="prevStep(2)"><i class="fa-light fa-arrow-left"></i> Previous</button>
          <button class="btn btn-sm btn-primary next-button px-3" @click="nextStep(2)">Continue <i class="fa-light fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
    <div class="single-step scrollable" :class="{show: currentStep === 3}">
      <div class="step-content-wrap">
        <div class="step-content">
          <div class="step-heading">
            <h4 class="step-title">Billing Details</h4>
            <span>For further details, visit our <a href="#">Help Page</a>.</span>
          </div>
          <div class="billing-details-wrap">
            <form class="row align-items-end">
              <div class="col-12">
                <label for="nameOnCard" class="form-label">Name On Card</label>
                <input type="text" id="nameOnCard" class="form-control">
              </div>
              <div class="col-12">
                <label for="cardNumber" class="form-label">Card Number</label>
                <div class="input-group">
                  <input type="number" id="cardNumber" class="form-control">
                  <span class="input-group-text d-flex gap-1">
                      <img src="@/assets/images/visa.svg" alt="visa">
                      <img src="@/assets/images/mastercard.svg" alt="mastercard">
                      <img src="@/assets/images/american-express.svg" alt="american-express">
                  </span>
                </div>
              </div>
              <div class="col-4">
                <label class="form-label">Expiration Date</label>
                <select class="form-control form-select">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <div class="col-4">
                <select class="form-control form-select">
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                  <option value="2031">2031</option>
                  <option value="2032">2032</option>
                </select>
              </div>
              <div class="col-4">
                <label for="cvv" class="form-label">CVV</label>
                <div class="input-group">
                  <input type="number" id="cvv" class="form-control">
                  <span class="input-group-text fs-5"><i class="fa-duotone fa-credit-card"></i></span>
                </div>
              </div>
              <div class="col-12">
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="saveCardForFurtherBilling" checked>
                  <label class="form-check-label" for="saveCardForFurtherBilling">Save Card for further billing?</label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="btn-box d-flex flex-wrap gap-2 justify-content-between">
          <button class="btn btn-sm btn-secondary prev-button px-sm-3" @click="prevStep(3)"><i class="fa-light fa-arrow-left"></i> Previous</button>
          <button class="btn btn-sm btn-primary next-button px-sm-3" @click="nextStep(3)">Complete Submission <i class="fa-light fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
    <div class="single-step scrollable" :class="{show: currentStep === 4}">
      <div class="step-content-wrap">
        <div class="step-content mb-0">
          <div class="step-heading">
            <h4 class="step-title">Welcome on board!</h4>
            <span>For further details, visit our <a href="#">Help Page</a>.</span>
          </div>
          <div class="success-wrap">
            <p class="bg-success bg-opacity-50 border border-success rounded-1 py-2 px-3 fs-14">The United States Constitution, based on a socially agreed standard of individual rights, is an example of post-conventional morality.</p>
            <div class="d-flex justify-content-center">
              <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" class="check-mark" width="200" height="200" viewBox="0 0 300 300">
                                    <path class="circle" stroke="#1C9943" stroke-width="3" fill="#fff" fill-opacity="0" stroke-miterlimit="10" d="M150,47.9c18.4,0,35.4,4.6,51,13.8s28,21.6,37.2,37.2s13.8,32.6,13.8,51s-4.6,35.4-13.8,51s-21.6,28-37.2,37.2 s-32.6,13.8-51,13.8s-35.4-4.6-51-13.8s-28-21.6-37.2-37.2s-13.8-32.6-13.8-51s4.6-35.4,13.8-51s21.6-28,37.2-37.2 S131.7,47.9,150,47.9z" />
                <path class="tick" fill="#1C9943" stroke="" stroke-width="3" d="M208.4,118.6c0.8-0.8,1.2-1.9,1.2-3.3c0-1.4-0.4-2.6-1.2-3.7l-3.7-3.3c-0.8-1.1-1.9-1.6-3.3-1.6 s-2.6,0.4-3.7,1.2l-67,67l-28.4-28.8c-1.1-0.8-2.3-1.2-3.7-1.2c-1.4,0-2.5,0.4-3.3,1.2l-3.7,3.3c-0.8,1.1-1.2,2.3-1.2,3.7 s0.4,2.5,1.2,3.3l35.4,35.8c1.1,1.1,2.3,1.6,3.7,1.6c1.4,0,2.5-0.5,3.3-1.6L208.4,118.6z" />
                                </svg>
            </div>
          </div>
        </div>
        <div class="btn-box d-flex justify-content-between">
          <button class="btn btn-sm btn-secondary prev-button px-3" @click="prevStep(4)"><i class="fa-light fa-arrow-left"></i> Previous</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>