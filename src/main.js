import './style.css';
import 'element-plus/dist/index.css';
import './plugins/axios';
import 'vue-toastification/dist/index.css';

import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import Toast from 'vue-toastification';

import App from './App.vue';
import router from './router';

const pinia = createPinia()
const app = createApp(App);
pinia.use(piniaPluginPersistedstate)

app.use(router);
app.use(ElementPlus);
app.use(pinia)
app.use(Toast);
app.mount("#app");
