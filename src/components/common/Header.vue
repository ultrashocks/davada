<template>
  <div class="header">
    <div class="row">
      <button class="btn-back" :class="icon" @click="onBack"></button>
      <h2><slot></slot></h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'back',
    },
    path: {
      type: String,
      default: '',
    },
  },
  methods: {
    onBack() {
      if (this.path === '') {
        this.$router.go(-1);
      } else {
        this.$router.push(this.path);
      }
    },
  },
};
</script>
