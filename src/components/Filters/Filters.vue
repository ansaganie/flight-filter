<template>
  <form>
    <filter-item class="filter-item" :filtersInfo="tariffFilters" />
    <filter-item class="filter-item" :filtersInfo="airlineFilters" />
  </form>
</template>

<script>
import FilterItem from "../FilterItem/FilterItem.vue";

export default {
  name: "Filters",
  components: { FilterItem },
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
          ALL: "Все",
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
.filter-item:not(:last-child) {
  margin-bottom: $padding-optimum;
}
</style>