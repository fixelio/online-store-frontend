import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import BackToTop from 'vue-backtotop';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

createApp(App)
	.use(router)
	.use(BackToTop)
	.mount('#app');