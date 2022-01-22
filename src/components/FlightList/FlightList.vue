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

export default { components: { FlightCard } };
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

.flight-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.flight-list-item {
  padding-bottom: $padding-optimum;
}
</style>