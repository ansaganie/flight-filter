<template>
  <time class="date-time" :datetime="datetime">
    <span class="date">
      {{ date }}
      <strong
        v-if="extraDaysToArrival > 0"
        class="extra-days-to-arrival"
      >
        &plus;{{ extraDaysToArrival }}
      </strong>
    </span>
    <span class="time">{{ time }}</span>
  </time>
</template>

<script>
export default {
  name: 'DateTime',
  props: {
    datetime: {
      type: String,
      required: true,
    },
    extraDaysToArrival: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    date() {
      return this.datetime.split(' ').slice(0, 3).join(' ').toLowerCase();
    },
    time() {
      return this.datetime.split(' ')[3];
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/variables.scss';

.date-time {
  display: block;
  max-width: 72px;
  display: flex;
  flex-direction: column;
}

.date {
  min-width: 72px;
}

.time {
  font-weight: 600;
  font-size: $large-font-size;
  line-height: 33px;
}

.extra-days-to-arrival {
  color: rgba(255, 55, 36, 0.8);
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
}
</style>
