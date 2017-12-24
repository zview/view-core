import Vue from 'vue';
import {createElement} from '../utils';

import Alert from './alert';
import AlertIOS from './alertios';
import Confirm from './confirm';
import ConfirmIOS from './confirmios';

let _dialog;

class ViewDialog {

  show(type, options) {
    let rnd = Math.random().toString(36).substring(3, 6);
    let marker = `von-${type}-${rnd}`;
    createElement(marker);
    let selector = `[${marker}]`;

    _dialog = new Vue(
      type == 'alert' ? (options.theme == 'ios' ? AlertIOS : Alert) :
        (options.theme == 'ios' ? ConfirmIOS : Confirm)
    ).$mount(selector);

    _dialog.$el.setAttribute('view-dialog', '');

    return _dialog.show(options);
  }

  alert(options) {
    return this.show('alert', options);
  }

  confirm(options) {
    return this.show('confirm', options);
  }

  hide() {
    if (_dialog) _dialog.hide();
  }
}

export default new ViewDialog();
