<template>
  <article class="flight-card">
    <left-block />
    <right-block />
  </article>
</template>

<script>
import LeftBlock from "./components/LeftBlock.vue";
import RightBlock from "./components/RightBlock.vue";

export default {
  name: "FlightCard",
  components: { LeftBlock, RightBlock },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

.flight-card {
  display: flex;
  justify-content: space-between;

  min-width: 880px;
  width: 100%;
  height: 168px;
  background: $background-primary;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  overflow: hidden;
}
</style>