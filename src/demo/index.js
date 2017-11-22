
//--------------------------------------------------------------------------
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//--------------------------------------------------------------------------

import View from '../index.js';
const view_config = {
    locale: 'zh_CN',
};
Vue.use(View, view_config);

//--------------------------------------------------------------------------

//FontAwesome
import 'font-awesome/css/font-awesome.min.css';

//--------------------------------------------------------------------------

//
import Router from './router';
import Store from './store';
import App from './app';

//
import './asset/demo.scss';

//--------------------------------------------------------------------------

//
const nextDirection = (direction) => {
  let el = document.querySelector('[view-app]');
  if (el) el.setAttribute('transition-direction', direction);
};

const setTitle = (title) => {
  let el = document.querySelector('[view-navbar="active"] > .title > span');
  if (el) el.textContent = title;
};

//--------------------------------------------------------------------------

// 路由配置
const RouterConfig = {
  // mode: 'history',
  routes: Router
};
const router = new VueRouter(RouterConfig);

//
let pushMethod = 'push';
router['_' + pushMethod] = router[pushMethod];

router.forward = router[pushMethod] = (target) => {
  nextDirection('forward');
  setTimeout(() => { router['_' + pushMethod](target) });
};

router.back = (target) => {
  nextDirection('back');
  setTimeout(() => { router['_' + pushMethod](target) });
};

//--------------------------------------------------------------------------

// 实例定义
new Vue({
  el: '#app',
  store: Store,
  router: router,
  render: h => h(App)
});

//--------------------------------------------------------------------------
