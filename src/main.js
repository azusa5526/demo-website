import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/js/bootstrap.bundle.js';
import animated from 'animate.css';
import WOW from 'wow.js';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.config.productionTip = false;

Vue.use(animated);
new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 50,
  mobile: true,
  live: true,
  resetAnimation: true
}).init();
Vue.component('Loading', Loading);

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');

router.afterEach(() => {
  window.scrollTo(0, 0);
});
