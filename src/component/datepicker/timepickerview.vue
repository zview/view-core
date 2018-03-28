<template>
  <div view-picker class="view-datepicker" :class="{'active': state == 1}">
    <div class="dp-header">
      <button class="button button-clear button-stable" @click="cancel()">
        <slot name="cancel">
          取消
        </slot>
      </button>

      <button class="button button-clear button-balanced btn-confirm" @click="confirm()">
        <slot name="confirm">
          确定
        </slot>
      </button>
    </div>

    <div class="dp-body">
      <!-- hours -->
      <scroller class="dp-list dp-years"
        ref="h_scroller"
        :animate-duration="1"
        width="34%"
      >
        <div class="dp-item" v-for="(h, index) in hours" v-text="h"></div>
      </scroller>

      <!-- minutes -->
      <scroller class="dp-list dp-months"
        ref="m_scroller"
        :animate-duration="1"
        width="33%"
      >
        <div class="dp-item" v-for="(m, index) in minutes" v-text="m"></div>
      </scroller>

      <!-- seconds -->
      <scroller class="dp-list dp-dates"
        ref="s_scroller"
        :animate-duration="1"
        width="33%"
      >
        <div class="dp-item" v-for="(s, index) in seconds" v-text="s"></div>
      </scroller>

    </div>
  </div>
</template>
<script>
  import channel from './timechannel';

  const defaultHours = () => [
      '','','',
      '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11',
      '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23',
      '','',''
  ];

  const defaultMinutes = () => [
      '','','',
      '00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
      '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
      '20', '21', '22', '23', '24', '25', '26', '27', '28', '29',
      '30', '31', '32', '33', '34', '35', '36', '37', '38', '39',
      '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
      '50', '51', '52', '53', '54', '55', '56', '57', '58', '59',
      '','',''
  ];

  const defaultSeconds = () => [
      '','','',
      '00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
      '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
      '20', '21', '22', '23', '24', '25', '26', '27', '28', '29',
      '30', '31', '32', '33', '34', '35', '36', '37', '38', '39',
      '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
      '50', '51', '52', '53', '54', '55', '56', '57', '58', '59',
      '','',''
  ];

  const item_height = 34;

  const setOpacity = (el, index) => {
    let dp_items = el.querySelectorAll('.dp-item');

    for (let i = 0; i < dp_items.length; i++) {
      let e = dp_items[i];
      if (i == index) {
        e.style.opacity = '1';
      } else if (Math.abs(i - index) == 1) {
        e.style.opacity = '0.4';
      } else if (Math.abs(i - index) == 2) {
        e.style.opacity = '0.2';
      } else if (Math.abs(i - index) >= 3) {
        e.style.opacity = '0.1';
      }
    }
  };

  export default {
    data() {
      return {
        state: 0, // 0: hide, 1: show
        value: '',

        hours: defaultHours(),
        minutes: defaultMinutes(),
        seconds: defaultSeconds(),

        timer: undefined
      }
    },

    mounted() {
      this.timer = setInterval(() => {
        this.updateYmd();
      }, 50);

      channel.$on('PickerCancelEvent', () => {
        this.hide();
      });
    },

    beforeDestroy() {
      if (this.timer)
        clearInterval(this.timer);
    },

    destroyed() {
      document.body.removeChild(document.querySelector('[view-picker]'));
    },

    methods: {
      show() {
          let vm = this;
        vm.$backdrop.show().then(() => {
          let backdrop = document.querySelector('[view-backdrop]');
          backdrop.onclick = () => {
            channel.$emit('PickerCancelEvent');
            backdrop.onclick = null;
          }
        });

        setTimeout(() => {
          this.state = 1;

          this.$refs.h_scroller.resize();
          this.$refs.m_scroller.resize();
          this.$refs.s_scroller.resize();
          this.setYmd();
        });
      },

      hide() {
          let vm = this;
        vm.state = 0;
        vm.$backdrop.hide();
        setTimeout(() => {
          vm.$destroy();
        }, 300);
      },

      confirm() {
        channel.$emit('PickerOkEvent', this.value);
      },

      cancel() {
        channel.$emit('PickerCancelEvent');
      },

      updateYmd() {
        let hPosition = this.$refs.h_scroller.getPosition();
        let hIndex = parseInt(hPosition.top / item_height) + 3;
        let mPosition = this.$refs.m_scroller.getPosition();
        let mIndex = parseInt(mPosition.top / item_height) + 3;
        let sPosition = this.$refs.s_scroller.getPosition();
        let sIndex = parseInt(sPosition.top / item_height) + 3;
        setOpacity(this.$refs.h_scroller.$el, hIndex);
        setOpacity(this.$refs.m_scroller.$el, mIndex);
        setOpacity(this.$refs.s_scroller.$el, sIndex);

        this.value = this.hours[hIndex] + ':' + this.minutes[mIndex] + ':' + this.seconds[sIndex];
      },

      setYmd() {
        let ymd = this.value.split(':');
        let hIndex = this.hours.indexOf(ymd[0]);
        let mIndex = this.minutes.indexOf(ymd[1]);
        let sIndex = this.seconds.indexOf(ymd[2]);
        this.$refs.h_scroller.scrollTo(0, item_height * (hIndex - 3));
        this.$refs.m_scroller.scrollTo(0, item_height * (mIndex - 3));
        this.$refs.s_scroller.scrollTo(0, item_height * (sIndex - 3));
      }
    }
  }
</script>
