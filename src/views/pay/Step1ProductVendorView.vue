<template>
  <div class="wrap">
    <div class="pay step1">
      <Header class="non-border blue" path="/pay"></Header>
      <div class="content-wrap top-header bottom-btn">
        <div class="icon-wrap">
          <i class="icon-question"></i>
        </div>
        <div class="content-info__t mb56">
          구매하신<br />
          상품 판매처를<br />
          선택해주세요.
        </div>
        <validation-observer ref="validator">
          <div class="inputs">
            <validation-provider
              rules="requiredMsg"
              name="상품 판매처를 선택하세요."
            >
              <select v-model="selection" class="mb8">
                <option value="">상품 판매처 선택</option>
                <option value="1" v-for="data in datas" :key="data.value">
                  {{ data.label }}
                </option>
              </select>
            </validation-provider>
            <validation-provider
              rules="requiredMsg"
              name="상품금액을 입력해주세요."
            >
              <Inputs
                v-model="priceNumber"
                type="price"
                placeholder="상품금액을 숫자로만 입력해주세요"
              />
            </validation-provider>
          </div>
          <div class="price-info">
            현재 가능 한도는 <strong>200,000원</strong> 이에요.<span
              class="icon-question"
            ></span>
          </div>
        </validation-observer>
        <div class="bottom-btns">
          <button class="btn-m step" @click="onNext" :disabled="btnDisabled">
            다음
            <span class="next">상품 정보이미지 업로드</span>
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
        { label: '상품 판매처1', value: 1 },
        { label: '상품 판매처2', value: 2 },
        { label: '상품 판매처3', value: 3 },
      ],
      priceNumber: '',

      btnDisabled: true,
    };
  },
  methods: {
    async onNext() {
      let validResult = await this.$vxForm.isValid(this.$refs.validator);
      if (validResult === false) return;
      setPayStep(2);
      await this.$router.push('/pay/step2').catch(() => {});
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
    priceNumber() {
      if (this.priceNumber === '0') {
        this.priceNumber = '';
        setTimeout(() => {
          this.checkStepBtn();
        }, 100);
        return;
      }
      this.checkStepBtn();
    },
  },
};
</script>

<style></style>
