<template>
  <div class="popup-container"
       :class="{'popup-showing active': state == 1, 'popup-showing popup-hidden': state == 2}">
    <div class="popup ios confirm">
      <div class="popup-head">
        <div class="popup-title" v-text="title"></div>
        <div class="popup-sub-title">
            <!--<textarea v-model="content"/>-->
            <Input type="textarea" v-model="content"/>
        </div>
        <div class="liner-bottom"></div>
      </div>

      <div class="popup-buttons">
        <button class="button button-block button-positive button-outline button-cancel"
          @click="onCancel()"
          v-html="getCancelHtml()"
        >
        </button>
        <button class="button button-block button-positive button-outline button-ok"
          @click="onOk()"
          v-html="okText"
        >
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import mixin from './mixin';

  const extend = (target, source) => {
    for (let key in source) {
      target[key] = source[key];
    }

    return target;
  };

  export default {
    mixins: [mixin],

    data() {
      return {
        title: '提示',
        content: '',
        okText: '确定',
        cancelText: '取消',
        okTheme: 'assertive',
        state: 0 // 0: hidden, 1: showing, 2: active
      }
    },

    methods: {
      show(options) {
          let vm = this;
        extend(vm, options)

        vm.$backdrop.show();
        vm.state = 1;

        vm.promise = new Promise((resolve, reject) => {
          vm.$on('ConfirmOkEvent', () => {
              vm.hide();
              let result = {'state': true, 'content': vm.content};
              resolve(result);
          });

          vm.$on('ConfirmCancelEvent', () => {
              vm.hide();
              let result = {'state': false, 'content': vm.content};
              resolve(result);
          });
        });

        document.body.classList.add('popup-open');

        return vm.promise;
      },

      onOk() {
        this.$emit('ConfirmOkEvent');
      },

      onCancel() {
        this.$emit('ConfirmCancelEvent');
      },

      getCancelHtml() {
        return this.cancelText + '<div class="liner-right"></div>';
      }
    }
  }
</script>
