import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';

const app = createApp(App);

// Registra o Axios como plugin antes de montar o app
app.use(VueAxios, axios);

app.mount('#app');
