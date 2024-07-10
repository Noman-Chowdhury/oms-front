<script setup>
import {ref} from "vue";
const props = defineProps(['handleAddLabel'])

const label = ref('');
const isNested = ref(false);

const addNewLabel = (() => {
  if (label.value !== '') {
    props.handleAddLabel(label.value)
    label.value = ''
  }
})
</script>

<template>
  <div class="modal fade" id="addLabelModal" tabindex="-1" aria-labelledby="addLabelModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="addLabelModalLabel">Add new label</h1>
          <button type="button" class="btn btn-sm btn-icon btn-outline-primary" data-bs-dismiss="modal" aria-label="Close"><i class="fa-light fa-xmark"></i></button>
        </div>
        <div class="modal-body">
          <label for="newLabelName" class="form-label">Enter new label name</label>
          <input v-model="label" type="text" class="form-control mb-20" id="newLabelName" required>
          <div class="form-check">
            <input v-model="isNested" class="form-check-input" type="checkbox" id="nestLabelCheck">
            <label class="form-check-label" for="nestLabelCheck">
              Nest label under:
            </label>
          </div>
          <div v-show="isNested" class="select-box mt-3">
            <select class="form-control select-parent-label">
              <option value="0">Label 1</option>
              <option value="1">Label 2</option>
              <option value="2">Label 3</option>
              <option value="3">Label 4</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="reset" class="btn btn-primary" data-bs-dismiss="modal" id="createLabel" @click="addNewLabel">Create</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>