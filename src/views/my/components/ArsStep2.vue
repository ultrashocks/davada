<template>
  <div class="content-wrap top-header bottom-btn">
    <div class="bank-link">
      <h3>
        전화를 받고 안내에 따라<br />
        숫자를 입력해주세요.
      </h3>
      <div class="ars-info">
        통화 시작시 ARS 안내를 끝까지 듣고 “인증번호를 입력해주세요" 라고 할 때
        고객님의 생일 4자리를 입력해주세요.
      </div>
      <div class="ars-number">{{ accountNumber }}</div>
      <div class="ars-guide">
        <div class="row">
          <strong>안내</strong> ARS 음성 안내를 들을 수 없는 상황이라면 ARS 인증
          전화를 받고 약 10초 후 위 두자리 숫자를 입력해주세요.
        </div>
      </div>
    </div>
    <div class="bottom-btns">
      <button class="btn-m blue" @click="onCall()">ARS 인증 전화 받기</button>
    </div>
  </div>
</template>

<script>
import bus from '@/utils/bus.js';
export default {
  data() {
    return {
      bankName: '',
      bankUse: false,
      accountNumber: '0902',
    };
  },
  methods: {
    onCall() {
      bus.$emit('startLoader', {
        msg: 'ARS 인증 확인중 입니다.<br>잠시만 기다려 주세요.',
        info: '최대 1분을 넘기지 않습니다.',
      });
      //임시로 setTimout 처리
      setTimeout(() => {
        this.$emit('confirm');
      }, 2500);
    },
  },
  created() {
    const { name, bank } = this.$store.getters['pay/getBank'];
    this.bankName = name;
    this.bankUse = bank;
  },
  destroyed() {
    bus.$emit('endLoader');
  },
};
</script>

<style></style>
