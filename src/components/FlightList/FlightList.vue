<template>
  <ul class="flight-list" ref="scrollComponent">
    <li
      v-for="flight in renderedList"
      :key="flight.id"
      class="flight-list-item"
    >
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
  mounted() {
    this.addMoreItem();

    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  data() {
    return {
      startIndex: 0,
      endIndex: 6,
      step: 6,
      renderedList: [],
    };
  },
  methods: {
    addMoreItem() {
      this.renderedList = this.renderedList.concat(
        this.flights.slice(this.startIndex, this.endIndex),
      );

      this.startIndex += this.step;
      this.endIndex += this.step;
    },
    handleScroll() {
      const element = this.$refs.scrollComponent;

      if (
        element.getBoundingClientRect().bottom < window.innerHeight
        && this.flights.length > this.endIndex + 1
      ) {
        this.addMoreItem();
      }
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
