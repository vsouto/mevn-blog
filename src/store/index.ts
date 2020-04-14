import Vue from 'vue';
import Vuex from 'vuex';
// @ts-ignore
import Mocks from './mocks';
// @ts-ignore
import blog from './blog';

Vue.use(Vuex);

if (process.env.VUE_APP_ENV === 'local' && process.env.VUE_APP_MOCKS === '1')
  Vue.use(Mocks)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    blog
  },
});
