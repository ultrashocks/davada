<template>
  <input
    :type="type === 'price' ? 'tel' : type"
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
    comma(val) {
      return String(val).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    },
    uncomma(str) {
      return String(str).replace(/[^\d]+/g, '');
    },
    bindNumber($event) {
      var value = $event.target.value;
      if (this.type === 'tel') {
        if (value.length >= 11) {
          value = value.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
        }
      }
      if (this.type === 'price') {
        // value = this.comma(this.uncomma(value));
        var currency = +value.replace(/[^\d]/g, '').toString();
        value = Intl.NumberFormat().format(currency);
      }

      this.$emit('input', value);
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
