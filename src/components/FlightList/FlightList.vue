<template>
  <ul class="flight-list">
    <li v-for="flight in flights" :key="flight.id" class="flight-list-item">
      <flight-card :flight="flight" />
    </li>
  </ul>
</template>

<script>
import FlightCard from '../FlightCard/FlightCard.vue';

export default {
  name: 'FlightList',
  components: { FlightCard },
  props: {
    flights: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';
@import '../../styles/mixins.scss';

.flight-list {
  @include clear-list;
}

.flight-list-item {
  padding-bottom: $padding-optimum;
}
</style>
