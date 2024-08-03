// main.js
import i18n from './i18n';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS (includes Popper.js)
import './assets/main.css'; // Ensure to import global styles after Bootstrap
import './assets/main.css'; // Ensure to import global styles after Bootstrap
import FontAwesomeIcon from '../src/fonteawesome'; // Import FontAwesome configuration

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon); 
app.use(router);
app.use(Toast);
app.use(i18n);
app.mount('#app');