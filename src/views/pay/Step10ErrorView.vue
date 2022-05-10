<template>
  <div class="wrap">
    <div class="pay step10">
      <Header class="non-border orange" path="/pay/step9"></Header>
      <div class="content-wrap top-header bottom-btn2">
        <div class="icon-wrap">
          <i class="icon-error"></i>
        </div>
        <div class="content-info__t mb16" v-html="infoData.result"></div>
        <div class="content-info__b mb16">{{ infoData.resultInfo }}</div>
        <div class="result-account__info">{{ infoData.accountInfo }}</div>
        <div class="bottom-btns">
          <template v-if="state === 'pay'">
            <button class="btn-m blue" @click="onReTry()">
              출금 다시 신청하기
            </button>
          </template>
          <template v-else>
            <button class="btn-m blue" @click="onReAccount()">
              계좌번호 다시 입력하기
            </button>
          </template>
          <button class="btn-m" @click="onHome()">홈으로</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { metaUrl } from '@/utils/meta';
import Header from '@/components/common/Header.vue';
import { deletePayStep } from '@/utils/step';
export default {
  metaInfo: metaUrl['/pay/orange'],
  components: { Header },
  data() {
    return {
      state: 'pay',
      infoData: {
        result: '결제가<br>취소됐습니다.',
        resultInfo: '본인부담금이 아래 계좌에서 출금되지 못했습니다.',
        accountInfo: '신한은행 3349-34355-224 예금주 쿠팡',
      },
    };
  },
  methods: {
    onReAccount() {
      this.$router.push('/pay/step3');
    },
    onReTry() {
      this.$router.push('/pay/step1');
    },
    onHome() {
      deletePayStep();
      this.$router.push('/pay');
    },
  },
  mounted() {},
};
</script>

<style></style>
