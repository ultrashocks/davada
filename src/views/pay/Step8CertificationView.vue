<template>
  <div class="wrap">
    <div class="pay step8">
      <Header class="non-border blue" path="/pay/step7"></Header>
      <div class="content-wrap top-header">
        <div class="icon-wrap">
          <i class="icon-question"></i>
        </div>
        <div class="content-info__t mb16">
          공동인증서로<br />
          인증을 해주세요.
        </div>
        <div class="content-info__b mb56">
          이 절차만 완료하면 모든 과정이<br />
          종료됩니다.
        </div>
        <div class="social-signin">
          <button class="btn-m kakao mb8" @click="onNext">
            카카오 인증서로 인증
          </button>
          <button class="btn-m naver" @click="onNext">
            네이버 인증서로 인증
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { metaUrl } from '@/utils/meta';
import Header from '@/components/common/Header.vue';
import { setPayStep } from '@/utils/step';
export default {
  metaInfo: metaUrl['/pay/blue'],
  components: { Header },
  data() {
    return {};
  },
  methods: {
    async onNext() {
      setPayStep(9);
      await this.$router.push('/pay/step9').catch(() => {});
    },
  },
};
</script>

<style></style>
