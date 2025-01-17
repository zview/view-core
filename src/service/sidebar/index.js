import Vue from 'vue';
import Sidebar from './sidebar';

let _sidebars = {};

class ViewSidebar {

  fromTemplateUrl(url, options) {
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then((response) => {
          return response.data;
        })
        .then((template) => {
          resolve(this.fromTemplate(template, options));
        })
    });
  }

  fromTemplate(template, options) {
    return this._init(template, options);
  }

  _init(template, options) {
    let refId = (options && options.refId) ? options.refId : Math.random().toString(36).substr(3, 6);
    let position = (options && options.position) ? options.position : 'left';
    let wrapper = document.createElement('div');
    wrapper.setAttribute('view-sidebar-container', '');
    wrapper.setAttribute('view-sidebar-container-' + refId, '');
    document.querySelector('[view-app]').appendChild(wrapper);
    wrapper.innerHTML = `<sidebar position='${position}' ref='${refId}'>${template}</sidebar>`;

    let vm = new Vue({
      components: {
        Sidebar
      },
      el: `[view-sidebar-container-${refId}]`
    })
    _sidebars[refId] = vm.$refs[refId];

    vm.$refs[refId].setWrapperSelector(`[view-sidebar-container-${refId}]`);

    return vm.$refs[refId];
  }

  delegate(refId) {
    return _sidebars[refId];
  }

  destroy() {
    for (let refId in _sidebars) {
      if (_sidebars[refId]) {
        _sidebars[refId].$destroy();
        _sidebars[refId] = undefined;
      }

      let wrapper = document.querySelector(`[view-sidebar-container-${refId}]`);
      wrapper.innerHTML = '';
      document.querySelector('[view-app]').removeChild(wrapper);
    }
    _sidebars = {};
  }
}

export default new ViewSidebar()
