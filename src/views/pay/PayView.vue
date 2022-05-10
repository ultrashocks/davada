<template>
  <div class="wrap">
    <div class="pay">
      <div class="content-wrap bottom-btn bottom-nav">
        <div class="visual">
          <img src="../../assets/images/visual_pay.png" />
        </div>
        <div class="visual-info__t">
          <div class="info-t">새로운</div>
          <div class="info-b">후불결제의 시작.</div>
        </div>
        <div class="visual-info__b">
          전에 없던 새롭고 편리한 후불결제.<br />
          모든 온라인 결제를 후불로 진행할 수 있어요.
        </div>
        <div class="need-list">
          <div class="list-title">필요사항</div>
          <ul>
            <li>최대 6개월 할부 가능</li>
            <li>구입금액의 최대 60%, 20만원 이내</li>
            <li>구입처의 가상계좌</li>
          </ul>
        </div>
        <div class="request-list">
          <div class="list-title">자주 묻는 질문</div>
          <div class="accordion-wrap">
            <div class="accordion-box">
              <Accordion>
                <template v-slot:title>
                  구입처의 계좌번호가 무슨 뜻인가요?
                </template>
                <template v-slot:content>
                  구입처의 계좌번호가 설명을 설명을 설명을 설명을 설명을 설명을
                  설명을 설명을 설명을 설명을 설명을 설명을 설명을 설명을
                </template>
              </Accordion>
              <Accordion>
                <template v-slot:title>
                  <span>구입처의 계좌번호가 무슨 뜻인가요?</span>
                </template>
                <template v-slot:content>
                  구입처의 계좌번호가 설명을 설명을 설명을 설명을 설명을 설명을
                  설명을 설명을 설명을 설명을 설명을 설명을 설명을 설명을
                </template>
              </Accordion>
            </div>
          </div>
        </div>
        <div class="alim-list">
          <div class="alim-title">알아두세요.</div>
          <ul>
            <li>
              당첨자에게는 카카오뱅크와 연결된 카카오톡 계정으로 모바일 쿠폰을
              2022년 3월10일(목) ~ 11(금)에 개별 순차 발송해 드립니다.
            </li>
            <li>
              당첨 되었으나 카카오톡 계정 연결이 되지 않은 경우 경품이 지급될 수
              없습니다. 카카오톡 계정 연결 여부는 [전체>앱설정>카카오계정]에서
              확인하세요.
            </li>
            <li>
              본 이벤트는 정당하지 않은 방법으로 참여할 경우 혜택을 회수할 수
              있습니다.
            </li>
            <li>
              카카오뱅크는 안내한 혜택을 변경 또는 축소 없이 제공합니다. 단,
              그러한 노력에도 불구하고 부득이한 사유로 혜택 내용을 변경하게 되는
              경우 홈페이지/앱을 통한 안내 및 앱푸시 발송 등의 방법으로 즉시
              고지합니다.
            </li>
            <li>
              주택담보대출 및 이벤트에 대한 문의는 카카오뱅크 고객센터
              1599-3333으로 해주시기 바랍니다.
            </li>
          </ul>
        </div>
        <div class="bottom-btns">
          <button class="btn-m blue" @click="onNext">결제하기</button>
        </div>
      </div>
      <Navigation />
    </div>
  </div>
</template>

<script>
import { metaUrl } from '@/utils/meta';
import Accordion from '@/components/ui/Accordion.vue';
import Navigation from '@/components/common/Navigation.vue';
import { setPayStep } from '@/utils/step';
export default {
  components: { Accordion, Navigation },
  metaInfo: metaUrl['/pay'],
  methods: {
    async onNext() {
      setPayStep(1);

      // eslint-disable-next-line no-unused-vars
      await this.$router.push('/pay/step1').catch(e => {});
    },
  },
};
</script>

<style></style>
