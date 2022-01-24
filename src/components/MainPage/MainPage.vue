<template>
  <main class="main-page">
    <flight-catalog />
  </main>
</template>

<script>
import FlightCatalog from '../FlightCatalog/FlightCatalog.vue';

export default {
  name: 'MainPage',
  components: { FlightCatalog },
};
</script>

<style lang="scss" scoped>
.main-page {
  max-width: 1140px;
  margin: 20px auto;
}
</style>
