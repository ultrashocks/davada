<template>
  <!-- <transition name="fade-loading" mode="out-in">
    <div class="pop-preloading" v-if="loading" ref="preloading"></div>
  </transition> -->
  <transition name="fade-view">
    <div class="dialog-wrapper" v-if="view">
      <div class="dialog-box">
        <div class="pre-loader">
          <loading-icon :width="24" :height="24" />
          <div class="msg-txt" v-html="setMsg"></div>
          <div class="info-txt">{{ setInfo }}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import LoadingIcon from './LoadingIcon';
export default {
  components: { LoadingIcon },
  props: {
    view: {
      type: Boolean,
      default: false,
    },
    msg: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    setMsg() {
      return this.msg.msg;
    },
    setInfo() {
      return this.msg.info;
    },
  },
};
</script>

<style></style>
