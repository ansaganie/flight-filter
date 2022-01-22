<template>
  <time class="date-time" datetime="">
    <span class="date">
      25 ноя, вс
      <strong class="stops-count">+1</strong>
    </span>
    <span class="time">23:25</span>
  </time>
</template>

<script>
export default {
  name: "DateTime",
};
</script>

<style lang="scss" scoped>
.date-time {
  display: block;
  max-width: 72px;
  display: flex;
  flex-direction: column;
}

.time {
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
}

.stops-count {
  color: rgba(255, 55, 36, 0.8);
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
}
</style>