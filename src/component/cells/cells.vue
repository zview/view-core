<template>
  <div class="view-cells">
    <div class="row" v-for="(r, index) in rows">
      <div v-if="index != 0 || (outerBorder == true || outerBorder == 'true')" class="liner-top"></div>
      <div class="col" v-for="c in cols" @click="cellClicked(r*cols.length + c)">
        <div v-if="c" class="liner-left"></div>
        <div class="cell-container" v-html="items[r*cols.length + c]"></div>
      </div>
    </div>
    <div v-if="outerBorder == true || outerBorder == 'true'" class="liner-bottom"></div>
  </div>
</template>

<!--m-render-image-1-1-->

<script>
  const range = (n) => {
    let l = [];
    for (let i = 0; i < n; i++) l.push(i);
    return l;
  };

  export default {
    props: {
      row: {
        type: [Number, String],
        default: 3
      },
      col: {
        type: [Number, String],
        default: 3
      },
      items: {
        type: Array,
        required: true
      },
      onCellClick: Function,
      outerBorder: {
        type: [String, Boolean],
        default: true
      }
    },

    data() {
      return {
        rows: range(parseInt(this.row)),
        cols: range(parseInt(this.col))
      }
    },

    methods: {
      cellClicked(cellIndex) {
        // console.log(cellIndex)
        if (this.onCellClick) this.onCellClick(cellIndex);
      }
    }
  }
</script>
