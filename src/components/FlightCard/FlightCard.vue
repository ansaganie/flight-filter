<template>
  <article class="flight-card">
    <main-info />
    <div class="price-service-info"></div>
  </article>
</template>

<script>
import MainInfo from "./components/MainInfo.vue";

export default {
  name: "FlightCard",
  components: { MainInfo },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

.flight-card {
  min-width: 880px;
  width: 100%;
  height: 168px;
  background: $background-primary;

  padding: 40px 44px 20px 44px;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}
</style>