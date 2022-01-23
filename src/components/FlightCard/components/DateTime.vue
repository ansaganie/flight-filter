<template>
  <time class="date-time" :datetime="datetime">
    <span class="date">
      {{ date }}
      <strong v-if="stopsCount > 0" class="stops-count"
        >+{{ stopsCount }}</strong
      >
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
    stopsCount: {
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

.time {
  font-weight: 600;
  font-size: $large-font-size;
  line-height: 33px;
}

.stops-count {
  color: rgba(255, 55, 36, 0.8);
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
}
</style>
