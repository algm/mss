
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

import Vue from 'vue';
import NotFound from './templates/NotFound.vue';
import VueMaterial from 'vue-material';
import routes from './config/routes.js';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import store from './app/state/store.js';

window.Vue = Vue;
Vue.use(VueMaterial);
Vue.use(VueAxios, window.axios);
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.axios.defaults.baseURL = '/api/';

const vxstore = new Vuex.Store(store);

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

Vue.router = router;

const app = new Vue({
  el: '#app',
  store: vxstore,
  router: router,
  created() {
    let token = this.$route.query.token || localStorage.getItem('id_token');

    if (token) {
      vxstore.commit('authenticate', {
        token: token
      });

      if (this.$route.query.token) {
        this.$router.push('/');
      }
    }
  }
});
