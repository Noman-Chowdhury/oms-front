<script setup>
import {onMounted, ref, shallowRef} from "vue";
import {useRouter} from "vue-router";
import ModalWindow from "@/components/ModalWindow.vue";
import AddTaskModal from "@/components/modals/AddTaskModal.vue";
import EditTaskModal from "@/components/modals/EditTaskModal.vue";
import ViewTaskModal from "@/components/modals/ViewTaskModal.vue";

const router = useRouter();

import TaskTableAction from "@/components/DatatableAction/TaskTableAction.vue";
import StatusTableAction from "@/components/DatatableAction/TaskStatusTableAction.vue";
import TaskTablePriorityAction from "@/components/DatatableAction/TaskTablePriorityAction.vue";
import TaskTableAssignToAction from "@/components/DatatableAction/TaskTableAssignToAction.vue";
import DigiDataTable from "@/components/datatable/DigiDataTable.vue";
import TableFilterOption from "@/components/task/TaskTableFilterOption.vue";
import TaskTableHeaderComponent from "@/components/task/TaskTableHeaderComponent.vue";
import PagePanelHeader from "@/components/PagePanelHeader.vue";

const taskActionComponent = shallowRef(TaskTableAction);
const taskStatusComponent = shallowRef(StatusTableAction);
const taskPriorityComponent = shallowRef(TaskTablePriorityAction);
const taskAssignToComponent = shallowRef(TaskTableAssignToAction);

const table = ref(null);
const selectedItems = ref([]);
const isSearch = ref(true);

const tableColumns = ref([
  { label: "", key: "selected", type: "checkbox" },
  { label: "Name", key: "name", sortable: true },
  { label: "Status", key: "status", type: "component" },
  { label: "Start Date", key: "start_date", sortable: true },
  { label: "Due Date", key: "due_date", sortable: true },
  { label: "Assign To", key: "assign_to", type: "component" },
  { label: "Priority", key: "priority", type: "component" },
  { label: "Action", key: "action", type: "component" },
]);

const tableData = ref([
  { id: 1, name: "Responsive Website Design", status: taskStatusComponent, start_date: '5/23/2023', due_date: '5/23/2023', assign_to: taskAssignToComponent, priority: taskPriorityComponent, action: taskActionComponent },
])

const dtSearch = ((searchText) => {
  table.value.updateSearch(searchText)
})

onMounted(() => {
})


</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="panel">
        <PagePanelHeader :dtSearch="dtSearch" :isSearch="isSearch">
          <template #title>Task Summary</template>
          <template #filter-column>
            <TaskTableHeaderComponent />
          </template>
        </PagePanelHeader>
        <div class="panel-body">
          <digi-data-table
            ref="table"
            :data="tableData"
            :columns="tableColumns"
            :selectedItems="selectedItems"
            @update:selectedItems="selectedItems = $event"
          >
            <template #filterOption="{perPageOptions, updatePerPage}">
              <TableFilterOption :perPageOptions="perPageOptions" :updatePerPage="updatePerPage"/>
            </template>
          </digi-data-table>
        </div>
      </div>
    </div>
  </div>

  <ModalWindow>
    <AddTaskModal />
  </ModalWindow>
  <ModalWindow>
    <EditTaskModal />
  </ModalWindow>
  <ModalWindow>
    <ViewTaskModal />
  </ModalWindow>
</template>

<style scoped>

</style>