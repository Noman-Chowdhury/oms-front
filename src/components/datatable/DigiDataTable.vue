<script setup>
import {computed, ref, watch} from "vue";

const props = defineProps(['data', 'columns', 'selectedItems','handleRowClick', 'classes'])
const emit = defineEmits(['update:selectedItems'])

const selectAll = ref(false);
const currentPage = ref(1);
const itemsPerPage = ref(10);
const sortColumn = ref(null);
const sortOrder = ref('asc');
const perPageOptions = ref([10, 25, 50, 100]);
const search = ref('');
const dataTable = ref(null);

const selectedIds = ref(props.selectedItems);

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  // return sortedTableData.value.slice(start, end);
  return filteredTableData.value.slice(start, end);
})

const sortedTableData = computed(() => {
  return sortData(props.data, sortColumn.value, sortOrder.value);
})

const totalPages = computed(() => {
  return Math.ceil(props.data.length / itemsPerPage.value);
})

const totalItems = computed(() => {
  return Math.ceil(props.data.length);
})

const pageNumbers = computed(() => {
  // const start = Math.max(1, currentPage.value - 2);
  // const end = Math.min(totalPages.value, start + 4);
  //
  // return Array.from({ length: end - start + 1 }, (_, index) => start + index);

  const maxVisiblePages = 3;
  const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);

  if (totalPages.value <= maxVisiblePages) {
    return Array.from({ length: totalPages.value }, (_, index) => index + 1);
  } else if (currentPage.value <= halfMaxVisiblePages) {
    return Array.from({ length: maxVisiblePages }, (_, index) => index + 1);
  } else if (currentPage.value >= totalPages.value - halfMaxVisiblePages) {
    return Array.from({ length: maxVisiblePages }, (_, index) => totalPages.value - maxVisiblePages + index + 1);
  } else {
    return Array.from({ length: maxVisiblePages }, (_, index) => currentPage.value - halfMaxVisiblePages + index);
  }
})

const rangeStart = computed(() => {
  return (currentPage.value - 1) * itemsPerPage.value + 1;
})

const rangeEnd = computed(() => {
  const end = currentPage.value * itemsPerPage.value;
  return end > totalItems.value ? totalItems.value : end;
})

const filteredTableData = computed(() => {
  const query = search.value.toLowerCase().trim();

  if (!query) {
    return sortedTableData.value;
  }

  return sortedTableData.value.filter((item) => {
    return Object.values(item).some((value) => {
      if (typeof value === 'string') {
        return value.toLowerCase().includes(query);
      }

      return false;
    });
  });
})

watch(() => selectedIds.value, (newValue) => {
  selectedIds.value = newValue;
  emit('update:selectedItems', newValue);
});

const sortData = ((data, column, order) => {
  return data.slice().sort((a, b) => {
    const aValue = a[column];
    const bValue = b[column];

    if (order === 'asc') {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return bValue < aValue ? -1 : bValue > aValue ? 1 : 0;
    }
  });
})

const goToPage = ((pageNumber) => {
  currentPage.value = pageNumber;
})

const sortBy = ((column) => {
  if (sortColumn.value === column) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  } else {
    // Set new sorting column and default order
    sortColumn.value = column;
    sortOrder.value = 'asc';
  }
})

const prevPage = (() => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
})

const nextPage = (() => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
})

const selectAllItems = (() => {
  if (selectAll.value) {
    selectedIds.value = paginatedData.value.map((item) => item.id);
    emit('update:selectedItems', selectedIds.value);
  } else {
    selectedIds.value = [];
  }
})

const updatePerPage = ((perPage) => {
  currentPage.value = 1;
  itemsPerPage.value = perPage
})

const updateSearch = ((searchText) =>{
  currentPage.value = 1;
  search.value = searchText
})

const handleRowClick = ((row) => {
   if (props.handleRowClick){
     props.handleRowClick(row)
   }
})

defineExpose({
  updateSearch,
  updatePerPage
})
</script>

<template>
  <div>
    <slot name="filterOption" :perPageOptions="perPageOptions" :updatePerPage="updatePerPage"/>
  </div>
<div class="table-responsive">
  <table ref="dataTable" class="table table-dashed table-hover digi-dataTable target-audience-table table-striped" :class="classes">
    <thead>
    <tr>
      <th v-for="column in columns" :key="column.key" class="">
        <div v-if="column.type === 'checkbox'" class="form-check">
          <input type="checkbox" v-model="selectAll" value="true" class="form-check-input" @change="selectAllItems" />
        </div>
        <span @click="column.sortable && sortBy(column.key)">
          <span v-if="column.type === 'html'" v-html="column.label"></span>
          <span v-else>{{ column.label }}</span>
          <span v-if="column.sortable && sortColumn === column.key">
              {{ sortOrder === 'asc' ? '▲' : '▼' }}
            </span>
        </span>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="row in paginatedData" :key="row.id">
      <td v-for="column in columns" :key="column.key">
        <template v-if="column.type && column.type === 'component' && !row[column.key].component">
          <component :is="row[column.key]"></component>
        </template>
        <template v-if="column.type && column.type === 'component' && row[column.key].component">
          <component :is="row[column.key].component" :data="row[column.key].data"></component>
        </template>
        <template v-else-if="column.type && column.type === 'link'">
          <router-link :to="row[column.key].url">{{ row[column.key].name }}</router-link>
        </template>
        <!-- Display a checkbox if the column type is 'checkbox' -->
        <template v-else-if="column.type === 'checkbox'">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="selectedIds" :value="row.id">
          </div>
        </template>
        <template v-else-if="column.type === 'switch'">
          <div class="form-check form-switch float-end">
            <input class="form-check-input" type="checkbox" role="switch" :checked="row[column.key]">
          </div>
        </template>
        <!-- Display image if the column type is 'image' -->
        <template v-else-if="column.type === 'image'">
          <div class="avatar">
            <img :src="row[column.key]" alt="Image">
          </div>
        </template>
        <!-- Display dropdown if the column type is 'dropdown' -->
        <template v-else-if="column.type === 'dropdown'">
          <select v-model="row[column.key]">
            <option v-for="option in column.options" :key="option">{{ option }}</option>
          </select>
        </template>
        <template v-else-if="column.type === 'html'">
          <div class="" v-html="row[column.key]"></div>
        </template>
        <!-- Display regular text for other column types -->
        <template v-else>
          <template v-if="column.type === undefined">
            <span v-if="column.class" :class="column.class" @click.prevent="handleRowClick(row)">{{ row[column.key] }}</span>
            <span v-else @click.prevent="handleRowClick(row)">{{ row[column.key] }}</span>
          </template>
        </template>
      </td>
    </tr>
    </tbody>
  </table>
</div>
  <div class="table-bottom-control">
    <div class="dataTables_info">
      Showing {{ rangeStart }} to {{ rangeEnd }} of {{ totalItems }}
    </div>
    <div class="dataTables_paginate paging_simple_numbers">
      <a class="btn btn-primary previous" @click="prevPage" :disabled="currentPage === 1"><i class="fa-light fa-angle-left"></i></a>
      <span>
        <button
            v-for="pageNumber in pageNumbers"
            :key="pageNumber"
            class="paginate_button btn btn-primary"
            :class="{ current: pageNumber === currentPage }"
            @click="goToPage(pageNumber)"
        >
          {{ pageNumber }}
        </button>
      </span>
      <a class="btn btn-primary next" @click="nextPage" :disabled="currentPage === totalPages"><i class="fa-light fa-angle-right"></i></a>
    </div>
  </div>
</template>

<style scoped>

</style>