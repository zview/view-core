import Vue from 'vue';
import {createElement} from '../utils';

import Alert from './alert';
import AlertIOS from './alertios';
import Confirm from './confirm';
import ConfirmIOS from './confirmios';
import Prompt from './prompt';
import PromptIOS from './promptios';

let _dialog;

class ViewDialog {

  show(type, options) {
    let rnd = Math.random().toString(36).substring(3, 6);
    let marker = `view-${type}-${rnd}`;
    createElement(marker);
    let selector = `[${marker}]`;

      /*let widget = (type == 'alert' ? (options.theme == 'ios' ? AlertIOS : Alert) :
          (options.theme == 'ios' ? ConfirmIOS : Confirm));*/

      let widget = options.theme == 'ios' ? AlertIOS : Alert;
      if(type == 'confirm') {
          widget = options.theme == 'ios' ? ConfirmIOS : Confirm;
      }
      else if(type == 'prompt') {
          widget = options.theme == 'ios' ? PromptIOS : Prompt;
      }

      _dialog = new Vue(widget).$mount(selector);
      _dialog.$el.setAttribute('view-dialog', '');

    return _dialog.show(options);
  }

  alert(options) {
    return this.show('alert', options);
  }

  confirm(options) {
    return this.show('confirm', options);
  }

    prompt(options) {
        return this.show('prompt', options);
    }

  hide() {
    if (_dialog) _dialog.hide();
  }
}

export default new ViewDialog();
