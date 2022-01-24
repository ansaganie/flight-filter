<template>
  <div class="screen">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import "./styles/variables.scss";

* {
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: $small-font-size;
  line-height: 16px;
  color: $deep-dark;
  background-color: #d7d7d7;
}

.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.screen {
  margin: 0 auto;
  max-width: 1180px;
  padding: 0 20px;
}
</style>
