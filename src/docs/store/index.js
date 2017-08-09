import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//
const DEBUG = process.env.NODE_ENV !== 'production';

// 状态机
const state = {

    //访问次数
    visit_count: 1,

    // 调试环境/正式环境(微信环境/APP环境)
    app_debug: DEBUG,

    // 错误信息
    app_error: '',

    // 用户
    user: {},
    //用户编码
    user_usercode: '', //'1003',
    //应用类型
    user_apptype: 0,

    //
    todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
    ],

};

// 修改状态
const mutations = {
    //访问计数增加
    visit_increment (state) {
        state.visit_count++;
    },
    visit_increment (state, n) {
        state.visit_count += n;
    },

    //
    error_switch (state, error) {
        state.app_error = error;
    },

    //
    user_switch (state, user) {
        state.user = user;
    },
    user_usercode_switch (state, usercode) {
        state.user_usercode = usercode;
    },
    user_apptype_switch (state, apptype) {
        state.user_apptype = apptype;
    },

};

//
const actions = {

};

//
const getters = {
    doneTodos: state => {
        return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
        return getters.doneTodos.length;
    },

    //
    debug: state => {
        return state.app_debug;
    },
    error: state => {
        return state.app_error;
    },

    //
    user: state => {
        return state.user;
    },
    usercode: state => {
        return state.user_usercode;
    },
    apptype: state => {
        return state.user_apptype;
    },

};

// 创建 store 实例
const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    modules: { },
    strict: DEBUG,
    plugins: []
});

export default store;
