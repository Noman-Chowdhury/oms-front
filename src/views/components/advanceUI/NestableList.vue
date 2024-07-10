<script setup>
import {computed, onMounted, ref} from "vue";
import draggable from 'vuedraggable';
import {list, listThree, folderTeamData} from "@/composable/nestableList";
import DashboardBreadcrumb from "@/components/DashboardBreadcrumb.vue";
import FolderComponent from "@/components/dragable/FolderComponent.vue";
import TeamComponent from "@/components/dragable/TeamComponent.vue";

const dragOptions = ref({
  group: 'people',
  animation: 150,
  ghostClass: 'sortable-ghost',
  itemKey: 'id'
})

const flipOptions = ref({
  duration: 300,
})

const folderData = computed(() => {
  return folderTeamData.value.find((item) => item.section_type === 'folder')
})
const teamData = computed(() => {
  return folderTeamData.value.find((item) => item.section_type === 'team')
})

onMounted(() => {

});

</script>

<template>
  <DashboardBreadcrumb>
    <template #title>Nestable List</template>
  </DashboardBreadcrumb>
  <div class="row">
    <div class="col-md-6">
      <div class="panel">
        <div class="panel-header">
          <h5>Nested Sortables List</h5>
        </div>
        <div class="panel-body">
          <p class="fs-14 pb-1 mb-10">Use <code>nested-sortable</code> class to list-group class to set a nested list
            with sortable items.</p>
          <draggable v-model="list" group="people" item-key="id" class="list-group nested-sortable"
                     :options="dragOptions">
            <template #item="{ element, index }">
              <div class="list-group-item">
                {{ element.name }}
                <draggable v-if="element.children" v-model="element.children" group="people" item-key="id"
                           class="list-group nested-sortable">
                  <template #item="{ element, index }">
                    <div class="list-group-item">
                      {{ element.name }}
                    </div>
                  </template>
                </draggable>
              </div>
            </template>
          </draggable>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="panel">
        <div class="panel-header">
          <h5>Nested Sortables List With Handle</h5>
        </div>
        <div class="panel-body">
          <p class="fs-14 pb-1 mb-10">Use <code>nested-sortable-handle</code> class to list-group class to set a nested
            list with sortable items.</p>
          <div id="nestableListWithHandle" class="list-group nested-sortable-handle">
            <draggable v-model="listThree" group="nested" item-key="id" :options="dragOptions" :flip-list="flipOptions">
              <template #item="{ element, index }">
                <div class="list-group-item">
                  <span class="handle"><i class="fa-light fa-bars"></i></span> {{ element.name }}
                  <draggable v-if="element.children" v-model="element.children" item-key="id" group="nested" :options="dragOptions" :flip-list="flipOptions">
                    <template #item="{ element, index }">
                      <div class="list-group-item">
                        <span class="handle"><i class="fa-light fa-bars"></i></span> {{ element.name }}
                        <draggable v-if="element.children" v-model="element.children" item-key="id" group="nested" :options="dragOptions" :flip-list="flipOptions">
                          <template #item="{ element, index }">
                            <div class="list-group-item">
                              <span class="handle"><i class="fa-light fa-bars"></i></span> {{ element.name }}
                            </div>
                          </template>
                        </draggable>
                      </div>
                    </template>
                  </draggable>
                </div>
              </template>
            </draggable>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div v-for="(folderTeam, index) in folderTeamData" class="col-md-6">
      <div class="panel">
        <div class="panel-header">
          <h5 v-if="folderTeam.section_type === 'folder'">Folder Structure Nested List</h5>
          <h5 v-if="folderTeam.section_type === 'team'">Team Nested List</h5>
        </div>
        <div class="panel-body">
          <p v-if="folderTeam.section_type === 'folder'" class="fs-14 pb-1 mb-10">Use <code>nested-sortable</code> class to list-group class to set a nested list
            with sortable items where icons are given within list-group-item.</p>
          <p v-if="folderTeam.section_type === 'team'" class="fs-14 pb-1 mb-10">Use <code>nested-sortable</code> class to list-group class to set a nested list
            with sortable items where images are attached within a list-group-item div element.</p>
          <draggable v-model="folderTeamData" group="nested" item-key="id" :options="dragOptions">
            <template #item="{ element, index }">
            <div>
              <div v-if="folderTeam.section_type === 'folder'" class="list-group nested-sortable">
                <template v-if="element.section_type === 'folder'">
                  <TeamComponent :element="element" />
                </template>
              </div>
              <div v-if="folderTeam.section_type === 'team'" class="list-group nested-sortable">
                <template v-if="element.section_type === 'team'">
                  <TeamComponent v-if="element" :element="element" />
                </template>
              </div>
            </div>
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>