import Vue from 'vue';
import {createElement, timeout} from '../utils';
import CascadePanel from './cascadepanel.vue';

class ViewCascadePanel {

  constructor() {
    this._vm = undefined
  }

  show(title, options) {
    createElement('view-cascade-panel');
    this._vm = new Vue(CascadePanel).$mount('[view-cascade-panel]');
    return timeout(50).then(() => {
      return this._vm.show(title, options);
    });
  }

  hide() {
    this._vm.hide();
  }

}

export default new ViewCascadePanel();
