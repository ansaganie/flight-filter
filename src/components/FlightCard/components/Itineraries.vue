<template>
  <div class="itineraries">
    <date-time :datetime="departureDate" />
    <flight-line
      class="flight-line"
      :segments="itineraries.segments"
      :travelTime="itineraries.traveltime"
      :transferTime="transferTime"
    />
    <date-time
      class="arrival-date"
      :datetime="arrivalDate"
      :extraDaysToArrival="extraDaysToArrival"
    />
  </div>
</template>

<script>
import DateTime from './DateTime.vue';
import FlightLine from './FlightLine.vue';
import { getExtraDaysToArrival } from '../../../utils/DayJs';

export default {
  components: { DateTime, FlightLine },
  name: 'Itineraries',
  props: {
    itineraries: {
      type: Object,
      required: true,
    },
  },
  computed: {
    departureDate() {
      return this.itineraries.segments[0].dep_time;
    },
    arrivalDate() {
      return this.itineraries.segments[this.itineraries.segments.length - 1]
        .dep_time;
    },
    transferTime() {
      return this.itineraries.layovers.reduce((sum, num) => sum + num, 0);
    },
    extraDaysToArrival() {
      const depDate = this.itineraries.dep_date;
      const arrDate = this.itineraries.arr_date;

      return getExtraDaysToArrival(depDate, arrDate);
    },
  },
};
</script>

<style lang="scss" scoped>
.itineraries {
  display: flex;
  gap: 30px;
}

@media screen and (max-width: 710px) {
  .itineraries {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .flight-line {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    margin: 0 auto;
  }

  .arrival-date {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
   justify-self: flex-end;
  }
}
</style>
