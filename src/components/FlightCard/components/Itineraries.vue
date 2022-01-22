<template>
  <div class="flight-docking">
    <date-time />
    <flight-line />
    <date-time />
  </div>
</template>

<script>
import DateTime from "./DateTime.vue";
import FlightLine from "./FlightLine.vue";

export default {
  components: { DateTime, FlightLine },
  name: "Itineraries",
};
</script>

<style lang="scss" scoped>
.flight-docking {
  display: flex;
  gap: 30px;
}
</style>