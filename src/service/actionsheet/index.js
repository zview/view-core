import Vue from 'vue';
import ActionSheet from './actionsheet';

import {createElement} from '../utils';

class VonicActionSheet {

  constructor() {
    this._vm = undefined;
  }

  show(option) {
    createElement('view-action-sheet');

    this._vm = new Vue(ActionSheet);
    this._vm.$mount('[view-action-sheet]');

    setTimeout(() => {
      this._vm.show(option);
    });
  }

  hide(buttonIndex) {
    this._vm.hide(buttonIndex);
  }

  getState() {
    return this._vm ? this._vm.getState() : 0;
  }

}

export default new VonicActionSheet()
