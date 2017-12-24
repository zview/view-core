import Vue from 'vue';
import Backdrop from './backdrop';
import {createElement} from '../utils';

class ViewBackdrop {

  constructor() {
    this._vm = undefined;
  }

  show(allowTouchMove) {
    if (!document.querySelector('[view-backdrop]')) {
      createElement('view-backdrop')
    }

    this._vm = new Vue(Backdrop);
    this._vm.$mount('[view-backdrop]');

    setTimeout(() => {
      this._vm.show(allowTouchMove);
    });

    return new Promise((resolve) => {
      setTimeout(() => {
        this._vm.show(allowTouchMove);
        resolve();
      })
    });
  }

  hide(allowTouchMove) {
    if (this._vm) {
      this._vm.hide(allowTouchMove).then(() => {
        this._vm.$destroy();
      });
    }
  }

  getState() {
    return this._vm ? this._vm.getState() : 0;
  }

}

export default new ViewBackdrop();
