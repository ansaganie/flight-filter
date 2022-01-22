<template>
  <article class="flight-card">
    <div class="main-info">
      <div class="main-info-top">
        <div class="airline">
          <img
            class="airline-logo"
            src="../../assets/img/logo_mini_ks.png"
            alt=""
          />
          <div class="airline-name">Air Astana</div>
        </div>
        <itineraries />
      </div>

      <div class="main-info-bottom">
        <div class="flight-links">
          <dashed-anchor href="#">Детали перелета</dashed-anchor>
          <dashed-anchor href="#">Условия тарифа</dashed-anchor>
        </div>
        <div class="nonrefundable">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            class="nonrefundable-icon"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.62478 4.63241L2.18383 5.00007L2 3.7796L5.66142 3.22811L6.21291 6.88952L4.99244 7.07335L4.62478 4.63241Z"
              fill="#707276"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.50024 3.53113C3.45478 4.96004 2.1168 7.33195 2.1168 10.0164C2.1168 14.3824 5.65618 17.9218 10.0222 17.9218C14.3883 17.9218 17.9277 14.3824 17.9277 10.0164C17.9277 5.66294 14.4087 2.13141 10.0601 2.11102L10.035 3.11095C13.8429 3.11786 16.9277 6.20687 16.9277 10.0164C16.9277 13.8301 13.836 16.9218 10.0222 16.9218C6.20847 16.9218 3.1168 13.8301 3.1168 10.0164C3.1168 7.82668 4.13598 5.87504 5.72584 4.60992L5.50024 4.61573V3.99861V3.53113Z"
              fill="#707276"
            />
            <path
              d="M1.64918 16.7664L1.2933 17.1176L1.64451 17.4735L2.51148 18.3519L2.86269 18.7078L3.21857 18.3566L18.2986 3.47416L18.6545 3.12295L18.3032 2.76707L17.4363 1.8886L17.0851 1.53272L16.7292 1.88393L1.64918 16.7664Z"
              fill="#707276"
              stroke="white"
            />
          </svg>
          невозвратный
        </div>
      </div>
    </div>
    <div class="price-service-info"></div>
  </article>
</template>

<script>
import Itineraries from "./Itineraries.vue";
import DashedAnchor from "../../shared/DashedAnchor/DashedAnchor.vue";

export default {
  components: { Itineraries, DashedAnchor },
  name: "FlightCard",
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

.main-info {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

.main-info-top {
  display: flex;
  align-items: center;
  gap: $padding-optimum;
}

.airline {
  display: flex;
  gap: 8px;
}

.airline-logo {
  width: 20px;
  height: 20px;
}

.airline-name {
  width: 100px;
  height: 20px;

  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
}

.main-info-bottom {
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