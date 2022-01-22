<template>
  <div class="wrapper">
    <filters class="filters" />
    <flight-list class="flight-list" />
  </div>
</template>

<script>
import Filters from "../Filters/Filters.vue";
import FlightList from "../FlightList/FlightList.vue";

export default {
  name: "FlightCatalog",
  components: { Filters, FlightList },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  gap: 20px;
}
</style>