<template>
  <div class="flight-line">
    <div class="flight-line-header">
      <span class="origin-code">{{ origAirportCode }}</span>
      <time
        class="flight-time"
        :datetime="formattedFlightTimeISO"
      >
        {{ formattedFlightTime }}
      </time>
      <span class="dest-code">{{ destAirportCode }}</span>
    </div>

    <div class="route-line">
      <span class="route-dot" />
      <span
        v-for="(_num, index) in routeDots"
        :key="index"
        class="route-dot"
      />
      <span class="route-dot" />
    </div>

    <span class="transfer-cities">
      {{ transferCities }},
      <time
        v-if="transferTime"
        class="transfer-time"
        :datetime="formattedTransferTimeISO"
      >
        {{ formattedTransferTime }}
      </time>
    </span>
  </div>
</template>

<script>
import { formatDuration, formatDurationISO } from '../../../utils/DayJs';

export default {
  name: 'FlightLine',
  props: {
    segments: {
      type: Array,
      required: true,
    },
    travelTime: {
      type: Number,
      required: true,
    },
    transferTime: {
      type: Number,
      required: true,
    },
  },
  computed: {
    routeDots() {
      return new Array(this.segments.length - 1).fill(null);
    },
    origAirportCode() {
      return this.segments[0].origin_code;
    },
    destAirportCode() {
      return this.segments[this.segments.length - 1].dest_code;
    },
    transferCities() {
      if (this.segments.length > 1) {
        const cities = [];

        this.segments.forEach((value, index) => {
          if (index < this.segments.length - 1) {
            cities.push(value.dest);
          }
        });

        return `через ${cities.join(', ')}`;
      }

      return 'прямой рейс';
    },
    formattedFlightTime() {
      return formatDuration(this.travelTime);
    },
    formattedTransferTime() {
      return formatDuration(this.transferTime);
    },
    formattedFlightTimeISO() {
      return formatDurationISO(this.travelTime);
    },
    formattedTransferTimeISO() {
      return formatDurationISO(this.transferTime);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/variables.scss';
@import '../../../styles/mixins.scss';

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

.transfer-cities {
  display: block;
  color: #ff9900;
  text-align: center;
  inline-size: $large-width;
  overflow-wrap: break-word;
}
</style>
