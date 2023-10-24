import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL
axios.interceptors.request.use(
  (config) => {
    // const localStorageGEtToken = JSON.parse(localStorage.getItem('token'))
    // config.headers["Accept-Language"] = i18n.global.locale.value;
    // config.headers['Authorization'] = `Bearer ${}`
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
