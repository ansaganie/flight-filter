<template>
  <a class="dashed" @click.prevent>
    <slot />
  </a>
</template>

<script>
export default {
  name: "DashedAnchor",
};
</script>

<style lang="scss" scoped>
.dashed {
  cursor: pointer;

  color: #7284e4;
  text-decoration: underline dashed 1px;
  text-underline-offset: 4px;

  &:hover {
    color: #898db8;
  }
}
</style>