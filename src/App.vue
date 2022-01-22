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
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");
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
</style>
