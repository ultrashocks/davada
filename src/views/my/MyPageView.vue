<template>
  <div class="wrap">
    <div class="mypage">
      <Header>내 정보 관리</Header>

      <Tabs :tabList="tabList" v-model="activeTab" mode="if">
        <template v-slot:tabPanel-1> <TabAccount /> </template>
        <template v-slot:tabPanel-2>
          <TabPayAccount />
        </template>
      </Tabs>
    </div>
  </div>
</template>

<script>
import { metaUrl } from '@/utils/meta';
import Header from '@/components/common/Header.vue';
import Tabs from '@/components/common/Tabs.vue';
import TabPayAccount from '@/views/my/components/TabPayAccount.vue';
import TabAccount from '@/views/my/components/TabAccount.vue';
export default {
  metaInfo: metaUrl['/my'],
  components: { Header, Tabs, TabPayAccount, TabAccount },
  data() {
    return {
      tabList: ['계정', '결제계좌'],
      activeTab: 1,
    };
  },
};
</script>

<style></style>
