<script setup>
import {computed, ref} from "vue";
import DatePicker from 'vue-datepicker-next';

const  date = ref([new Date(), new Date()])

const shortcuts = ref([
  {
    text: 'Today',
    onClick() {
      const date = new Date();
      return [date, date];
    },
  },
  {
    text: 'Yesterday',
    onClick() {
      const date = new Date();
      const end = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24);
      return [date, end];
    }
  },
  {
    text: 'Last 7 Days',
    onClick() {
      const date = new Date();
      const end = new Date();
      date.setTime(end.getTime() - 7 * 24 * 3600 * 1000);
      return [date,end];
    },
  },
  {
    text: 'This Week',
    onClick() {
      const date = new Date();
      date.setDate(date.getDate() - date.getDay());
      const end = new Date(date);
      end.setDate(end.getDate() + 6);
      return [date, end];
    },
  },
  {
    text: 'This Month',
    onClick() {
      const end = new Date();
      const date = new Date(end.getFullYear(), end.getMonth(), 1);
      return [date, end];
    },
  },
  {
    text: 'Last Month',
    onClick() {
      const date = new Date();
      date.setMonth(date.getMonth() - 1, 1);
      const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      return [date, end];
    },
  },
  {
    text: 'This Year',
    onClick() {
      const end = new Date();
      const date = new Date(end.getFullYear(), 0, 1);
      return [date, end];
    },
  },
])

const today = ((emit) => {
  const start = new Date();
  const end = new Date();
  const date = [start];
  emit(date);
})

const selectNextThreeDay = ((emit) => {
  const start = new Date();
  const end = new Date();
  end.setTime(end.getTime() + 3 * 24 * 3600 * 1000);
  const date = [start, end];
  emit(date);
})

</script>

<template>
  <div class="input-group dashboard-filter">
      <date-picker
          v-model:value="date"
          :shortcuts="shortcuts"
          range
          placeholder="Select date"
      ></date-picker>
  </div>
</template>

<style lang="scss">
//$namespace: 'form-control';
$default-color: #112143;
//$primary-color: var(--ck-color-text);
@mixin theme-color($color-name) {
  @if $color-name == 'default' {
    color: $default-color;
  } @else {
    color: $color-2;
  }
}
</style>