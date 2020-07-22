import Vue from 'vue';
import ToggleButton from 'vue-js-toggle-button';
import { VTooltip, VPopover, VClosePopover } from 'v-tooltip';

import App from './App.vue';
import './assets/styles/tailwind.css';

Vue.directive('tooltip', VTooltip);
Vue.directive('close-popover', VClosePopover);
Vue.component('v-popover', VPopover);
Vue.use(ToggleButton);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
