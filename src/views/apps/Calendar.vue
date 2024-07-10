<script setup>
import * as bootstrap from 'bootstrap'
import FullCalendar from '@fullcalendar/vue3'
import {useToast} from 'vue-toast-notification';
const $toast = useToast({ position: 'top-right'});
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, {Draggable } from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import {onMounted, onUpdated, ref} from "vue";
import l from "moment";
import EventModalComponent from "@/components/modals/EventModalComponent.vue";
import EventDeleteModal from "@/components/modals/EventDeleteModal.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import {initCalendar} from "@/composable/dashboardManage";
const e = new Date(l.now());

const currentEvents = ref([]);
const deleteEvent = ref({});
const selectedDate = ref(null);

const isShowModal = ref(false);

const openModal = (() => {
  isShowModal.value = true
  deleteEvent.value = null
});

const closeModal = (() => {
  isShowModal.value = false
});

const handleDeleteEvent = (() => {
  if (deleteEvent && deleteEvent.value) {
    currentEvents.value = currentEvents.value.filter(item => item.title !== deleteEvent.value.title);
    calendarOptions.value.events = currentEvents.value
    closeModal()
    $toast.warning('Deleted successfully!')
  }
});

const handleDateClick = ((arg) => {
  selectedDate.value = arg.dateStr
  isShowModal.value = true
  const myModal = new bootstrap.Modal('#event-modal', {
    keyboard: false
  })
  myModal.show();
});

const handleDateSelect = ((arg) => {

});

const handleEventClick = ((arg) => {
  deleteEvent.value = arg.event
  const myModal = new bootstrap.Modal('#eventDeleteModal', {
    keyboard: false
  })
  myModal.show();
});
const handleEvents = ((arg) => {
  currentEvents.value = arg
});

const calendarOptions = ref({
  plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin ],
  initialView: 'dayGridMonth',
  slotDuration: "00:15:00",
  slotMinTime: "08:00:00",
  slotMaxTime: "19:00:00",
  themeSystem: "bootstrap",
  bootstrapFontAwesome: !1,
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  dateClick: handleDateClick,
  select: handleDateSelect,
  eventClick: handleEventClick,
  eventsSet: handleEvents,
  editable: true,
  droppable: true,
  selectable: !0,
  events: []
});

const addNewEvent = ((payload) => {
  currentEvents.value.push(payload);
  calendarOptions.value.events = currentEvents.value;
  let closeButton = document.querySelector('[data-bs-dismiss="modal"]');
  if (closeButton) {
    closeButton.click();
  }
  closeModal();
  $toast.success('Event added successfully!')

})

onMounted(() => {

  initCalendar();

  var containerEl = document.getElementById('external-events');
  new Draggable(containerEl, {
    itemSelector: '.fc-event',
    eventData: function (eventEl) {
      return {
        title: eventEl.innerText
      };
    }
  });

  currentEvents.value = [
    { id: 1, title: "Important meeting", start: e.value, end: e.value, classNames: "bg-success" },
    { id: 2, title: "Factory visit", start: new Date(l.now() + 218e6), allDay: !0, classNames: "bg-primary" },
    { id: 3, title: "Meeting with developer", start: new Date(l.now() + 418e6), classNames: "bg-danger" },
    { id: 4, title: "Design proposal", start: new Date(l.now() + 718e6), allDay: !0, classNames: "bg-info" },
    { id: 5, title: "Web design", start: new Date(l.now() + 818e6), classNames: "bg-warning" },
    { id: 6, title: "Cash out", start: new Date(l.now() + 1018e6), allDay: true, classNames: "bg-secondary" },
    { id: 7, title: "Online Meeting", start: new Date(l.now() + 1218e6), classNames: "bg-success" },
    { id: 8, title: "Conference", start: new Date(l.now() + 418e6), allDay: !0, classNames: "bg-primary" },
  ];

  calendarOptions.value.events = currentEvents.value

});

onUpdated(() => {
  initCalendar();
})
</script>

<template>
  <div class="row">
    <div class="col-xxl-9 col-lg-8">
      <div class="panel">
        <div class="panel-body">
          <div class="calendar">
            <FullCalendar :options="calendarOptions" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-lg-4 calendar-sidebar">
      <div class="panel mb-25">
        <div class="panel-header">
          <h5>Reserved Event</h5>
        </div>
        <div class="panel-body">
          <div id="external-events" class="sidebar-event-list">
            <div class="fc-event">My Event 1</div>
            <div class="fc-event">My Event 2</div>
            <div class="fc-event">My Event 3</div>
            <div class="fc-event">My Event 4</div>
            <div class="fc-event">My Event 5</div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-header">
          <h5>Upcoming Events</h5>
        </div>
        <div class="panel-body">
          <div class="upcoming-event-list sidebar-event-list">
            <div v-for="event in currentEvents" href="javascript:void(0)" class="p-1 my-1 rounded fc-event" :class="event.classNames">
              {{ event.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ModalWindow>
    <EventModalComponent
        v-show="isShowModal"
        :closeModal="closeModal"
        :selectedDate="selectedDate"
        :addNewEvent="addNewEvent"
    />
  </ModalWindow>
  <ModalWindow>
    <EventDeleteModal :closeModal="closeModal" :handleDeleteEvent="handleDeleteEvent"/>
  </ModalWindow>
</template>

<style>

</style>