import { createStore } from 'vuex';
import MainPageModule, { MainPageModuleName } from './MainPageModule';

const store = createStore({
  modules: {
    [MainPageModuleName]: MainPageModule,
  },
});

export default store;
