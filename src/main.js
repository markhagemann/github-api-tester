import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

import App from './App.vue';

window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(Buefy);

window.axios = axios;
window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
