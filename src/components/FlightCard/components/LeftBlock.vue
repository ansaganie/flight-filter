<template>
  <div class="left-block">
    <div class="left-block-top">
      <div class="airline">
        <img
          class="airline-logo"
          src="https://aviata.kz/static/airline-logos/80x80/KC.png"
          alt="Лого авиакомпании"
        />
        <div class="airline-name">Air Astana</div>
      </div>
      <itineraries />
    </div>

    <div class="left-block-bottom">
      <div class="flight-links">
        <dashed-anchor href="#">Детали перелета</dashed-anchor>
        <dashed-anchor href="#">Условия тарифа</dashed-anchor>
      </div>
      <div class="nonrefundable">
        <svg width="20" height="20" class="nonrefundable-icon">
          <use xlink:href="#icon-non-refundable" />
        </svg>
        невозвратный
      </div>
    </div>
  </div>
</template>

<script>
import DashedAnchor from "../../../shared/DashedAnchor/DashedAnchor.vue";
import Itineraries from "./Itineraries.vue";

export default {
  components: { Itineraries, DashedAnchor },
  name: "MainInfo",
};
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";
@import "../../../styles/mixins.scss";

.left-block {
  display: flex;
  flex-direction: column;
  height: 100%;
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

    font-family: "Arial", sans-serif;
    &-icon {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
  }
}
</style>