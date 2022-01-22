<template>
  <div class="itineraries">
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
.itineraries {
  display: flex;
  gap: 30px;
}
</style>