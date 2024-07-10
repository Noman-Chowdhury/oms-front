<script setup>

import DashboardBreadcrumb from "@/components/DashboardBreadcrumb.vue";
</script>

<template>
<DashboardBreadcrumb>
  <template #title>
    Invoices
  </template>
</DashboardBreadcrumb>
  <div class="row g-4 justify-content-center">
    <div class="col-xxl-7 col-xl-11">
      <div class="panel rounded-0">
        <div class="panel-body invoice" id="invoiceBody">
          <div class="invoice-header mb-25">
            <div class="row justify-content-between align-items-end">
              <div class="col-xl-4 col-lg-5 col-sm-6">
                <div class="shop-address">
                  <div class="logo mb-20">
                    <img src="@/assets/images/logo-big.png" alt="Logo">
                  </div>
                  <div class="part-txt">
                    <p class="mb-1">House: 17, Road 07, Sector 04, Uttara, Dhaka-1230</p>
                    <p class="mb-1">Email: info@zozba.com</p>
                    <p class="mb-1">Phone: 01792288555</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="d-flex gap-xl-4 gap-3 status-row">
                  <div class="w-50">
                    <div class="payment-status">
                      <label class="form-label">Payment Status:</label>
                      <select class="form-control form-select">
                        <option value="0">Paid</option>
                        <option value="1">Unpaid</option>
                        <option value="2">Partial</option>
                      </select>
                    </div>
                  </div>
                  <div class="w-50">
                    <div class="Order-status">
                      <label class="form-label">Order Status:</label>
                      <select class="form-control form-select">
                        <option value="0">Pending</option>
                        <option value="1">Delivered</option>
                        <option value="2">Canceled</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="invoice-body">
            <div class="info-card-wrap mb-25">
              <div class="row">
                <div class="col-md-4 col-sm-6">
                  <div class="info-card">
                    <h3>Customer Details:</h3>
                    <ul class="p-0">
                      <li><span>Name:</span> Shaikh Abu Dardah</li>
                      <li><span>Email:</span> iamdarda999@gmail.com</li>
                      <li><span>Phone:</span> +880 1234 567890</li>
                      <li><span>Address:</span> 90 Tejkunipara, Dhaka - 1202, Bangladesh</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="info-card">
                    <h3>Shipping Address:</h3>
                    <ul class="p-0">
                      <li><span>Name:</span> Shaikh Abu Dardah</li>
                      <li><span>Email:</span> iamdarda999@gmail.com</li>
                      <li><span>Phone:</span> +880 1234 567890</li>
                      <li><span>Address:</span> 90 Tejkunipara, Dhaka - 1202, Bangladesh</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="info-card">
                    <h3>Invoice Details:</h3>
                    <ul class="p-0">
                      <li><span>Invoice No.:</span> 22123101</li>
                      <li><span>Oder Date:</span> 2022-12-26</li>
                      <li><span>Total Amount:</span> 282.00</li>
                      <li><span>Payment Type:</span> cash on delivery</li>
                      <li><span>Payment Status:</span> <span class="text-danger">Unpaid</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="table-responsive mb-25">
              <table class="table table-bordered mb-0">
                <thead>
                <tr>
                  <th>No.</th>
                  <th>Products</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Shipping Cost</th>
                  <th>Tax</th>
                  <th>Subtotal</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>01</td>
                  <td>Sunnoti kamij with pagri and rumal</td>
                  <td>01</td>
                  <td>$99</td>
                  <td>$09</td>
                  <td>$00</td>
                  <td>$108</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>Sendel with pagri and rumal</td>
                  <td>02</td>
                  <td>$150</td>
                  <td>$10</td>
                  <td>$00</td>
                  <td>$160</td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>Smartphone with headphobe</td>
                  <td>03</td>
                  <td>$03</td>
                  <td>$03</td>
                  <td>$00</td>
                  <td>$06</td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>Shaikh Abu Dardah with his mind</td>
                  <td>04</td>
                  <td>$04</td>
                  <td>$04</td>
                  <td>$00</td>
                  <td>$08</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="total-payment-area row justify-content-end mb-25">
              <div class="col-md-4 col-sm-6">
                <ul>
                  <li class="d-flex justify-content-between">Net Total:<span>282.00</span></li>
                  <li class="d-flex justify-content-between">Shipping Cost:<span>0</span></li>
                  <li class="d-flex justify-content-between">Vat:<span>0</span></li>
                  <li class="d-flex justify-content-between">Total:<span>282.00</span></li>
                </ul>
              </div>
            </div>
            <p class="invoice-note text-center mb-0">Please check your parcel carefully, Please check your parcel carefully, Please check your parcel carefully</p>
          </div>
        </div>
        <div class="panel-body border-top">
          <div class="btn-box d-flex justify-content-end gap-2">
            <button class="btn btn-sm btn-primary" id="printInvoice"><i class="fa-light fa-print"></i> Print</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>