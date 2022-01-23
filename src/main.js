import { createApp } from 'vue';
import App from './App.vue';
import 'normalize.css';
import store from './store';
import router from './router';

const app = createApp(App);

app.use(store).use(router).mount('#app');
