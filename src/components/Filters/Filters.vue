<template>
  <form class="catalog-filters">
    <h3 class="visually-hidden">Фильтры для списка перелетов</h3>
    <filter-item
      class="filter-item"
      :filtersInfo="tariffFilters"
      :selectedFilters="selectedTariffs"
      :onFilterChange="handleTariffFiltersChange"
      :onFilterClearClick="handleFilterClearClick"
    />
    <filter-item
      class="filter-item"
      :filtersInfo="airlineFilters"
      :selectedFilters="selectedAirlines"
      :onFilterChange="handleAirlineFiltersChange"
      :onFilterClearClick="handleFilterClearClick"
    />
    <dashed-button @click="handleAllFiltersClearClick">Сбросить все фильтры</dashed-button>
  </form>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import FilterItem from '../FilterItem/FilterItem.vue';
import DashedButton from '../shared/DashedButton/DashedButton.vue';
import TariffFilterTypes from '../../GlobalConstants';
import { MainPageStates, MainPageMutations, MainPageModuleName } from '../../store/MainPageModule';

const { SelectedTariffs, SelectedAirlines } = MainPageStates;
const { UpdateSelectedFilters, ClearSelectedFilters } = MainPageMutations;

export default {
  name: 'Filters',
  components: { FilterItem, DashedButton },
  data() {
    return {
      tariffFilters: {
        label: 'Опции тарифа',
        type: SelectedTariffs,
        filters: {
          [TariffFilterTypes.Direct]: 'Только прямые',
          [TariffFilterTypes.WithBaggage]: 'Только с багажом',
          [TariffFilterTypes.Refundable]: 'Только возвратные',
        },
      },
      airlineFilters: {
        label: 'Авиакомпании',
        type: SelectedAirlines,
        filters: {
          KC: 'Air Astana',
          HY: 'Uzbekistan Airways',
          EK: 'Emirates',
          HR: 'HR',
          FZ: 'Flydubai',
          S7: 'S7 Airlines',
          LH: 'Lufthansa',
          BT: 'Air Baltic',
          CZ: 'China Southern Airlines',
          SU: 'Aeroflot',
          B2: 'Belavia',
          DV: 'SCAT Airlines',
          TK: 'Turkish Airlines',
        },
      },
    };
  },
  methods: {
    ...mapMutations(MainPageModuleName, {
      updateSelectedFilters: UpdateSelectedFilters,
      clearSelectedFilters: ClearSelectedFilters,
    }),
    handleTariffFiltersChange(filterValue) {
      this.updateSelectedFilters({
        data: {
          filterName: SelectedTariffs,
          filterValue,
        },
      });
    },
    handleAirlineFiltersChange(filterValue) {
      this.updateSelectedFilters({
        data: {
          filterName: SelectedAirlines,
          filterValue,
        },
      });
    },
    handleFilterClearClick(filterName) {
      this.clearSelectedFilters({
        data: {
          filterName,
        },
      });
    },
    handleAllFiltersClearClick() {
      this.clearSelectedFilters({
        data: {
          filterName: SelectedTariffs,
        },
      });
      this.clearSelectedFilters({
        data: {
          filterName: SelectedAirlines,
        },
      });
    },
  },
  computed: {
    ...mapState(MainPageModuleName, {
      selectedTariffs: SelectedTariffs,
      selectedAirlines: SelectedAirlines,
    }),
  },
};
</script>

<style lang="scss">
@import '../../styles/variables.scss';

.catalog-filters {
  .filter-item {
    margin-bottom: $padding-optimum;
  }
}
</style>
