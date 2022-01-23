import { createApp } from 'vue';
import App from './App.vue';
import 'normalize.css';
import store from './store';

const app = createApp(App);

app.use(store).mount('#app');
