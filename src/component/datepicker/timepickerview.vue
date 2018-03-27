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
      <!-- years -->
      <scroller class="dp-list dp-years"
        ref="y_scroller"
        :animate-duration="1"
        width="34%"
      >
        <div class="dp-item" v-for="(y, index) in years" v-text="y"></div>
      </scroller>

      <!-- months -->
      <scroller class="dp-list dp-months"
        ref="m_scroller"
        :animate-duration="1"
        width="33%"
      >
        <div class="dp-item" v-for="(m, index) in months" v-text="m"></div>
      </scroller>

      <!-- dates -->
      <scroller class="dp-list dp-dates"
        ref="d_scroller"
        :animate-duration="1"
        width="33%"
      >
        <div class="dp-item" v-for="(d, index) in dates" v-text="d"></div>
      </scroller>

    </div>
  </div>
</template>
<script>
  import channel from './timechannel';

  const defaultYears = () => [
      '','','',
      '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11',
      '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23',
      '','',''
  ];

  const defaultMonths = () => [
      '','','',
      '00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
      '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
      '20', '21', '22', '23', '24', '25', '26', '27', '28', '29',
      '30', '31', '32', '33', '34', '35', '36', '37', '38', '39',
      '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
      '50', '51', '52', '53', '54', '55', '56', '57', '58', '59',
      '','',''
  ];

  const defaultDates = () => [
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

        years: defaultYears(),
        months: defaultMonths(),
        dates: defaultDates(),

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

          this.$refs.y_scroller.resize();
          this.$refs.m_scroller.resize();
          this.$refs.d_scroller.resize();
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
        let yPosition = this.$refs.y_scroller.getPosition();
        let yIndex = parseInt(yPosition.top / item_height) + 3;
        let mPosition = this.$refs.m_scroller.getPosition();
        let mIndex = parseInt(mPosition.top / item_height) + 3;
        let dPosition = this.$refs.d_scroller.getPosition();
        let dIndex = parseInt(dPosition.top / item_height) + 3;
        setOpacity(this.$refs.y_scroller.$el, yIndex);
        setOpacity(this.$refs.m_scroller.$el, mIndex);
        setOpacity(this.$refs.d_scroller.$el, dIndex);

        /*let yyyy = this.years[yIndex];
        let mm = this.months[mIndex];
        let dd = this.dates[dIndex];
        let newDates = defaultDates(yyyy, mm);

        if (newDates.length !== this.dates.length) {
          this.dates = newDates;
          setTimeout(this.$refs.d_scroller.resize, 0);
        }

        if (this.dates.indexOf(dd) === -1) {
          dIndex = this.dates.length - 4;
        }*/

        this.value = this.years[yIndex] + ':' + this.months[mIndex] + ':' + this.dates[dIndex];
      },

      setYmd() {
        let ymd = this.value.split(':');
        let yIndex = this.years.indexOf(ymd[0]);
        let mIndex = this.months.indexOf(ymd[1]);
        let dIndex = this.dates.indexOf(ymd[2]);
        this.$refs.y_scroller.scrollTo(0, item_height * (yIndex - 3));
        this.$refs.m_scroller.scrollTo(0, item_height * (mIndex - 3));
        this.$refs.d_scroller.scrollTo(0, item_height * (dIndex - 3));
      }
    }
  }
</script>
