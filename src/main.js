import './style.css';
import 'element-plus/dist/index.css';
import './plugins/axios';
import 'vue-toastification/dist/index.css';

import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import Toast from 'vue-toastification';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(ElementPlus)
app.use(Toast);
app.mount("#app");
