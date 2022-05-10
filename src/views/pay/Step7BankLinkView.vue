<template>
  <div class="wrap">
    <div class="pay step7">
      <Header class="non-border blue" path="/pay/step6"></Header>
      <div class="content-wrap top-header bottom-btn">
        <div class="icon-wrap">
          <i class="icon-question"></i>
        </div>
        <div class="content-info__t mb16">
          아래 등록된 계좌에서<br />
          진행합니다.
        </div>
        <div class="content-info__b mb56">
          설정한 금액이 등록한 결제계좌에서<br />
          매달 출금됩니다.
        </div>
        <div class="inputs">
          <div class="input-box">
            <label>등록된 계좌</label>
            <div class="value">{{ accounts }}</div>
          </div>
        </div>
        <div class="bottom-btns">
          <button class="btn-m step" :disabled="nextDisabled" @click="onNext()">
            다음
            <span class="next">공동인증서 인증</span>
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
    return {
      nextDisabled: false,
      accounts: '카카오뱅크 3333••••••468',
    };
  },
  methods: {
    async onNext() {
      setPayStep(8);
      await this.$router.push('/pay/step8').catch(() => {});
    },
  },
};
</script>

<style></style>
