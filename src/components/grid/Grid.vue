<template>
  <div id="grid"></div>
</template>

<script>
import Grid from 'tui-grid';

export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    scrollX: {
      type: Boolean,
      default: false,
    },
    scrollY: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      grid: null,
    };
  },
  methods: {
    initGrid(columns) {
      this.grid = new Grid({
        el: document.getElementById('grid'),
        scrollX: this.scrollX,
        scrollY: this.scrollY,
        columns,
        data: [],
      });

      //   this.grid.on('beforeChange', ev => {
      //     // console.log('before change:', ev);
      //   });
      this.grid.on('afterChange', evt => {
        console.log('after change:', evt.changes[0]);
        this.$emit('valueChange', evt.changes[0]);
      });

      Grid.applyTheme('striped');
    },
  },
  mounted() {
    // this.initGrid();
  },
  watch: {
    value() {
      this.grid.resetData(this.value);
    },
  },
};
</script>

<style></style>
