//增加角标

let badgable = {

  bind: function(el, binding, vnode) {
    console.log('badgable', 'bind', el, binding);
  },
  inserted: function(el, binding, vnode) {
    console.log('badgable', 'inserted', el);
  },
  update: function(el, binding, vnode, oldVnode) {
    console.log('badgable', 'update', el);
  },
  componentUpdated: function(el, binding, vnode, oldVnode) {
    console.log('badgable', 'componentUpdated', el);
  },
  unbind: function(el, binding, vnode) {
    console.log('badgable', 'unbind', el, binding);
  }
};

export default badgable;
