const popup_enter_duration = 200;
const popup_leave_duration = 300;

const extend = (target, source) => {
  for (let key in source) {
    target[key] = source[key];
  }

  return target;
};

export default {

  destroyed() {
    console.log('Dialog destroyed.');
    let parent = this.$el.parentNode;
    parent.removeChild(this.$el);
  },

  methods: {
    show(options) {
        let vm = this;
      extend(vm, options);


      if (vm.$backdrop.getState() == 0) vm.$backdrop.show();

      vm.state = 1;

      vm.promise = new Promise((resolve, reject) => {
        vm.$on('AlertOkEvent', () => {
          // console.log('AlertOkEvent');
          vm.hide();
          resolve();
        });
      });

      document.body.classList.add('popup-open');

      return vm.promise;
    },

    hide() {
        let vm = this;
      if (document.querySelectorAll('[view-dialog]').length == 1)  { // 只剩最后一个dialog实例的时候，backdrop才隐藏
        vm.$backdrop.hide();
        document.body.classList.remove('popup-open');
      }

      vm.state = 2;

      setTimeout(() => {
        vm.state = 0;
        vm.$destroy();
      }, popup_leave_duration);
    },

    onOk() {
      this.$emit('AlertOkEvent');
    }
  }
}
