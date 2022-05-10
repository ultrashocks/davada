<template>
  <div class="wrap">
    <div class="pay step9">
      <Header class="non-border yellow" path="/pay/step8"></Header>
      <div class="content-wrap top-header">
        <div class="icon-wrap">
          <i class="icon-question"></i>
        </div>
        <!-- 출금 -->
        <template v-if="stateView === 'withdraw'">
          <div class="content-info__t mb16">
            본인 부담금이<br />
            출금중입니다..
          </div>
          <div class="content-info__b mb16">
            출금금액 120,000원이 카카오뱅크 4563 계좌에서 크레페이 이름으로
            출금됩니다.
          </div>
        </template>

        <!-- 송금 -->
        <template v-else>
          <div class="content-info__t mb16">
            구매처 계좌로<br />
            구매 금액을<br />
            송금중입니다..
          </div>
          <div class="content-info__b mb16">
            송금금액 200,000원<br />
            신한은행 3349-34355-224 예금주 쿠팡
          </div>
          <div class="deposit-info">김진환 이름으로 송금됩니다.</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { metaUrl } from '@/utils/meta';
import Header from '@/components/common/Header.vue';
import { setPayStep } from '@/utils/step';
export default {
  metaInfo: metaUrl['/pay/yellow'],
  components: { Header },
  data() {
    return {
      stateView: 'deposit', //withdraw, deposit
    };
  },
  methods: {
    async onNext() {
      setPayStep(10);
      // await this.$router.push('/pay/step10/error').catch(() => {});
      await this.$router.push('/pay/step10/success').catch(() => {});
    },
  },
  mounted() {
    setTimeout(() => {
      this.onNext();
    }, 2000);
  },
};
</script>

<style></style>
