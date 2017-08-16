//下拉自动刷新

let pull_refresh = {

  bind: function(el, binding, vnode) {
    console.log('pull_refresh', 'bind', el, binding);
  },
  inserted: function(el, binding, vnode) {
    console.log('pull_refresh', 'inserted', el);
  },
  update: function(el, binding, vnode, oldVnode) {
    console.log('pull_refresh', 'update', el);
  },
  componentUpdated: function(el, binding, vnode, oldVnode) {
    console.log('pull_refresh', 'componentUpdated', el);
  },
  unbind: function(el, binding, vnode) {
    console.log('pull_refresh', 'unbind', el, binding);
  }
};

export default pull_refresh;
