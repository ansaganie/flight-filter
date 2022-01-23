<template>
  <div class="wrapper">
    <filters class="filters" />
    <flight-list class="flight-list" :flights="flights" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Filters from '../Filters/Filters.vue';
import FlightList from '../FlightList/FlightList.vue';
import { MainPageFields, MainPageModuleName } from '../../store/MainPageModule';

export default {
  name: 'FlightCatalog',
  components: { Filters, FlightList },
  computed: {
    ...mapState(MainPageModuleName, {
      flights: MainPageFields.Flights,
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
