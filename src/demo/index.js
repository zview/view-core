//--------------------------------------------------------------------------
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//--------------------------------------------------------------------------

const locales = {
    'zh-CN': {
        'demo': {
            'vendor': '小竹',
        }
    },
    'zh-TW': {
        'demo': {
            'vendor': '小築',
        }
    },
    'en-US': {
        'demo': {
            'vendor': 'zuv',
        }
    },
};

import View from '../index.js';
const view_config = {
    debug: true,
    lang: 'zh-CN',
    locales: locales,
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
import CSess from '../util/common-sess'

//
import './asset/demo.scss';

//--------------------------------------------------------------------------

//
const nextDirection = (direction) => {
    let el = document.querySelector('[view-app]');
    // console.log('nextDirection', direction, el);
    if (el) el.setAttribute('transition-direction', direction);
};

const setTitle = (title) => {
    let el = document.querySelector('.view-navbar > .title > span');
    // console.log('setTitle', title, el);
    if (el) el.textContent = title;
};

const pageScrollTop = (scrollTop) => {
    let el = document.querySelector('[view-app]');
    // console.log('pageScrollTop', scrollTop, el);

    let layout = '.view-page .view-page-content';
    if (scrollTop) {
        const pages = el && el.querySelectorAll(layout);
        const content = pages[pages.length - 1];
        if (content) {
            content.scrollTop = scrollTop;
        }
    }
    else {
        return el && el.querySelector(layout)
            ? el.querySelector(layout).scrollTop
            : 0;
    }
};

//--------------------------------------------------------------------------

let isrouting = false;   //通过Router切换页面(还是浏览器前进后退切换页面)
let isbacking = false;   //是否是后退操作

const beforeEach = (toRoute, fromRoute, next) => {
    const to = toRoute.path;
    const from = fromRoute.path;
    const scrollTop = pageScrollTop();
    console.log('beforeEach', from, to, scrollTop, isbacking);

    if(toRoute.meta && toRoute.meta.title) {
        setTitle(toRoute.meta.title);
    }

    if(!isbacking) {
        CSess.set(from, scrollTop);
    }

    next();
};

const afterEach = (toRoute, fromRoute) => {
    const to = toRoute.path;
    const from = fromRoute.path;
    let scrollTop = CSess.get(to);
    console.log('afterEach', from, to, scrollTop, isbacking);

    if(!isrouting) {
        return;
    }

    if(!scrollTop || !isbacking) {
        scrollTop = 1;
    }
    Vue.nextTick(() => {
        pageScrollTop(scrollTop);
    });

    isrouting = false;
};

// 状态条
const beforeEachProgress = (toRoute, fromRoute, next) => {
    console.log('beforeEachProgress');

    next();
};

const afterEachProgress = (toRoute, fromRoute) => {
    console.log('afterEachProgress');

};

//--------------------------------------------------------------------------

// 路由配置
const RouterConfig = {
    // mode: 'history',
    routes: Router
};
const router = new VueRouter(RouterConfig);

//--------------------------------------------------------------------------

// register global guards
router.beforeEach(beforeEach);
router.afterEach(afterEach);

// register progress bar
router.beforeEach(beforeEachProgress);
router.afterEach(afterEachProgress);

//--------------------------------------------------------------------------

// let pushMethod = state.__push_method__ = options.pushMethod || defaultConfig.pushMethod
let pushMethod = 'push';
router['_' + pushMethod] = router[pushMethod];

//
router.forward = router[pushMethod] = (target) => {
    nextDirection('forward');
    isbacking = false;
    isrouting = true;
    console.log('forward');

    setTimeout(() => {
        // router.go(1);
        router['_' + pushMethod](target);
    });
};

router.back = (target) => {
    nextDirection('back');
    isbacking = true;
    isrouting = true;
    console.log('back');

    setTimeout(() => {
        router.go(-1);
        // router['_' + pushMethod](target);
    });
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
