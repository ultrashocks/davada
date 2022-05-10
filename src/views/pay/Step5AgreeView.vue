<template>
  <div class="wrap">
    <div class="pay step5">
      <Header class="non-border blue" path="/pay/step4"></Header>
      <div class="content-wrap top-header bottom-btn">
        <div class="icon-wrap">
          <i class="icon-question"></i>
        </div>
        <div class="content-info__t mb56">
          계약에<br />
          동의가 필요합니다.
        </div>
        <div class="agree-result">
          <div class="result-price">
            <div class="title">대출 신청금액</div>
            <div class="price">180,000원</div>
          </div>
          <div class="result-list">
            <ul>
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
                  <label>본인 부담금</label>
                  <span class="icon"></span>
                </div>
                <div class="row-r">
                  <span class="value">60,000원</span>
                  <div class="value-info">총 결제금액의 60%</div>
                </div>
              </li>
              <li>
                <div class="row-l">
                  <label>납부일</label>
                </div>
                <div class="row-r">
                  <span class="value">매월 15일</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="bottom-btns">
          <button class="btn-m step" @click="onNext()">
            다음
            <span class="next">결제계좌 등록</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { metaUrl } from '@/utils/meta';
import Header from '@/components/common/Header.vue';
import { setPayStep } from '@/utils/step';
export default {
  metaInfo: metaUrl['/pay/blue'],
  components: { Header },
  data() {
    return {};
  },
  methods: {
    async onNext() {
      setPayStep(6);
      await this.$router.push('/pay/step6').catch(() => {});
    },
  },
};
</script>

<style></style>
