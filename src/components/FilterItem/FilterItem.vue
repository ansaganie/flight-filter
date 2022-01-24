<template>
  <fieldset class="filter-item">
    <div class="filter-header">
      <legend class="filter-title">{{ filtersInfo.label }}</legend>
      <button class="clear-btn" @click.prevent="handleFilterClearClick">
        <svg width="20" height="20" class="filter-clear-icon">
          <use xlink:href="#icon-clear-filter" />
        </svg>
      </button>
    </div>
    <div class="filter-footer">
      <label
        v-for="(value, key) in filtersInfo.filters"
        :key="key"
        class="check-label"
      >
        <input
          :id="key"
          class="visually-hidden checkbox"
          type="checkbox"
          @change="handleFilterChange"
          :checked="selectedFilters.includes(key)"
        />
        <span class="check-icon" />
        {{ value }}
      </label>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'FilterItem',
  props: {
    filtersInfo: {
      type: Object,
      required: true,
    },
    selectedFilters: {
      type: Array,
      required: true,
    },
    onFilterChange: {
      type: Function,
      required: true,
    },
    onFilterClearClick: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleFilterChange(evt) {
      this.onFilterChange(evt.target.id);
    },
    handleFilterClearClick() {
      this.onFilterClearClick(this.filtersInfo.type);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';
@import '../../styles/mixins.scss';

.filter-item {
  margin: 0;
  min-width: 240px;
  width: 100%;

  display: flex;
  flex-direction: column;
  position: relative;
  padding: $padding-optimum;

  border: none;
  background: #f5f5f5;
  background-size: 50%;
  border-radius: 4px;

  overflow: hidden;
}

.filter-footer {
  min-width: 240px;
  max-height: 240px;
  margin: -$padding-optimum;
  padding: $padding-optimum;

  overflow-y: auto;
  overflow-x: hidden;
}

.filter-title {
  @include clear-m0p0;
  display: block;

  float: left;
  margin-bottom: $padding-optimum;

  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: $deep-dark;
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
  min-width: 100%;
  min-height: 32px;

  display: flex;
  align-items: center;
  position: relative;

  margin: 0 -12px;
  padding-left: 36px;

  cursor: pointer;

  &:hover {
    background-color: #ebebeb;
  }
}

.check-icon {
  @include wh(12px, 12px);
  @include icon-background;

  position: absolute;
  margin-left: -24px;

  background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='11' height='11' rx='1.5' fill='white' stroke='%23B9B9B9'/%3E%3C/svg%3E%0A");
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
