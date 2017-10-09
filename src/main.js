// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import elementUI from 'element-ui';
import '../theme/index.css';
import App from './App';
import router from './router';
import store from './store';
import DomBinder from './plugin/DomBinder';

Vue.config.productionTip = false;

Vue.use(elementUI);
Vue.use(DomBinder);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
