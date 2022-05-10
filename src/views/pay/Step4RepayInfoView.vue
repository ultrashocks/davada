<template>
  <div class="wrap">
    <div class="pay step4">
      <Header class="non-border blue" path="/pay/step3"></Header>
      <div class="content-wrap top-header bottom-btn">
        <div class="icon-wrap">
          <i class="icon-question"></i>
        </div>
        <div class="content-info__t mb56">
          상환 정보를<br />
          설정해주세요.
        </div>
        <validation-observer ref="validator">
          <div class="inputs">
            <validation-provider
              rules="requiredMsg"
              name="본인 부담금을 입력해주세요."
            >
              <Inputs
                v-model="priceNumber"
                type="price"
                placeholder="본인 부담금을 숫자로만 입력해주세요"
              />
            </validation-provider>
          </div>
          <div class="price-info gray mb32">
            최소 필요 본인 부담금은 <strong>120,000원</strong> 이에요.<span
              class="icon-question"
            ></span>
          </div>
          <div class="cont-title">할부개월 설정</div>
          <div class="installment-select mb16">
            <ul>
              <li v-for="item in installments" :key="item.label">
                <span
                  class="btn-select"
                  :class="{ on: item.value === selectInstallment }"
                  @click="onInstallment(item.value)"
                  >{{ item.label }}</span
                >
              </li>
            </ul>
          </div>
          <div class="cont-title">납부일 설정</div>
          <validation-provider rules="requiredMsg" name="납부일을 선택해주세요">
            <select v-model="selectPayment" class="mb8">
              <option value="">납부일을 선택하세요.</option>
              <option
                :value="payment.value"
                v-for="payment in payments"
                :key="payment.value"
              >
                {{ payment.label }}
              </option>
            </select>
            <div class="payment-info mb32">
              기존 납부일로 인해 새로운 납부일 설정이 불가능합니다.<br />
              결제를 완료하고 마이>납부일 에서 변경이 가능합니다.
            </div>
          </validation-provider>
        </validation-observer>
        <div class="divide-row"></div>
        <h3 class="installment-title">
          3개월 할부시 매달 <strong>34,509</strong>원 상환
        </h3>
        <div class="installment-info">총 이자 6,000원</div>
        <div class="swiper-wrap">
          <swiper ref="swiper" class="swiper" :options="swiperOption">
            <swiper-slide v-for="(repay, index) in repays" :key="repay.id">
              <div class="info">
                <vc-donut :size="40" :thickness="10" :sections="repay.sections"
                  >{{ index + 1 }}/{{ selectInstallment }}</vc-donut
                >
                <div class="price">{{ repay.price }}</div>
                <div class="price-t">원금 {{ repay.principal }}원</div>
                <div class="price-b">이자 {{ repay.interest }}원</div>
                <div class="date">{{ repay.date }}</div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="bottom-btns">
          <button class="btn-m step" @click="onNext()" :disabled="btnDisabled">
            다음
            <span class="next">계약 동의</span>
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
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { setPayStep } from '@/utils/step';
export default {
  metaInfo: metaUrl['/pay/blue'],
  components: { Header, Inputs, swiper, swiperSlide },
  data() {
    return {
      //번호
      priceNumber: '',
      //할부개월 설정
      selectInstallment: 1,
      installments: [
        { label: 1, value: 1 },
        { label: 2, value: 2 },
        { label: 3, value: 3 },
        { label: 4, value: 4 },
        { label: 5, value: 5 },
        { label: 6, value: 6 },
      ],
      //납부일 설정
      selectPayment: '',
      payments: [
        { label: '매월 15일', value: 15 },
        { label: '매월 25일', value: 25 },
        { label: '매월 30일', value: 30 },
      ],
      //할부시 상환
      id: 0,
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 4,
      },
      repays: [],
      btnDisabled: true,
    };
  },
  methods: {
    onInstallment(value) {
      this.selectInstallment = value;
      this.setPrincipalInterest();
      this.swiper.slideTo(0, 0, false);
    },
    setPrincipalInterest() {
      this.repays = [];
      for (let i = 0; i < this.selectInstallment; i++) {
        this.repays.push({
          id: this.id++,
          price: '34,509',
          principal: '32,509',
          interest: '2,000',
          date: '2월 15일, 화',
          sections: [{ value: (100 / this.selectInstallment) * (i + 1) }],
        });
      }
    },
    async onNext() {
      let validResult = await this.$vxForm.isValid(this.$refs.validator);
      if (validResult === false) return;
      setPayStep(5);
      await this.$router.push('/pay/step5').catch(() => {});
    },
    async checkStepBtn() {
      let validResult = await this.$vxForm.isValid(this.$refs.validator, false);
      validResult ? (this.btnDisabled = false) : (this.btnDisabled = true);
    },
  },
  computed: {
    swiper() {
      return this.$refs.swiper.swiper;
    },
  },
  mounted() {
    this.setPrincipalInterest();
  },
  watch: {
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
    selectPayment() {
      this.checkStepBtn();
    },
  },
};
</script>

<style></style>
