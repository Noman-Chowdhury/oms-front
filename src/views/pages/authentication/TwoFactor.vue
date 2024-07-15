<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import VOtpInput from "vue3-otp-input";
import Swal from 'sweetalert2'
import {useRouter} from "vue-router";
import {useUpdatePassword} from "@/stores/passwordStore";
import { useObfuscateEmail } from "@/composable/useObfuscateEmail"

const router = useRouter();
const passwordStore = useUpdatePassword();

const otpInput = ref<InstanceType<typeof VOtpInput> | null>(null);
const bindModal = ref("");
const { obfuscateEmail } = useObfuscateEmail();
const obfuscatedEmail = computed(() => obfuscateEmail(passwordStore.email));
const handleOnComplete = async (value: string) => {

  if (bindModal.value !== '' && bindModal.value.length === 6) {
    await passwordStore.verifyResetCode(bindModal.value)
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
    <div class="row text-center">
      <div class="col-lg-12" align="center">
        <div class="static-body">
          <div class="panel bg-transparent">
            <div class="panel-body">
              <div class="part-img w-25 m-auto mb-lg-5 mb-4 px-lg-4">
                <img src="@/assets/images/phone.png" alt="image">
              </div>
              <div class="part-txt text-center">
                <h2>Two-Factor Verification</h2>
                <p class="mb-2">Enter the verification code we sent to</p>
                <p class="fw-semibold fs-5 mb-lg-4 mb-0">{{  obfuscatedEmail }}</p>
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
                      class="justify-content-center"
                  />
                </div>
                <p class="mb-4">Type your 6 digit security code</p>
                <div class="text-center">
                  <button class="btn btn-primary px-3 security-code-submit" @click="handleOnComplete">Submit</button>
                </div>
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
  border: 1px solid #034f75;
  color: #A9B4CC;
  text-align: center;
}

/* Background colour of an input field with value */
.otp-input.is-complete {
  //background-color: #034f75;
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
  //background: transparent;
  background-color: #034f75;
  color: #FFFFFF;
}
</style>