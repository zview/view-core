//
import './style/index.scss';

//
import Vue from 'vue';

//
import Icon from './component/icon/index.vue';

//
export default {
  install: function (Vue, options) {

    //
    Vue.component('Icon', Icon);

  }
};
