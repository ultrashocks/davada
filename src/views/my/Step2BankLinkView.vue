<template>
  <div class="wrap">
    <div class="mypage">
      <Header>{{ bankName }}<span v-if="bankUse">은행</span> 연결</Header>
      <div class="content-wrap top-header bottom-btn">
        <div class="bank-link">
          <h3>
            {{ bankName }}<span v-if="bankUse">은행</span> 계좌번호를
            입력해주세요.
          </h3>
          <validation-observer ref="validator">
            <validation-provider rules="required|min:11" name="계좌번호">
              <Inputs
                v-model="accountNumber"
                placeholder="'-'없이 계좌번호 입력"
              />
            </validation-provider>
          </validation-observer>
        </div>
      </div>
      <div class="bottom-btns">
        <button class="btn-m step" @click="onNext()" :disabled="btnDisabled">
          다음 <span class="next">인증</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { metaUrl } from '@/utils/meta';
import Header from '@/components/common/Header.vue';
import Inputs from '@/components/ui/Inputs.vue';
import { setMyStep } from '@/utils/step';
export default {
  metaInfo: metaUrl['/my'],
  components: { Header, Inputs },
  data() {
    return {
      bankName: '',
      bankUse: false,
      accountNumber: '',
      btnDisabled: true,
    };
  },
  methods: {
    async onNext() {
      let validResult = await this.$vxForm.isValid(this.$refs.validator);
      if (validResult === false) return;
      setMyStep(3);
      await this.$router.push('/my/accountLink/Step3').catch(() => {});
    },
    async checkStepBtn() {
      let validResult = await this.$vxForm.isValid(this.$refs.validator, false);
      validResult ? (this.btnDisabled = false) : (this.btnDisabled = true);
    },
  },
  created() {
    //console.log(this.$store.state.pay.bank);
    const { name, bank } = this.$store.getters['pay/getBank'];
    this.bankName = name;
    this.bankUse = bank;
  },
  watch: {
    accountNumber() {
      this.checkStepBtn();
    },
  },
};
</script>

<style></style>
