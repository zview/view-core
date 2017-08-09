import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//
import Router from './router';
import Store from './store';
import App from './app';

//
import './asset/docs.scss';

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
