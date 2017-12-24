<template>

  <div class="view-cascade-panel" :class="{'active': state == 1}">
    <div class="title" v-text="title"></div>

    <div class="list list-borderless options">
      <div class="item" v-for="(option, index) in options"
        @click="optionClicked(index)">
          <div class="liner-top"></div>
            <span v-text="option"></span>
          <div class="liner-bottom" v-if="index < options.length - 1"></div>
      </div>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue';

  const animation_duration = 300
  let bus = new Vue();

  export default {

    data() {
      return {
        title: '',
        options: [],

        state: 0, // 0: hide, 1: show
      }
    },

    destroyed() {
      document.body.removeChild(this.$el);
    },

    methods: {
      reset() {
        this.title = '';
        this.options = [];
        this.state = 0;
      },

      show(title, options) {
          let vm = this;
        vm.reset();
        Vue.nextTick(() => {
          vm.title = title;
          vm.options = options;
          this.state = 1;
        });

        vm.$backdrop.show(true).then(() => {
          let backdrop = document.querySelector('[view-backdrop]');
          backdrop.onclick = () => {
            bus.$emit('optionClickedEvent', {optionIndex: -1});
            backdrop.onclick = null;
          };
        });

        document.body.classList.add('popup-open');

        return new Promise((resolve) => {
          bus.$on('optionClickedEvent', (data) => {
            resolve(data.optionIndex)
            vm._hide()
          })
        })
      },

      _hide() {
          let vm = this;
        this.state = 0;
        vm.$backdrop.hide(true);

        document.body.classList.remove('popup-open');

        setTimeout(() => {
          vm.$destroy()
        }, animation_duration);
      },

      hide() {
        bus.$emit('optionClickedEvent', {optionIndex: -1});
      },

      optionClicked(index) {
        bus.$emit('optionClickedEvent', {optionIndex: index});
      },

      getState() {
        return this.state;
      }
    }
  }
</script>
