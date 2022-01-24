<template>
  <section class="flight-list-container">
    <h3 class="visually-hidden">Список рейсов</h3>
    <ul v-if="flights.length > 0" class="flight-list" ref="scrollComponent">
      <li
        v-for="flight in renderedList"
        :key="flight.id"
        class="flight-list-item"
      >
        <flight-card :flight="flight" />
      </li>
    </ul>
    <h3 v-if="flights.length === 0" class="empty-list-message">
      По выбранным фильтрам подходящих рейсов не найдено
    </h3>
  </section>
</template>

<script>
import throttle from 'lodash.throttle';
import FlightCard from '../FlightCard/FlightCard.vue';

const THROTTLE_TIMEOUT = 300;

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
      endIndex: 10,
      step: 10,
      renderedList: [],
    };
  },
  methods: {
    addMoreItem() {
      this.renderedList = this.renderedList
        .concat(this.flights.slice(this.startIndex, this.endIndex));

      this.startIndex += this.step;
      this.endIndex += this.step;
    },
    handleScroll: throttle(function () {
      const element = this.$refs.scrollComponent;

      if (
        element
        && element.getBoundingClientRect().bottom < window.innerHeight
        && this.flights.length >= this.endIndex
      ) {
        this.addMoreItem();
      }
    }, THROTTLE_TIMEOUT),
  },
  watch: {
    flights() {
      this.startIndex = 0;
      this.endIndex = this.step;
      this.renderedList = [];

      this.addMoreItem();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
@import "../../styles/mixins.scss";

.flight-list-container {
 width: 100%;
}
.flight-list {
  @include clear-list;
}

.flight-list-item {
  padding-bottom: $padding-optimum;
}

.empty-list-message {
  text-align: center;
  width: 100%;
}
</style>
