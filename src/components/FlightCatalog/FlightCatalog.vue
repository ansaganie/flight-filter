<template>
  <div class="wrapper">
    <filters class="filters" />
    <flight-list class="flight-list" :flights="flights" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Filters from '../Filters/Filters.vue';
import FlightList from '../FlightList/FlightList.vue';
import { MainPageGetters, MainPageModuleName } from '../../store/MainPageModule';

const { FilteredFlights } = MainPageGetters;

export default {
  name: 'FlightCatalog',
  components: { Filters, FlightList },
  computed: {
    ...mapGetters(MainPageModuleName, {
      flights: FilteredFlights,
    }),
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  gap: 20px;
}
</style>
