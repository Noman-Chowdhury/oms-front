<script setup>
import {ref} from "vue";

const isYearly = ref(false);

const prices = ref([
  { amount: 120, type: 'Monthly' },
  { amount: 450, type: 'Monthly' },
  { amount: 780, type: 'Monthly' },
  { amount: 150, type: 'Monthly' },
]);

const toggleYearly = (() => {
  isYearly.value = true;
  prices.value = prices.value.map(price => {
    return {
      amount: price.amount * 12,
      type: 'Yearly',
    };
  });
});

const toggleMonthly = (() => {
  isYearly.value = false;
  prices.value = prices.value.map(price => {
    return {
      amount: price.amount / 12,
      type: 'Monthly',
    };
  });
});

const toggleDiscount = ((event) => {
  prices.value = prices.value.map(price => {
    if (event.target.checked) {
      return {
        ...price,
        amount: (price.amount / 10) * 9,
      };
    } else {
      return {
        ...price,
        amount: (price.amount / 9) * 10,
      };
    }
  });
});
</script>

<template>
  <div class="panel pricing-panel">
    <div class="panel-body d-flex flex-column align-items-center justify-content-center">
      <div class="pricing">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="plan-type d-flex justify-content-center gap-2 mb-20">
                <button id="Monthly" class="btn btn-primary" @click="toggleMonthly" :disabled="!isYearly">Monthly</button>
                <button id="Yearly" class="btn btn-primary" @click="toggleYearly" :disabled="isYearly">Yearly</button>
              </div>
              <div class="discount mb-10">
                <div class="form-check form-switch">
                  <input class="form-check-input border-primary" type="checkbox" role="switch" id="getDiscount" @click="toggleDiscount">
                  <label class="form-check-label" for="getDiscount">Save 10% with Digiboard Payments</label>
                </div>
              </div>
              <div class="table-responsive">
                <div class="table-wrap">
                  <table class="table table-light table-bordered">
                    <thead>
                    <tr>
                      <th>
                        <div class="table-title">
                          <h2>Choose Your Plan</h2>
                        </div>
                      </th>
                      <th>
                        <div class="table-top">
                          <h3>Lean</h3>
                          <h2 class="price">$<span class="amount">{{ prices[0].amount }} </span> <span class="type">Monthly</span>
                          </h2>
                          <p>For your essential business needs.</p>
                          <a href="#" class="btn btn-primary">Select</a>
                        </div>
                      </th>
                      <th>
                        <div class="table-top">
                          <h3>Standard</h3>
                          <h2 class="price">$<span class="amount">{{ prices[1].amount }}</span> <span class="type">Monthly</span>
                          </h2>
                          <p>For your essential business needs.</p>
                          <a href="#" class="btn btn-primary">Select</a>
                        </div>
                      </th>
                      <th>
                        <div class="table-top">
                          <h3>Advanced</h3>
                          <h2 class="price">$<span class="amount">{{ prices[2].amount }}</span> <span class="type">Monthly</span>
                          </h2>
                          <p>For your essential business needs.</p>
                          <a href="#" class="btn btn-primary">Select</a>
                        </div>
                      </th>
                      <th>
                        <div class="table-top">
                          <h3>Enterprise</h3>
                          <h2 class="price">$<span class="amount">{{ prices[3].amount }}</span> <span class="type">Monthly</span>
                          </h2>
                          <p>For your essential business needs.</p>
                          <a href="#" class="btn btn-primary">Select</a>
                        </div>
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="table-secondary">
                      <td colspan="3"><span>Products</span></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Retail POS</td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                    </tr>
                    <tr>
                      <td>Registers</td>
                      <td>1 Included</td>
                      <td>1 Included</td>
                      <td>1 Included</td>
                      <td>1 Included</td>
                    </tr>
                    <tr>
                      <td>Integrated Payments</td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                    </tr>
                    <tr>
                      <td>Accounting</td>
                      <td><span class="icon minus"><i class="fas fa-minus"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                    </tr>
                    <tr>
                      <td>eCommerce</td>
                      <td><span class="icon minus"><i class="fas fa-minus"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                    </tr>
                    <tr>
                      <td>Omnichannel Loyalty</td>
                      <td><span class="icon minus"><i class="fas fa-minus"></i></span></td>
                      <td><span class="icon minus"><i class="fas fa-minus"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                    </tr>
                    <tr>
                      <td>Advanced Reporting</td>
                      <td><span class="icon minus"><i class="fas fa-minus"></i></span></td>
                      <td><span class="icon minus"><i class="fas fa-minus"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                    </tr>
                    <tr class="table-secondary">
                      <td colspan="3"><span>Services</span></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Digiboard Payments Card-present rate</td>
                      <td>2.6%+ 10c</td>
                      <td>2.6%+ 10c</td>
                      <td>2.6%+ 10c</td>
                      <td>2.6%+ 10c</td>
                    </tr>
                    <tr>
                      <td>24/7 customer support</td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                    </tr>
                    <tr>
                      <td>One on one onboarding</td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                    </tr>
                    <tr>
                      <td>Additional free training</td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                    </tr>
                    <tr>
                      <td>Dedicated account manager</td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                      <td><span class="icon check"><i class="far fa-check-circle"></i></span></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
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