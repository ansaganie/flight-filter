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
@import "../../styles/mixins.scss";

.flight-card {
  @include wh(100%, 168px);

  min-width: 880px;

  display: flex;
  justify-content: space-between;

  background: $background-primary;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  overflow: hidden;
}
</style>