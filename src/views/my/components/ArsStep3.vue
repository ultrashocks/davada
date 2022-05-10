<template>
  <div class="content-wrap top-header bottom-btn">
    <div class="content-info__t">
      인증이 끝나면<br />
      인증완료 버튼을 눌러주세요
    </div>
    <div class="accordion-wrap">
      <div class="accordion-box">
        <Accordion>
          <template v-slot:title> ARS 인증 전화가 오지 않나요? </template>
          <template v-slot:content>
            ARS 인증 전화가 오지 않나요?ARS 인증 전화가 오지 않나요?ARS 인증
            전화가 오지 않나요?ARS 인증 전화가 오지 않나요?
          </template>
        </Accordion>
        <Accordion>
          <template v-slot:title>
            <span>ARS 인증 완료가 되지 않나요?</span>
          </template>
          <template v-slot:content>
            ARS 인증 완료가 되지 않나요?ARS 인증 완료가 되지 않나요?ARS 인증
            완료가 되지 않나요?ARS 인증 완료가 되지 않나요?ARS 인증 완료가 되지
            않나요?
          </template>
        </Accordion>
      </div>
    </div>
    <div class="bottom-btns">
      <button class="btn-m mint" @click="onArsComplete()">ARS 인증 완료</button>
    </div>
  </div>
</template>

<script>
import bus from '@/utils/bus.js';
import Accordion from '@/components/ui/Accordion.vue';
import { setMyStep } from '@/utils/step';
export default {
  components: { Accordion },
  data() {
    return {
      bankName: '',
      bankUse: false,
      accountNumber: '',
    };
  },
  methods: {
    onArsComplete() {
      bus.$emit('startLoader', {
        msg: 'ARS 인증 완료 진행중...',
        info: '최대 1분을 넘기지 않습니다.',
      });
      //임시로 setTimout 처리
      setTimeout(() => {
        this.onNext();
      }, 2500);
    },
    async onNext() {
      setMyStep(4);
      await this.$router.push('/my/accountLink/Step4').catch(() => {});
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
