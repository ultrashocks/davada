import '@/assets/sass/davada.scss';

import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import { store } from './store';

import './plugins/vxValidator';
import VxForm from './plugins/vxForm';
import VxHttp from './plugins/vxHttp';
import VxDialog from './plugins/vxDialog';

Vue.use(VxDialog);
Vue.use(VxForm);
Vue.use(VxHttp, { router });

Vue.config.productionTip = false;

const app = new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');

window.app = app;
