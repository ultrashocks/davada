<template>
  <div class="wrap">
    <div class="main">
      <div class="content-wrap">
        <Grid v-model="gridData" ref="grid" @valueChange="onValueChange" />
      </div>
    </div>
  </div>
</template>

<script>
import Grid from '@/components/grid/Grid.vue';

class CustomTextEditor {
  constructor(props) {
    const el = document.createElement('input');
    const { maxLength } = props.columnInfo.editor.options;

    el.type = 'text';
    el.maxLength = maxLength;
    el.value = String(props.value);
    this.el = el;
  }

  getElement() {
    return this.el;
  }

  getValue() {
    return this.el.value;
  }

  mounted() {
    this.el.select();
  }
}

class CustomTextRender {
  constructor(props) {
    const el = document.createElement('input');
    const { grid, rowKey, columnInfo } = props;
    console.log('props=', props);
    const { maxLength } = props.columnInfo.renderer.options;

    el.type = 'text';
    el.maxLength = maxLength;
    // el.value = String(props.value);
    el.disabled = false;

    el.addEventListener('mousedown', ev => {
      ev.stopPropagation();
    });
    el.addEventListener('input', () => {
      grid.setValue(rowKey, columnInfo.name, el.value);
      console.log('change', rowKey, columnInfo.name, el.value);
    });

    this.el = el;

    this.render(props);
  }

  getElement() {
    return this.el;
  }

  getValue() {
    return this.el.value;
  }

  render(props) {
    this.el.value = String(props.value);
  }
}

class CustomRadioRender {
  constructor(props) {
    const el = document.createElement('input');
    const { rowKey } = props;
    console.log('props=', props);

    el.type = 'radio';
    el.name = 'radioSelect';
    el.value = rowKey;
    el.disabled = false;

    el.addEventListener('mousedown', ev => {
      ev.stopPropagation();
    });
    el.addEventListener('change', () => {
      // grid.setValue(rowKey, columnInfo.name, el.value);
      // console.log('change', rowKey, columnInfo.name, grid)
      console.log('change', rowKey);
      window.app.$children[0].$children[1].onTest();
    });

    this.el = el;

    this.render(props);
  }

  getElement() {
    return this.el;
  }

  getValue() {
    return this.el.value;
  }

  render(props) {
    this.el.value = String(props.value);
  }
}

/* class CustomSliderRenderer {
  constructor(props) {
    const el = document.createElement('input');
    const { min, max } = props.columnInfo.renderer.options;

    el.type = 'range';
    el.min = String(min);
    el.max = String(max);
    el.disabled = false;

    this.el = el;
    this.render(props);
  }

  getElement() {
    return this.el;
  }

  render(props) {
    this.el.value = String(props.value);
  }
}

class SliderRenderer {
  constructor(props) {
    const el = document.createElement('input');
    const { grid, rowKey, columnInfo } = props;

    el.type = 'range';

    el.addEventListener('mousedown', ev => {
      ev.stopPropagation();
    });

    el.addEventListener('change', () => {
      grid.setValue(rowKey, columnInfo.name, Number(el.value));
    });

    this.el = el;
    this.render(props);
  }

  getElement() {
    return this.el;
  }

  render(props) {
    this.el.value = String(props.value);
  }
} */

export default {
  components: {
    Grid,
  },
  data() {
    return {
      //Grid Data
      gridData: [],
    };
  },
  methods: {
    onTest() {
      console.log('테스트입니다.');
    },
    //그리드 Cell 값변경
    onValueChange(row) {
      console.log(row);
      const { rowKey } = row;
      console.log(rowKey, this.gridData[rowKey]);
      this.gridData[rowKey] = row;
    },

    attachData() {
      console.log('데이터');
      this.gridData = [
        {
          name: 'Beautiful Lies1',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop1',
        },
        {
          name: 'Beautiful Lies2',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop2',
        },
        {
          name: 'Beautiful Lies3',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop3',
        },
        {
          name: 'Beautiful Lies4',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop4',
        },
        {
          name: 'Beautiful Lies5',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop5',
        },
      ];
    },
  },
  mounted() {
    const columns = [
      {
        header: '',
        name: 'check',
        align: 'center',
        renderer: {
          type: CustomRadioRender,
          options: {
            checked: false,
          },
        },
      },
      {
        header: 'Name',
        name: 'name',
        align: 'center',
      },
      {
        header: 'Artist',
        name: 'artist',
        align: 'center',
        editor: {
          type: CustomTextEditor,
          options: {
            maxLength: 10,
          },
        },
      },
      {
        header: 'Release',
        name: 'release',
        // renderer: {
        //     type: SliderRenderer,
        //     options: {
        //       min: 1,
        //       max: 5
        //     }
        //   }
      },
      {
        header: 'Genre',
        name: 'genre',
        align: 'center',
        renderer: {
          type: CustomTextRender,
          options: {
            maxLength: 50,
          },
        },
      },
    ];
    this.$refs.grid.initGrid(columns);

    this.attachData();
  },
};
</script>

<style>
.content-wrap {
  height: 500px;
}
</style>
