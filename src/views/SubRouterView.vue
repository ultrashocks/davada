<template>
  <div class="sub-router">
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <hr />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line no-unused-vars
  beforeRouteUpdate(to, from, next) {
    const toDepth = to.path.split('/').length;
    const fromDepth = from.path.split('/').length;
    console.log(toDepth, fromDepth);
    // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next();
  },
};
</script>
