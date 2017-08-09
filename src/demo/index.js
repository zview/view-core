import Vue from 'vue';
import VueRouter from 'vue-router';
import View from '../index.js';

Vue.use(VueRouter);
Vue.use(View);

//
import Router from './router';
import Store from './store';
import App from './app';

//
import './asset/demo.scss';

// 路由配置
const RouterConfig = {
  // mode: 'history',
  routes: Router
};
const vrouter = new VueRouter(RouterConfig);


// 实例定义
new Vue({
  el: '#app',
  Store,
  router: vrouter,
  render: h => h(App)
});
