<template>
  <div class="wrap">
    <div class="mypage">
      <Header icon="close">은행 선택</Header>
      <div class="content-wrap top-header">
        <div class="bank-list">
          <ul>
            <li v-for="bank in banks" :key="bank.id">
              <div class="bank-box" @click="onNext(bank)">
                <span class="name">{{ bank.name }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { metaUrl } from '@/utils/meta';
import Header from '@/components/common/Header.vue';
import { setMyStep } from '@/utils/step';
export default {
  metaInfo: metaUrl['/my'],
  components: { Header },
  data() {
    return {
      banks: [
        { id: 1, name: 'KB국민', bank: true },
        { id: 2, name: 'IBK기업', bank: true },
        { id: 3, name: 'NH농협', bank: false },
        { id: 4, name: '신한', bank: true },
        { id: 5, name: '씨티', bank: true },
        { id: 6, name: 'SC제일', bank: true },
        { id: 7, name: '우리', bank: true },
        { id: 8, name: '카카오 뱅크', bank: false },
        { id: 9, name: '케이뱅크', bank: false },
        { id: 10, name: '토스뱅크', bank: false },
        { id: 11, name: '하나', bank: true },
        { id: 12, name: '경남', bank: true },
        { id: 13, name: '광주', bank: true },
        { id: 14, name: '대구', bank: true },
        { id: 15, name: '부산', bank: true },
        { id: 16, name: 'KDB산업', bank: true },
        { id: 17, name: '수협', bank: false },
        { id: 18, name: '우체국', bank: false },
        { id: 19, name: '전북', bank: true },
        { id: 20, name: '제주', bank: true },
        { id: 21, name: '새마을금고', bank: false },
        { id: 22, name: '신협', bank: false },
        { id: 23, name: 'SRI저축', bank: true },
      ],
    };
  },
  methods: {
    async onNext(value) {
      this.$store.commit('pay/setBank', value);
      setMyStep(2);
      await this.$router.push('/my/accountLink/Step2').catch(() => {});
    },
  },
};
</script>

<style></style>
