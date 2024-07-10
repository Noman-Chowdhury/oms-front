<script setup lang="ts">
import {onMounted, ref} from "vue";
import VOtpInput from "vue3-otp-input";
import Swal from 'sweetalert2'
import {useRouter} from "vue-router";
const router = useRouter();

const otpInput = ref<InstanceType<typeof VOtpInput> | null>(null);
const bindModal = ref("");

const handleOnComplete = (value: string) => {
  if (bindModal.value !== '' && bindModal.value.length === 6) {
    Swal.fire({
      text: "You have been successfully verified!",
      icon: "success",
      customClass: {
        closeButton: 'btn btn-sm btn-icon btn-success',
      },
      showCloseButton: false,
    })
    router.push({ name: 'dashboard_index'});
  } else {
    Swal.fire({
      text: "Please enter valid security code",
      icon: "error",
      confirmButtonText: "Try Again",
      customClass: {
        closeButton: 'btn btn-sm btn-icon btn-danger',
      },
      showCloseButton: false,
    });
  }
};

const handleOnChange = (value: string) => {
};

const clearInput = () => {
  otpInput.value?.clearInput();
};

const fillInput = (value: string) => {
  otpInput.value?.fillInput(value);
};
onMounted(() => {

})
</script>

<template>
  <div class="container">
    <div class="row g-4 align-items-center">
      <div class="col-lg-6">
        <div class="text-lg-start text-center logo mb-4">
          <img src="@/assets/images/logo-big.png" alt="logo">
        </div>
        <p class="text-lg-start text-center mb-lg-0 mb-4">It's the Bright One, it's the Right One, that's Business.</p>
      </div>
      <div class="col-lg-6">
        <div class="static-body">
          <div class="panel bg-transparent">
            <div class="panel-body">
              <div class="part-img w-25 m-auto mb-lg-5 mb-4 px-lg-4">
                <img src="@/assets/images/phone.png" alt="image">
              </div>
              <div class="part-txt text-center">
                <h2>Two-Factor Verification</h2>
                <p class="mb-2">Enter the verification code we sent to</p>
                <p class="fw-semibold fs-5 mb-lg-4 mb-0">********678</p>
              </div>
              <div class="verification-area text-center">
<!--                <div id="otp_target"></div>-->
                <div class="justify-content-center">
                  <v-otp-input
                      ref="otpInput"
                      v-model:value="bindModal"
                      input-classes="otp-input"
                      separator=""
                      :num-inputs="6"
                      :should-auto-focus="true"
                      input-type="letter-numeric"
                      :conditionalClass="['one', 'two', 'three', 'four', 'five', 'six']"
                      :placeholder="['*', '*', '*', '*', '*', '*']"
                      @on-change="handleOnChange"
                      @on-complete="handleOnComplete"
                  />
                </div>
                <p class="mb-4">Type your 6 digit security code</p>
                <button class="btn btn-primary px-3 security-code-submit" @click="handleOnComplete">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.otp-input {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(223, 223, 223, 0.15);
  color: #A9B4CC;
  text-align: center;
}
/* Background colour of an input field with value */
.otp-input.is-complete {
  background-color: #e4e4e4;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
.otp-input.is-complete {
  background: transparent;
}
</style>