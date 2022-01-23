<template>
  <div class="itineraries">
    <date-time :datetime="depDate" />
    <flight-line
      :segments="itineraries.segments"
      :travelTime="itineraries.traveltime"
      :transferTime="transferTime"
    />
    <date-time :datetime="arrDate" :stopsCount="itineraries.stops" />
  </div>
</template>

<script>
import DateTime from './DateTime.vue';
import FlightLine from './FlightLine.vue';

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
    depDate() {
      return this.itineraries.segments[0].dep_time;
    },
    arrDate() {
      return this.itineraries.segments[this.itineraries.segments.length - 1]
        .dep_time;
    },
    transferTime() {
      return this.itineraries.layovers.reduce((sum, num) => sum + num, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.itineraries {
  display: flex;
  gap: 30px;
}
</style>
