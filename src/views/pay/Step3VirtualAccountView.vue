<template>
  <div class="wrap">
    <div class="pay step3">
      <Header class="non-border blue" path="/pay/step2"></Header>
      <div class="content-wrap top-header bottom-btn">
        <div class="icon-wrap">
          <i class="icon-question"></i>
        </div>
        <div class="content-info__t mb56">
          쿠팡에서 받은<br />
          가상 계좌번호를<br />
          입력해주세요.
        </div>
        <validation-observer ref="validator">
          <div class="inputs">
            <validation-provider rules="requiredMsg" name="은행을 선택해주세요">
              <select v-model="selection" class="mb8">
                <option value="">은행을 선택해주세요</option>
                <option
                  :value="data.value"
                  v-for="data in datas"
                  :key="data.value"
                >
                  {{ data.label }}
                </option>
              </select>
            </validation-provider>
            <validation-provider rules="required|min:11" name="계좌번호">
              <Inputs
                v-model="accountNumber"
                type="number"
                placeholder="'-'없이 계좌번호를 입력해주세요"
                class="mb8"
              />
            </validation-provider>
            <validation-provider
              rules="requiredMsg"
              name="예금주명을 입력해주세요"
            >
              <Inputs
                v-model="userName"
                type="text"
                placeholder="예금주명을 입력해주세요"
              />
            </validation-provider>
          </div>
        </validation-observer>
        <div class="bottom-btns">
          <button class="btn-m step" @click="onNext()" :disabled="btnDisabled">
            다음
            <span class="next">본인부담금 입력</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { metaUrl } from '@/utils/meta';
import Header from '@/components/common/Header.vue';
import Inputs from '@/components/ui/Inputs.vue';
import { setPayStep } from '@/utils/step';
export default {
  metaInfo: metaUrl['/pay/blue'],
  components: { Header, Inputs },
  data() {
    return {
      selection: '',
      datas: [
        { label: '우리은행', value: 1 },
        { label: '국민은행', value: 2 },
        { label: '기업은행', value: 3 },
      ],
      accountNumber: '',
      userName: '',
      btnDisabled: true,
    };
  },
  methods: {
    async onNext() {
      let validResult = await this.$vxForm.isValid(this.$refs.validator);
      if (validResult === false) return;
      setPayStep(4);
      await this.$router.push('/pay/step4').catch(() => {});
    },
    async checkStepBtn() {
      let validResult = await this.$vxForm.isValid(this.$refs.validator, false);
      validResult ? (this.btnDisabled = false) : (this.btnDisabled = true);
    },
  },
  watch: {
    selection() {
      this.checkStepBtn();
    },
    accountNumber() {
      this.checkStepBtn();
    },
    userName() {
      this.checkStepBtn();
    },
  },
};
</script>

<style></style>
