<script setup>
import {ref} from "vue";
const props = defineProps(['closeModal', 'selectedDate', 'addNewEvent']);

const title = ref('');
const category = ref('');
const errors = ref({});

const handleFormSubmit = (() => {
  errors.value = {}

  if (title.value !== '' && category.value !== '') {
    let newEvent = { title: title.value, start: new Date(props.selectedDate), allDay: !0, classNames: category.value };
    props.addNewEvent(newEvent)
    modalClose();
  } else {
    if (title.value === '') {
      errors.value.title = true
    }
    if (category.value === '') {
      errors.value.category = true
    }
  }
});

const modalClose = (() => {
  errors.value = {};
  props.closeModal();
  title.value = '';
  category.value = '';
})

</script>

<template>
  <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="event-modal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form class="needs-validation" name="event-form" id="form-event" novalidate>
          <div class="modal-header">
            <h5 class="modal-title" id="modal-title">Event</h5>
            <button type="button" class="btn btn-sm btn-icon btn-outline-primary" data-bs-dismiss="modal" aria-label="Close" @click="modalClose"><i class="fa-light fa-xmark"></i></button>
          </div>
          <div class="modal-body">
            <div class="row g-3">
              <div class="col-12">
                <div>
                  <label class="control-label form-label">Event Name</label>
                  <input class="form-control" v-model="title" placeholder="Insert Event Name" type="text" name="title" id="event-title" required>
                  <div v-if="errors.title" class="invalid-feedback d-block">Please provide a valid event name</div>
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3">
                  <label class="control-label form-label">Category</label>
                  <select class="form-control form-select" name="category" v-model="category" id="event-category" required>
                    <option value="">Select a category</option>
                    <option value="bg-primary">Primary</option>
                    <option value="bg-danger">Danger</option>
                    <option value="bg-success">Success</option>
                    <option value="bg-info">Info</option>
                    <option value="bg-dark">Dark</option>
                    <option value="bg-warning">Warning</option>
                  </select>
                  <div v-if="errors.category" class="invalid-feedback d-block">Please select a valid event category</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
<!--                <button type="button" class="btn btn-sm btn-danger" id="btn-delete-event">Delete</button>-->
              </div>
              <div class="col-6 text-end">
                <button type="button" class="btn btn-sm btn-light me-1" data-bs-dismiss="modal" @click="modalClose">Close</button>
                <button type="submit" class="btn btn-sm btn-success" id="btn-save-event" @click.prevent="handleFormSubmit">Save</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>