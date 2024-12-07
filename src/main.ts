import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './Router';
import App from './App.vue';
import './Styles/_variables.sass';
import './style.sass';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount('#app');