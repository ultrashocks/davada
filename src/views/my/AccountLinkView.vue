<template>
  <div class="wrap">
    <div class="mypage">
      <Header icon="close">결제 계좌 연결</Header>
      <div class="content-wrap top-header bottom-btn">
        <div class="content-info__t">
          계좌 연결을 위해<br />약관에 동의해주세요.
        </div>
        <div class="agree-list">
          <ul>
            <li>
              <button class="agree-item">
                오픈뱅킹 출금이체 동의
                <i class="icon"></i>
              </button>
            </li>
            <li>
              <button class="agree-item">
                금융결제원 개인정보 제공 동의
                <i class="icon"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom-btns">
        <button class="btn-m step" @click="onNext()">
          동의하고 계속하기
          <span class="next">은행선택</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { metaUrl } from '@/utils/meta';
import Header from '@/components/common/Header.vue';
import { setMyStep } from '@/utils/step';
export default {
  metaInfo: metaUrl['/my'],
  components: { Header },
  data() {
    return {};
  },
  methods: {
    async onNext() {
      setMyStep(1);
      await this.$router.push('/my/accountLink/Step1').catch(() => {});
    },
  },
};
</script>

<style></style>
