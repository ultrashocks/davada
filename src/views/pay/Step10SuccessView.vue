<template>
  <div class="wrap">
    <div class="pay step5">
      <Header class="non-border green" path="/pay/step9"></Header>
      <div class="content-wrap top-header bottom-btn">
        <div class="icon-wrap">
          <i class="icon-question"></i>
        </div>
        <div class="content-info__t mb32">
          모든 절차가 정상적으로<br />
          완료됐습니다.
        </div>
        <div class="agree-result">
          <div class="result-price mb16">
            <div class="title">신청금액</div>
            <div class="price">33,000원</div>
          </div>
          <div class="swiper-wrap mb32">
            <swiper ref="swiper" class="swiper" :options="swiperOption">
              <swiper-slide v-for="(repay, index) in repays" :key="repay.id">
                <div class="info">
                  <vc-donut
                    :size="40"
                    :thickness="10"
                    :sections="repay.sections"
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
          <div class="result-title">이용 정보</div>
          <div class="result-list">
            <ul>
              <li>
                <div class="row-l">
                  <label>승인번호</label>
                  <span class="icon"></span>
                </div>
                <div class="row-r">
                  <span class="value">FIE39340df</span>
                </div>
              </li>
              <li>
                <div class="row-l">
                  <label>상품구매처</label>
                </div>
                <div class="row-r">
                  <span class="value">쿠팡</span>
                </div>
              </li>
              <li>
                <div class="row-l">
                  <label>총 대출 금액</label>
                  <span class="icon"></span>
                </div>
                <div class="row-r">
                  <span class="value">30,000원</span>
                </div>
              </li>
              <li>
                <div class="row-l">
                  <label>총 상환 예정 금액</label>
                  <span class="icon"></span>
                </div>
                <div class="row-r">
                  <span class="value">33,000원</span>
                </div>
              </li>
              <li>
                <div class="row-l">
                  <label>대출 금리</label>
                  <span class="icon"></span>
                </div>
                <div class="row-r">
                  <span class="value">10%, 3,000원</span>
                </div>
              </li>
              <li>
                <div class="row-l">
                  <label>할부</label>
                  <span class="icon"></span>
                </div>
                <div class="row-r">
                  <span class="value">4개월</span>
                </div>
              </li>
              <li>
                <div class="row-l">
                  <label>결제계좌</label>
                  <span class="icon"></span>
                </div>
                <div class="row-r">
                  <span class="value">카카오뱅크 456••••••456</span>
                </div>
              </li>
              <li>
                <div class="row-l">
                  <label>납부 방법</label>
                  <span class="icon"></span>
                </div>
                <div class="row-r">
                  <span class="value link">자동이체</span>
                </div>
              </li>
              <li>
                <div class="row-l">
                  <label>청구일</label>
                </div>
                <div class="row-r">
                  <span class="value">매월 15일</span>
                  <div class="value-info dday">
                    D -15, 다가오는 청구는 3월 15일 입니다.
                  </div>
                </div>
              </li>
              <li>
                <div class="row-l">
                  <label>이번청구금액</label>
                  <span class="icon"></span>
                </div>
                <div class="row-r">
                  <span class="value">11,000원</span>
                </div>
              </li>
              <li>
                <div class="row-l">
                  <label>본인 부담금</label>
                  <span class="icon"></span>
                </div>
                <div class="row-r">
                  <span class="value">60,000원</span>
                  <div class="value-info">총 결제금액의 60%</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="bottom-btns">
          <button class="btn-m blue" @click="onHome()">홈으로</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { metaUrl } from '@/utils/meta';
import Header from '@/components/common/Header.vue';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { deletePayStep } from '@/utils/step';
export default {
  metaInfo: metaUrl['/pay/green'],
  components: { Header, swiper, swiperSlide },
  data() {
    return {
      selectInstallment: 3,
      id: 0,
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 4,
      },
      repays: [],
    };
  },
  methods: {
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
    onHome() {
      deletePayStep();
      this.$router.push('/pay');
    },
  },
  mounted() {
    this.setPrincipalInterest();
  },
};
</script>

<style></style>
