import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/js/bootstrap.bundle.js';
import animated from 'animate.css';
import WOW from 'wow.js';

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

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');

router.afterEach(() => {
  window.scrollTo(0, 0);
});
