import data from '../assets/data/results.json';
import { TariffFilterTypes } from '../GlobalConstants';

export const MainPageModuleName = 'main-page-module';

export const MainPageStates = {
  Flights: 'flights',
  SelectedTariffs: 'selected_tariffs',
  SelectedAirlines: 'selected_airlines',
};

export const MainPageMutations = {
  UpdateSelectedFilters: 'update_selected_filters',
  ClearSelectedFilters: 'clear_selected_filters',
};

export const MainPageGetters = {
  FilteredFlights: 'filtered_flights',
};

const validateTariffFilters = (tariffs, tariffFilters) => {
  if (tariffFilters.length === 0) {
    return true;
  }

  let result = true;

  for (let i = 0; i < tariffFilters.length; i += 1) {
    if (!tariffs[tariffFilters[i]]) {
      result = false;

      break;
    }
  }

  return result;
};

const validateAirlineFilters = (airline, airlineFilters) => {
  if (airlineFilters.length === 0) {
    return true;
  }

  return airlineFilters.includes(airline);
};

const MainPageModule = {
  name: MainPageModuleName,
  state() {
    return {
      [MainPageStates.Flights]: data.flights,
      [MainPageStates.SelectedTariffs]: [],
      [MainPageStates.SelectedAirlines]: [],
    };
  },
  getters: {
    [MainPageGetters.FilteredFlights](state) {
      const tariffFilters = state[MainPageStates.SelectedTariffs];
      const airlineFilters = state[MainPageStates.SelectedAirlines];
      const flights = state[MainPageStates.Flights];

      if (tariffFilters.size === 0 && airlineFilters.size === 0) {
        return flights;
      }

      const result = [];

      flights.forEach((flight) => {
        const itineraries = flight.itineraries[0][0];
        const { carrier } = itineraries;
        const tariffs = {
          [TariffFilterTypes.Direct]: itineraries.stops === 0,
          [TariffFilterTypes.Refundable]: itineraries.refundable,
          [TariffFilterTypes.WithBaggage]: !flight.services['0PC'],
        };

        if (
          validateAirlineFilters(carrier, airlineFilters)
          && validateTariffFilters(tariffs, tariffFilters)
        ) {
          result.push(flight);
        }
      });

      return result;
    },
  },
  mutations: {
    [MainPageMutations.UpdateSelectedFilters](state, payload) {
      const current = state[payload.data.filterName];
      const value = payload.data.filterValue;

      if (current.includes(value)) {
        state[payload.data.filterName] = current.filter(el => el !== value);
      } else {
        current.push(value);
      }
    },
    [MainPageMutations.ClearSelectedFilters](state, payload) {
      state[payload.data.filterName] = [];
    },
  },
  namespaced: true,
};

export default MainPageModule;
