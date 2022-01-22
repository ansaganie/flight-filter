<template>
  <MainScreenVue />
</template>

<script>
import MainScreenVue from "./components/MainScreen/MainScreen.vue";

export default {
  name: "App",
  components: {
    MainScreenVue,
  },
};
</script>

<style lang="scss">
@use "./styles/variables.scss";

* {
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: variables.$deep-dark;
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
</style>
