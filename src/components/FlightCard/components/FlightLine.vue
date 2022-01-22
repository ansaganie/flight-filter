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

    <span class="docking-cities">
      через Шымкент, Астана, Актау, Атырау
      <time class="total-docking-time" datetime="PT1H150M0S">1 ч 50 м</time>
    </span>
  </div>
</template>

<script>
export default {
  name: "FlightLine",
};
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";
@import "../../../styles/mixins.scss";

$large-width: 168px;
.flight-line-header {
  display: flex;
  justify-content: space-between;
  max-width: $large-width;
}

.origin-code,
.dest-code {
  font-size: 10px;
  line-height: 12px;
  color: $gray;
}

.route-line {
  @include wh($large-width, 1px);

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  background-color: $gray;
}

.route-dot {
  @include wh(5px, 5px);

  background-color: $background-primary;
  border: 1px solid $gray;
  border-radius: 50%;
}

.docking-cities {
  display: block;
  color: #ff9900;
  text-align: center;
  inline-size: $large-width;
  overflow-wrap: break-word;
}
</style>