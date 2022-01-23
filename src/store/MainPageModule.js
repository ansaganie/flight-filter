import data from '../assets/data/results.json';

export const MainPageModuleName = 'main-page-module';

export const MainPageFields = {
  Flights: 'flights',
};

const MainPageModule = {
  name: MainPageModuleName,
  state: () => ({
    [MainPageFields.Flights]: data.flights,
  }),
  getters: {
    getFlights(state) {
      return state.flights;
    },
  },
  mutations: {},
  actions: {},
  namespaced: true,
};

export default MainPageModule;
