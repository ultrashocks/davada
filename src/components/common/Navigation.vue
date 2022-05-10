<template>
  <nav class="navi">
    <router-link
      v-for="navi in navis"
      :key="navi.icon"
      :to="navi.link"
      class="btn-nav"
      :class="navi.icon"
      ><i class="icon"></i>{{ navi.name }}</router-link
    >
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navis: [
        { name: '홈', link: '/', icon: 'home' },
        { name: '결제', link: '/pay', icon: 'pay' },
        { name: '포인트', link: '/point', icon: 'point' },
        { name: '마이', link: '/my', icon: 'my' },
      ],
    };
  },
};
</script>

<style></style>
