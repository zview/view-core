//可拖动

import { on, off } from '../util/common-listener';

let dragable = {

  bind: function(el, binding, vnode) {
    console.log('dragable', 'bind', el, binding);

    let dom = el;
    on(el, 'touchmove', function (e) {
      // console.log(e);
      let height = e.target.offsetHeight;
      let width = e.target.offsetWidth;
      let touch = e.changedTouches[0];
      let movex = touch.pageX;
      let movey = touch.pageY;
      // console.log('move', width, height, movex, movey);
      dom.style.position = 'fixed';
      dom.style.left = (movex - (width/2)) + 'px';
      dom.style.top = (movey - (height/2)) + 'px';
    });

  },
  inserted: function(el, binding, vnode) {
    console.log('dragable', 'inserted', el);
  },
  update: function(el, binding, vnode, oldVnode) {
    console.log('dragable', 'update', el);
  },
  componentUpdated: function(el, binding, vnode, oldVnode) {
    console.log('dragable', 'componentUpdated', el);
  },
  unbind: function(el, binding, vnode) {
    console.log('dragable', 'unbind', el, binding);
    off(el, 'touchmove', function (e) {
      console.log(e);
    });
  }
};

export default dragable;
