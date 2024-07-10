export function initCalendar() {
    let fcViewHarness = document.querySelector('.fc-view-harness');
    if (fcViewHarness) {
        let table = fcViewHarness.querySelector('table');
        if (table) {
            table.classList.add('table', 'mb-0', 'table-bordered');
        }
    }

    let fcToolbarChunk = document.querySelector('.fc-toolbar-chunk');
    if (fcToolbarChunk) {
        let btn = fcToolbarChunk.querySelector('.btn');
        if (btn) {
            btn.classList.add('btn-sm');
        }
    }

    // let fcButtonGroup = document.querySelector('.fc-button-group');
    let fcButtonGroup = document.querySelector('.fc-toolbar');
    if (fcButtonGroup) {
        fcButtonGroup.classList.add('btn-group');
        let buttons = fcButtonGroup.querySelectorAll('button');
        buttons.forEach(button => {
            button.classList.add('btn', 'btn-sm', 'btn-primary');
            button.classList.remove('fc-button', 'fc-button-primary');
        });
    }

    let fcTodayButton = document.querySelector('.fc-today-button');
    if (fcTodayButton) {
        fcTodayButton.classList.add('btn', 'btn-sm', 'btn-primary');
        fcTodayButton.classList.remove('fc-button', 'fc-button-primary');
    }

    let fcDayGridEvent = document.querySelector('.fc-day-grid-event');
    let upcomingEventList = document.querySelector('.upcoming-event-list');
    if (fcDayGridEvent && upcomingEventList) {
        let clone = fcDayGridEvent.cloneNode(true);
        upcomingEventList.appendChild(clone);
    }
}
