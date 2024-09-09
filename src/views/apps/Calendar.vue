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
import {useCalenderStore} from "@/stores/calenders";
const e = new Date(l.now());

const calenderStore = useCalenderStore()

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
  dateClick: false,
  // dateClick: handleDateClick,
  select: false,
  // select: handleDateSelect,
  eventClick: false,
  // eventClick: handleEventClick,
  eventsSet: handleEvents,
  editable: false,
  // editable: true,
  droppable: false,
  // droppable: true,
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
  calenderStore.fetchHolidays()


  currentEvents.value = calenderStore.holidays;

  // calendarOptions.value.events = calenderStore.holidays
  calendarOptions.value.events = currentEvents.value

  // var containerEl = document.getElementById('external-events');
  // new Draggable(containerEl, {
  //   itemSelector: '.fc-event',
  //   eventData: function (eventEl) {
  //     return {
  //       title: eventEl.innerText
  //     };
  //   }
  // });

});

onUpdated(() => {
  initCalendar();
})
</script>

<template>
  <div class="row">
    <div class="col-xxl-12 col-lg-12">
      <div class="panel">
        <div class="panel-body">
          <div class="calendar">
            <FullCalendar :options="calendarOptions" />
          </div>
        </div>
      </div>
    </div>
<!--    <div class="col-xxl-3 col-lg-4 calendar-sidebar">-->
<!--      <div class="panel mb-25">-->
<!--        <div class="panel-header">-->
<!--          <h5>Reserved Event</h5>-->
<!--        </div>-->
<!--        <div class="panel-body">-->
<!--          <div id="external-events" class="sidebar-event-list">-->
<!--            <div class="fc-event">My Event 1</div>-->
<!--            <div class="fc-event">My Event 2</div>-->
<!--            <div class="fc-event">My Event 3</div>-->
<!--            <div class="fc-event">My Event 4</div>-->
<!--            <div class="fc-event">My Event 5</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="panel">-->
<!--        <div class="panel-header">-->
<!--          <h5>Upcoming Events</h5>-->
<!--        </div>-->
<!--        <div class="panel-body">-->
<!--          <div class="upcoming-event-list sidebar-event-list">-->
<!--            <div v-for="event in currentEvents" href="javascript:void(0)" class="p-1 my-1 rounded fc-event" :class="event.classNames">-->
<!--              {{ event.title }}-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
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