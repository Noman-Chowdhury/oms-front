<script setup>
import {ref} from "vue";
const props = defineProps(['perPageOptions', 'updatePerPage', 'downloadPdf'])

import DateRangePicker from "@/components/DateRangePicker.vue";

const perPageData = ref(10)
</script>

<template>
  <div class="product-table-quantity d-flex justify-content-between align-items-center mb-20">
    <ul class="mb-0">
      <li class="text-white">All (23)</li>
      <li>Pending (19)</li>
      <li>Draft (05)</li>
      <li>Trush (05)</li>
    </ul>
    <div class="btn-box d-md-flex d-none gap-2">
      <button class="btn btn-sm btn-icon btn-outline-primary" title="Download PDF" id="downloadPdf" @click="downloadPdf"><i class="fa-light fa-file-pdf"></i></button>
    </div>
  </div>
  <div class="table-filter-option">
    <div class="row g-3">
      <div class="col-sm-10 col-9 col-xs-12">
        <div class="row g-3">
          <div class="col">
            <form class="row g-2">
              <div class="col">
                <select class="form-control form-control-sm form-select" data-placeholder="Bulk action">
                  <option value="">Bulk action</option>
                  <option value="0">Move to trash</option>
                </select>
              </div>
              <div class="col">
                <button class="btn btn-sm btn-primary w-100">Apply</button>
              </div>
            </form>
          </div>
          <div class="col">
            <select class="form-control form-control-sm form-select select-search" data-placeholder="Select Employee">
              <option value="">Select Employee</option>
              <option value="LewisStone">Lewis Stone</option>
              <option value="JackHolland">Jack Holland</option>
              <option value="LilyBurgess">Lily Burgess</option>
              <option value="HarrisonFrench">Harrison French</option>
              <option value="IsabelMellor">Isabel Mellor</option>
              <option value="AdamBates">Adam Bates</option>
              <option value="MillieLee">Millie Lee</option>
              <option value="MadeleineHart">Madeleine Hart</option>
              <option value="LouiseGoddard">Louise Goddard</option>
              <option value="JosephFrancis">Joseph Francis</option>
              <option value="KaiBarker">Kai Barker</option>
              <option value="ErinKnight">Erin Knight</option>
              <option value="JaydenTaylor">Jayden Taylor</option>
              <option value="SophieHilton">Sophie Hilton</option>
              <option value="LeahWright">Leah Wright</option>
              <option value="LewisHooper">Lewis Hooper</option>
            </select>
          </div>
          <div class="col">
            <DateRangePicker />
          </div>
          <div class="col">
            <button class="btn btn-sm btn-primary"><i class="fa-light fa-filter"></i> Filter</button>
          </div>
          <div class="col">
            <div class="digi-dropdown dropdown">
              <button class="btn btn-sm btn-icon btn-primary" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                <i class="fa-regular fa-plus"></i>
              </button>
              <ul class="digi-dropdown-menu dropdown-menu">
                <li class="dropdown-title">Filter Options</li>
                <li>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="filterEmployee" checked>
                    <label class="form-check-label" for="filterEmployee">
                      Select Employee
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="filterDateRange" checked>
                    <label class="form-check-label" for="filterDateRange">
                      Date Range
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-2 col-3 col-xs-12 d-flex justify-content-end">
        <div class="dataTables_length">
          <label>Show
            <select class="form-control form-control-sm form-select" tabindex="-1" aria-hidden="true" v-model="perPageData" @change="updatePerPage(perPageData)">
              <option v-for="perPage in perPageOptions" :value="perPage">{{ perPage }}</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>