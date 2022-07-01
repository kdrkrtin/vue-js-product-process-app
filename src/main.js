import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { store } from './store/store';
import './assets/style.css';
import axios from 'axios';
//apikey: AIzaSyCyPOKW6hACaEn214FMGn07HpPdr4zXGPY
export const reqAxios = axios.create({
    baseURL: 'https://ship-66-default-rtdb.firebaseio.com/'
});

const app = createApp(App);
app.config.globalProperties.$filters = {
    currency(value) {
        return `${value.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })} TL`
    }
}
app.use(router);
app.use(store);
app.mount('#app');
