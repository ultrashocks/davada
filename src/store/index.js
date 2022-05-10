import Vue from 'vue';
import Vuex from 'vuex';

// import { pay } from '@/store/pay.module';
// import { my } from '@/store/my.module';
import { auth } from '@/store/auth.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    // my,
    // pay,
    auth,
  },
});
