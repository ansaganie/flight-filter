<template>
  <main class="screen">
    <flight-catalog />
  </main>
</template>

<script>
import FlightCatalog from "../FlightCatalog/FlightCatalog.vue";

export default {
  name: "MainScreen",
  components: { FlightCatalog },
};
</script>

<style lang="scss" scoped>
.screen {
  max-width: 1140px;
  margin: 50px auto;
}
</style>