<template>
  <fieldset class="wrapper">
    <legend class="title">{{ filtersInfo.label }}</legend>
    <button class="clear-btn" @click.prevent>
      <svg width="20" height="20" class="filter-clear-icon">
        <use xlink:href="#icon-clear-filter" />
      </svg>
    </button>
    <label
      v-for="(value, key) in filtersInfo.filters"
      :key="key"
      class="check-label"
    >
      <input :id="key" class="visually-hidden checkbox" type="checkbox" />
      <span class="check-icon" />
      {{ value }}
    </label>
  </fieldset>
</template>

<script>
export default {
  name: "FilterItem",
  props: {
    filtersInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

.wrapper {
  padding: $padding-optimum;
  border-block-start: 0;
  display: flex;
  flex-direction: column;
  position: relative;

  min-width: 240px;
  width: 100%;

  border: none;
  background: #f5f5f5;
  background-size: 50%;
  border-radius: 4px;
}

.title {
  float: left;
  margin: 0;
  padding: 0;
  margin-bottom: $padding-optimum;

  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: $deep-dark;
  display: block;
}

.clear-btn {
  position: absolute;
  top: $padding-optimum;
  right: $padding-optimum;

  background: transparent;
  border: none;
  cursor: pointer;

  .filter-clear-icon {
    fill: #b9b9b9;
  }

  &:hover .filter-clear-icon {
    fill: #7284e4;
  }
}

.check-label {
  display: flex;
  align-items: center;
  margin: 0 -12px;
  padding-left: 36px;
  min-width: 100%;
  height: 32px;
  &:hover {
    background-color: #ebebeb;
  }
}

.check-icon {
  position: absolute;
  margin-left: -24px;
  width: 12px;
  height: 12px;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='11' height='11' rx='1.5' fill='white' stroke='%23B9B9B9'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat no-repeat;
  background-position: center center;
  background-size: cover;
}

.checkbox {
  &:hover + .check-icon {
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='11' height='11' rx='1.5' fill='white' stroke='%23B9B9B9'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.95452 4.1527L5.24992 9.44537L2 6.19545L3.41421 4.78123L5.16429 6.53131L8.4597 2.82397L9.95452 4.1527Z' fill='%23B9B9B9'/%3E%3C/svg%3E%0A");
  }
  &:checked + .check-icon {
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='11' height='11' rx='1.5' fill='white' stroke='%23B9B9B9'/%3E%3Crect x='0.5' y='0.5' width='11' height='11' rx='1.5' fill='%2355BB06' stroke='%2355BB06'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.95452 4.1527L5.24992 9.44537L2 6.19545L3.41421 4.78123L5.16429 6.53131L8.4597 2.82397L9.95452 4.1527Z' fill='white'/%3E%3C/svg%3E");
  }

  &:checked:hover + .check-icon {
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='11' height='11' rx='1.5' fill='%2355BB06' stroke='%2355BB06'/%3E%3Cpath d='M3 6H9' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");
  }
}
</style>