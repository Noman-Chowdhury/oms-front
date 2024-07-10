<script setup>
import {ref} from "vue";
import draggable from 'vuedraggable';
import TeamComponent from "@/components/dragable/TeamComponent.vue";
import NestedTeamComponent from "@/components/dragable/NestedTeamComponent.vue";
import NestedFolderComponent from "@/components/dragable/NestedFolderComponent.vue";
const props = defineProps(['element'])

const dragOptions2 = ref({
  group: 'nested',
  animation: 150,
  ghostClass: 'sortable-ghost',
})
</script>

<template>
  <draggable v-model="element.dragableData" group="nested" item-key="id" :options="dragOptions2">
    <template #item="{ element, index }">
      <div>
        <NestedTeamComponent v-if="element.type && element.type === 'team'" :element="element"/>
        <div v-else class="">
          <span class="text-warning"><i :class="`fa-solid ${element.icon}`"></i></span>
          {{ element.name }}
          <draggable v-if="element.children" v-model="element.children" item-key="id" group="nested"
                     :options="dragOptions2">
            <template #item="{ element, index }">
              <NestedTeamComponent v-if="element.type && element.type === 'team'" :element="element"/>
              <NestedFolderComponent v-else :element="element"/>
            </template>
          </draggable>
        </div>
      </div>
    </template>
  </draggable>
</template>

<style scoped>

</style>