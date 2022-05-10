<template>
  <div class="wrap">
    <div class="mypage">
      <Header>ARS 전화 인증</Header>
      <template v-if="step === 1">
        <ArsStep1 @ars="onNextArs(2)" />
      </template>
      <template v-else-if="step === 2">
        <ArsStep2 @confirm="onNextArs(3)" />
      </template>
      <template v-else>
        <ArsStep3 />
      </template>
    </div>
  </div>
</template>

<script>
import { metaUrl } from '@/utils/meta';
import Header from '@/components/common/Header.vue';
import ArsStep1 from '@/views/my/components/ArsStep1.vue';
import ArsStep2 from '@/views/my/components/ArsStep2.vue';
import ArsStep3 from '@/views/my/components/ArsStep3.vue';

export default {
  metaInfo: metaUrl['/my'],
  components: { Header, ArsStep1, ArsStep2, ArsStep3 },
  data() {
    return {
      step: 1,
    };
  },
  methods: {
    onNextArs(num) {
      this.step = num;
    },
  },
};
</script>

<style></style>
