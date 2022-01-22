<template>
  <div class="flight-line">
    <div class="flight-line-header">
      <span class="origin-code">ALA</span>
      <span class="best-time">4 ч 20 м</span>
      <span class="dest-code">TSE</span>
    </div>

    <div class="route-line">
      <span class="route-dot" />
      <span class="route-dot" />
    </div>

    <div class="docking-cities">
      через Шымкент,
      <time class="total-docking-time" datetime="PT1H150M0S">1 ч 50 м</time>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlightLine",
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

.flight-line-header {
  display: flex;
  justify-content: space-between;
}

.origin-code,
.dest-code {
  font-size: 10px;
  line-height: 12px;
  color: $gray;
}

.route-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  width: 168px;
  height: 1px;
  background-color: $gray;
}

.route-dot {
  width: 5px;
  height: 5px;
  background-color: $background-primary;
  border: 1px solid $gray;
  border-radius: 50%;
}

.docking-cities {
  color: #ff9900;
  text-align: center;
}
</style>