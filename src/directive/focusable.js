let focusable = {

  bind: function(el, binding, vnode) {
    console.log('focusable', 'bind', el, binding);
  },
  inserted: function(el, binding, vnode) {
    console.log('focusable', 'inserted', el);
    el.focus();
  },
  update: function(el, binding, vnode, oldVnode) {
    console.log('focusable', 'update', el);
  },
  componentUpdated: function(el, binding, vnode, oldVnode) {
    console.log('focusable', 'componentUpdated', el);
  },
  unbind: function(el, binding, vnode) {
    console.log('focusable', 'unbind', el, binding);
  }
};

export default focusable;
