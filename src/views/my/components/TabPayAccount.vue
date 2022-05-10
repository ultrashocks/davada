<template>
  <div class="content-wrap">
    <div class="account-list">
      <ul>
        <li v-for="item in accountLists" :key="item.id">
          <div class="icon">
            <span class="icon-circle"></span>
          </div>
          <div class="info">
            <div class="account-name">{{ item.accountName }}</div>
            <div class="account-num">{{ item.accountNum }}</div>
          </div>
        </li>
      </ul>
      <div class="btns" v-if="accountLists != null && accountLists.length > 0">
        <ButtonnRefresh @changeAccount="onChangeAccount"
          >계좌 변경하기</ButtonnRefresh
        >
      </div>
      <div
        class="non-account"
        v-if="accountLists != null && accountLists.length < 1"
      >
        등록되있는 결제계좌가 없습니다.<br />
        결제계좌를 등록해주세요.
      </div>
      <div class="bottom-btns">
        <button class="btn-m" @click="onAccountLink">결제계좌 등록하기</button>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonnRefresh from '@/components/ui/ButtonnRefresh.vue';
export default {
  components: { ButtonnRefresh },
  data() {
    return {
      accountLists: null,
    };
  },
  methods: {
    attachData(url) {
      this.$vxHttp.get(url, {}).then(({ data }) => {
        console.log(data);
        this.accountLists = data;
      });
    },
    onChangeAccount() {
      console.log('계좌 변경하기');
      this.attachData('/sampleData/accountList.json');
    },
    onAccountLink() {
      this.$router.push('/my/accountLink');
    },
  },
  created() {
    this.attachData('/sampleData/accountList2.json');
  },
};
</script>

<style></style>
