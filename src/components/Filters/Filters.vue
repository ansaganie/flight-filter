<template>
  <form class="catalog-filters">
    <h3 class="visually-hidden">Фильтры для списка перелетов</h3>
    <filter-item class="filter-item" :filtersInfo="tariffFilters" />
    <filter-item class="filter-item" :filtersInfo="airlineFilters" />
    <dashed-button>Сбросить все фильтры</dashed-button>
  </form>
</template>

<script>
import FilterItem from "../FilterItem/FilterItem.vue";
import DashedButton from "../../shared/DashedButton/DashedButton.vue";

export default {
  name: "Filters",
  components: { FilterItem, DashedButton },
  data() {
    return {
      tariffFilters: {
        label: "Опции тарифа",
        filters: {
          DIRECT: "Только прямые",
          LUGGAGE: "Только с багажом",
          REFUND: "Только возвратные",
        },
      },
      airlineFilters: {
        label: "Авиакомпании",
        filters: {
          KC: "Air Astana",
          HY: "Uzbekistan Airways",
          EK: "Emirates",
          HR: "HR",
          FZ: "Flydubai",
          S7: "S7 Airlines",
          LH: "Lufthansa",
          BT: "Air Baltic",
          CZ: "China Southern Airlines",
          SU: "Aeroflot",
          B2: "Belavia",
          DV: "SCAT Airlines",
          TK: "Turkish Airlines",
        },
      },
    };
  },
};
</script>

<style lang="scss">
@import "../../styles/variables.scss";

.catalog-filters {
  .filter-item {
    margin-bottom: $padding-optimum;
  }
}
</style>