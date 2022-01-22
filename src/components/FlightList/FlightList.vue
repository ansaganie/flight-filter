<template>
  <ul class="flight-list">
    <li class="flight-list-item">
      <flight-card />
    </li>
    <li class="flight-list-item">
      <flight-card />
    </li>
    <li class="flight-list-item">
      <flight-card />
    </li>
  </ul>
</template>

<script>
import FlightCard from "../FlightCard/FlightCard.vue";

export default {
  name: "FlightList",
  components: { FlightCard },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
@import "../../styles/mixins.scss";

.flight-list {
  @include clear-list;
}

.flight-list-item {
  padding-bottom: $padding-optimum;
}
</style>