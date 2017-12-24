import Vue from 'vue';
import Loading from './loading';
import {createElement, timeout} from '../utils';

function ViewLoading() {
  let vm = undefined;

  function showToast(tips, duration) {
    if (vm && vm.getState() > 0) {
      vm.update({
        tips: tips
      });

      setTimeout(() => {
        vm.hide()
      }, duration || 1500);
      return;
    }

    createElement('view-loading');
    vm = new Vue(Loading).$mount('[view-loading]');
    vm.show({
      tips: tips
    });

    return timeout(duration || 1500).then(() => {
      return vm.hide();
    });
  }

  function showLoading(tips) {
    if (vm && vm.getState() > 0) {
      vm.update({
        tips: tips,
        showSpinner: true
      });
      return;
    }

    createElement('view-loading');
    vm = new Vue(Loading).$mount('[view-loading]');
    vm.show({
      tips: tips,
      showSpinner: true
    });
  }

  function hide() {
    if (vm) vm.hide();
  }

  function update(options) {
    vm.update(options);
  }

  return {
    showToast,
    showLoading,
    hide,
    update
  };
}

let loading = new ViewLoading();

export const $loading = {
  show: loading.showLoading,
  hide: loading.hide
};

export const $toast = {
  show: loading.showToast,
  hide: loading.hide
};
