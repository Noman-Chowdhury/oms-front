<script setup>
import NestedTeamComponent from "@/components/dragable/NestedTeamComponent.vue";
import {ref} from "vue";
import draggable from 'vuedraggable';
import NestedFolderComponent from "@/components/dragable/NestedFolderComponent.vue";
const props = defineProps(['element'])

const dragOptions = ref({
  group: 'nested',
  animation: 150,
  ghostClass: 'sortable-ghost',
})
</script>

<template>
  <div v-if="element?.dragableData">
    <draggable v-model="element.dragableData" group="nested" item-key="id" :options="dragOptions">
      <template #item="{ element, index }">
        <div class="list-group-item">
          <NestedTeamComponent v-if="element.type && element.type === 'team'" :element="element"/>
          <NestedFolderComponent v-else :element="element"/>
          <draggable v-if="element.children" v-model="element.children" item-key="id" group="nested" :options="dragOptions">
            <template #item="{ element, index }">
              <div class="list-group-item">
                <NestedTeamComponent v-if="element.type && element.type === 'team'" :element="element"/>
                <NestedFolderComponent v-else :element="element"/>
                <draggable v-if="element.children" v-model="element.children" item-key="id" group="nested"
                           :options="dragOptions">
                  <template #item="{ element, index }">
                    <div class="list-group-item">
                      <NestedTeamComponent v-if="element.type && element.type === 'team'" :element="element"/>
                      <NestedFolderComponent v-else :element="element"/>
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
</template>

<style scoped>

</style>