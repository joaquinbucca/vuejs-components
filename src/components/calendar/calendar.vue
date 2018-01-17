<template>
    <div ref="calendar"></div>
</template>

<script type = "text/javascript">
  import fullcalendar from 'fullcalendar';
  import CalendarEvent from './calendar-event';

  export default {
    name: 'Calendar',

    props: {
      events: {
        type: Array,
        required: false
      },
      editable: {
        type: Boolean,
        default: false
      },
      droppable: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        calEvents: [],
        cal: null
      }
    },

    watch: {
      events: function() {
        this.calEvents = [];
        this.events.forEach(evt =>
          this.calEvents.push(new CalendarEvent(evt))
        );
        this.cal.fullCalendar('removeEventSources');
        this.cal.fullCalendar('addEventSource', this.calEvents);
        this.cal.fullCalendar('rerenderEvents');
      }
    },

    mounted () {
      const self = this;
      self.cal = $(self.$refs.calendar);
      const args = {
        firstDay: 1,
        lang: 'en',
        header: {
          left:   'prev,next today',
          center: 'title',
          right:  'month,agendaWeek,agendaDay'
        },
        height: "auto",
        allDaySlot: false,
        slotEventOverlap: false,
        timeFormat: 'HH:mm',

        events: self.calEvents,

        dayClick: (date) => {
          self.$emit('calendar-day-clicked', date);
          self.cal.fullCalendar('gotoDate', date.start);
          self.cal.fullCalendar('changeView', 'agendaDay');
        },

        eventClick: (event) => self.$emit('calendar-event-clicked', event)
      };

      if (self.editable) {
        args.editable = true;

        // args.eventResize = function(event) {
        //   self.$emit('calendar-event-resized', event);
        // }

        // args.eventDrop = function(event) {
        //   self.$emit('calendar-event-dropped', event);
        // }
      }

      if (self.droppable) {
        args.droppable = true;
        // args.eventReceive = function(event) {
        //   self.$emit('calendar-event-received', event);
        // }
      }

      self.cal.fullCalendar(args);
    }
  }
</script>
