<template>
  <article class="flight-card">
    <h3 class="visually-hidden">Карточка рейса</h3>
    <left-block class="block-item" :flight="flight" />
    <right-block class="block-item" :flight="flight" />
  </article>
</template>

<script>
import LeftBlock from './components/LeftBlock.vue';
import RightBlock from './components/RightBlock.vue';

export default {
  name: 'FlightCard',
  components: { LeftBlock, RightBlock },
  props: {
    flight: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';
@import '../../styles/mixins.scss';

.flight-card {
  @include wh(100%, 100%);

  max-width: 880px;
  max-height: 168px;

  display: flex;
  justify-content: space-between;

  background: $background-primary;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  overflow: hidden;
}

@media screen and (max-width: 940px) {
  .flight-card {
    flex-direction: column;
    align-items: center;
    max-height: none;
  }
}

@media screen and (max-width: 710px) {
  .flight-card {
    position: relative;
  }
}

@media screen and (max-width: 550px) {
  .flight-card {
    min-width: 300px;
  }
}
</style>
