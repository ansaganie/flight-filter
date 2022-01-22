<template>
  <button class="dashed" @click.prevent>
    <slot />
  </button>
</template>

<script>
export default {
  name: "DashedButton",
};
</script>

<style lang="scss" scoped>
.dashed {
  cursor: pointer;

  border: none;
  background-color: transparent;

  color: #7284e4;
  text-decoration: underline dashed 1px;
  text-underline-offset: 4px;

  &:hover {
    color: #898db8;
  }
}
</style>