import data from '../assets/data/results.json';
import TariffFilters from '../utils/TariffFilters';

export const MainPageModuleName = 'main-page-module';

export const MainPageStates = {
  Flights: 'flights',
  SelectedTariffs: 'selected_tariffs',
  SelectedAirlines: 'selected_airline',
};

export const MainPageMutations = {
  UpdateSelectedFilters: 'update_selected_filters',
  ClearSelectedFilters: 'clear_selected_filter',
};

export const MainPageGetters = {
  FilteredFlights: 'filtered_flights',
};

const MainPageModule = {
  name: MainPageModuleName,
  state() {
    return {
      [MainPageStates.Flights]: data.flights,
      [MainPageStates.SelectedTariffs]: new Set(),
      [MainPageStates.SelectedAirlines]: new Set(),
    };
  },
  getters: {
    [MainPageGetters.FilteredFlights](state) {
      const tariffFilters = state[MainPageStates.SelectedTariffs];
      const airlineFilters = state[MainPageStates.SelectedAirlines];

      return state[MainPageStates.Flights].filter((flight) => {
        let result = true;

        if (tariffFilters.size > 0) {
          tariffFilters.forEach((filter) => {
            if (!TariffFilters[filter](flight)) {
              result = false;
            }
          });
        }

        if (airlineFilters.size > 0) {
          airlineFilters.forEach((filter) => {
            if (flight.itineraries[0][0].carrier !== filter) {
              result = false;
            }
          });
        }

        return result;
      });
    },
  },
  mutations: {
    [MainPageMutations.UpdateSelectedFilters](state, payload) {
      const current = state[payload.data.filterName];
      const value = payload.data.filterValue;

      if (current.has(value)) {
        current.delete(value);
      } else {
        current.add(value);
      }
    },
    [MainPageMutations.ClearSelectedFilters](state, payload) {
      state[payload.data.filterName].clear();
    },
  },
  namespaced: true,
};

export default MainPageModule;
