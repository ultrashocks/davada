<template>
  <div class="wrap">
    <div class="pay step6">
      <Header class="non-border blue" path="/pay/step5"></Header>
      <div class="content-wrap top-header bottom-btn">
        <div class="icon-wrap">
          <i class="icon-question"></i>
        </div>
        <div class="content-info__t mb16">
          결제계좌를<br />
          등록해주세요.
        </div>
        <div class="content-info__b mb56">
          설정한 금액이 등록한 결제계좌에서<br />
          매달 15일에 출금됩니다.
        </div>
        <button class="btn-m" @click="onNext">결제등록</button>
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
      nextDisabled: true,
    };
  },
  methods: {
    async onNext() {
      setPayStep(7);
      await this.$router.push('/pay/step7').catch(() => {});
    },
  },
};
</script>

<style></style>
