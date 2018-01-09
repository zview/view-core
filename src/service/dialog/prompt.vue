<template>
  <div class="popup-container"
       :class="{'popup-showing active': state == 1, 'popup-showing popup-hidden': state == 2}">
    <div class="popup">
      <div class="popup-head">
        <div class="popup-title" v-html="title"></div>
      </div>

      <div class="popup-body">
          <!--<textarea v-model="content"/>-->
          <Input type="textarea" v-model="content"/>
      </div>

      <div class="popup-buttons">
        <button
          class="button button-block"
          :class="{
            'button-assertive': cancelTheme == 'assertive',
            'button-positive': cancelTheme == 'positive',
            'button-balanced': cancelTheme == 'balanced',
            'button-energized': cancelTheme == 'energized',
            'button-calm': cancelTheme == 'calm',
            'button-royal': cancelTheme == 'royal',
            'button-stable': cancelTheme == 'stable',
            'button-light': cancelTheme == 'light',
            'button-dark': cancelTheme == 'dark',
            'button-default': cancelTheme == 'default'
          }"
          @click="onCancel()"
          v-text="cancelText"
        >
        </button>

        <button
          class="button button-block"
          :class="{
            'button-assertive': okTheme == 'assertive',
            'button-positive': okTheme == 'positive',
            'button-balanced': okTheme == 'balanced',
            'button-energized': okTheme == 'energized',
            'button-calm': okTheme == 'calm',
            'button-royal': okTheme == 'royal',
            'button-stable': okTheme == 'stable',
            'button-light': okTheme == 'light',
            'button-dark': okTheme == 'dark',
            'button-default': okTheme == 'default',
          }"
          @click="onOk()"
          v-text="okText"
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
        okTheme: 'assertive',
        cancelText: '取消',
        cancelTheme: 'default',
        state: 0 // 0: hidden, 1: showing, 2: active
      }
    },

    methods: {
      show(options) {
          let vm = this;
        extend(vm, options);

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
          let vm = this;
          vm.$emit('ConfirmOkEvent');
      },

      onCancel() {
          let vm = this;
          vm.$emit('ConfirmCancelEvent');
      }
    }
  }
</script>
