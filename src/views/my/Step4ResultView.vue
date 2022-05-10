<template>
  <div class="wrap">
    <div class="mypage">
      <Header icon="close" class="non-border"></Header>
      <div class="content-wrap top-header bottom-btn">
        <div class="account-result__icon" :class="resultState"></div>
        <div class="content-info__t">{{ message[resultState].title }}</div>
        <div class="account-result__info">
          {{ message[resultState].info }}
        </div>
      </div>
      <div class="bottom-btns">
        <button class="btn-m black" @click="onConfirm">확인</button>
      </div>
    </div>
  </div>
</template>

<script>
import { metaUrl } from '@/utils/meta';
import Header from '@/components/common/Header.vue';
import { deleteMyStep } from '@/utils/step';
export default {
  metaInfo: metaUrl['/my'],
  components: { Header },
  data() {
    return {
      resultState: 'success', //실패시 fail
      message: {
        success: {
          title: '결제 계좌 등록 성공.',
          info: '혹시 은행에서 문자가 가더라도 놀라지 마세요. 고객님의 결제 요청시에만 출금되시 안심하셔도 됩니다.',
        },
        fail: {
          title: '결제 계좌 등록 실패.',
          info: '결제 계좌 등록에 실패했습니다. 오류메세지가 출력됩니다.',
        },
      },
    };
  },
  methods: {
    async onConfirm() {
      deleteMyStep();
      await this.$router.push('/my/').catch(() => {});
    },
  },
};
</script>

<style></style>
