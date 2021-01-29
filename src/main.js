import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/js/bootstrap.bundle.js';
import animated from 'animate.css';
import WOW from 'wow.js';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import i18n from './common/plugins/vue-i18n';

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
  i18n,
  render: (h) => h(App)
}).$mount('#app');

router.afterEach(() => {
  window.scrollTo(0, 0);
});
