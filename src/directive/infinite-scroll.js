//上拉自动加载

let infinite_scroll = {

  bind: function(el, binding, vnode) {
    console.log('infinite_scroll', 'bind', el, binding);
  },
  inserted: function(el, binding, vnode) {
    console.log('infinite_scroll', 'inserted', el);
  },
  update: function(el, binding, vnode, oldVnode) {
    console.log('infinite_scroll', 'update', el);
  },
  componentUpdated: function(el, binding, vnode, oldVnode) {
    console.log('infinite_scroll', 'componentUpdated', el);
  },
  unbind: function(el, binding, vnode) {
    console.log('infinite_scroll', 'unbind', el, binding);
  }
};

export default infinite_scroll;
