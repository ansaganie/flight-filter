<template>
  <div class="left-block">
    <div class="left-block-top">
      <div class="airline">
        <img
          class="airline-logo"
          :src="`https://aviata.kz/static/airline-logos/80x80/${itineraries.carrier}.png`"
          alt="Лого авиакомпании"
        />
        <div class="airline-name">{{ airlineName }}</div>
      </div>
      <itineraries :itineraries="itineraries" />
    </div>

    <div class="left-block-bottom">
      <div class="flight-links">
        <dashed-anchor href="#">Детали перелета</dashed-anchor>
        <dashed-anchor href="#">Условия тарифа</dashed-anchor>
      </div>
      <div v-if="!flight.refundable" class="nonrefundable">
        <svg width="20" height="20" class="nonrefundable-icon">
          <use xlink:href="#icon-non-refundable" />
        </svg>
        невозвратный
      </div>
    </div>
  </div>
</template>

<script>
import DashedAnchor from '../../shared/DashedAnchor/DashedAnchor.vue';
import Itineraries from './Itineraries.vue';

export default {
  components: { Itineraries, DashedAnchor },
  name: 'FlightCardLeftBlock',
  props: {
    flight: {
      type: Object,
      required: true,
    },
  },
  computed: {
    itineraries() {
      return this.flight.itineraries[0][0];
    },
    airlineName() {
      return this.itineraries.carrier_name;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/variables.scss';
@import '../../../styles/mixins.scss';

.left-block {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  padding: 40px 44px 20px 44px;

  .left-block-top {
    display: flex;
    align-items: center;
    gap: $padding-optimum;
  }
}

.airline {
  display: flex;
  gap: 8px;

  &-logo {
    @include wh(20px, 20px);
  }

  &-name {
    @include wh(100px, 20px);
    display: flex;
    align-items: center;

    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
  }
}

.left-block-bottom {
  display: flex;
  align-items: center;

  .flight-links {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 44px;
  }

  .nonrefundable {
    display: flex;
    align-items: center;

    font-family: 'Arial', sans-serif;
    &-icon {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
  }
}

@media screen and (max-width: 1140px) {
  .left-block {
    margin: 0 auto;
    padding: 12px;
    align-items: center;
  }

  .left-block-top {
    flex-direction: column;
    padding-bottom: 20px;
  }
}

@media screen and (max-width: 710px) {
  .left-block {
    padding: 70px 20px 8px;

    .left-block-top {
      width: 100%;
    }
  }

  .left-block-bottom {
    display: none;
  }

  .airline {
    position: absolute;
    top: 20px;
    left: 20px;
  }
}
</style>
