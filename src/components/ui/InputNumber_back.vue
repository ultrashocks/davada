<template>
  <input
    :type="type"
    @input="bindNumber"
    :value="value"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'number',
    },
  },
  methods: {
    bindNumber($event) {
      this.$emit('input', $event.target.value);
    },
  },
  watch: {
    value(val) {
      if (this.type === 'number') {
        const reg = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/;
        if (reg.exec(val) !== null) this.value = val.replace(/[^0-9]/g, '');
        if (isNaN(parseFloat(val))) this.value = '';
      }
    },
  },
};
</script>
