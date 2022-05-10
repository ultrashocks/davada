<template>
  <button
    class="btn-account__refresh"
    :class="{ active: rotateActive }"
    @click="onChangeAccount"
    ref="btnAccount"
  >
    <i class="icon"></i><slot></slot>
  </button>
</template>

<script>
export default {
  data() {
    return {
      accountLists: [],
      timer: null,
      rotateActive: false,
    };
  },
  methods: {
    onChangeAccount() {
      this.rotateActive = true;
      this.timer = setTimeout(() => {
        clearTimeout(this.timer);
        this.rotateActive = false;
      }, 900);

      this.$emit('changeAccount');
    },
  },
};
</script>

<style></style>
