<template>
  <div id="app">
    <router-view></router-view>
    <Loader :view="loadingStatus" :msg="msg"></Loader>
  </div>
</template>

<script>
import bus from '@/utils/bus.js';
import Loader from '@/components/common/Loader';
export default {
  name: 'App',
  components: { Loader },
  data() {
    return {
      msg: null,
      loadingStatus: false,
    };
  },
  methods: {
    startLoader(msg) {
      this.msg = msg;
      this.loadingStatus = true;
    },
    endLoader() {
      this.loadingStatus = false;
    },
  },
  created() {
    bus.$on('startLoader', this.startLoader);
    bus.$on('endLoader', this.endLoader);
  },
  mounted() {
    /* bus.$emit('startLoader', {
      msg: 'ARS 인증 확인중 입니다.<br>잠시만 기다려 주세요.',
      info: '최대 1분을 넘기지 않습니다.',
    }); */
    // this.$vxAlert('경고문입니다.');
    /* this.$vxConfirm('삭제 하시겠습니까?', () => {
      console.log('삭제 실행~');
    }); */
  },
};
</script>

<style></style>
