<template>
  <div class="login-wrap">
    <div class="form-box">
      <form @submit.prevent="submitForm" class="form">
        <div class="form-header">
          <div class="logo">daVada</div>
          <div class="title">다바다 ERP (소매점 관리)</div>
        </div>
        <div class="form-body">
          <validation-observer ref="validator">
            <div class="login-inputs">
              <div class="input-id">
                <span class="icon"></span>
                <validation-provider
                  rules="required|min:4|max:20|alpha_num"
                  name="아이디"
                >
                  <input
                    type="text"
                    placeholder="아이디"
                    v-model="userId"
                    autocomplete="off"
                  />
                </validation-provider>
                <button type="button" class="btn-search">검색</button>
              </div>
              <div class="input-password">
                <span class="icon"></span>
                <validation-provider
                  rules="required|min:4|max:16"
                  name="비밀번호"
                >
                  <input
                    type="password"
                    placeholder="비밀번호"
                    v-model="userPwd"
                    autocomplete="off"
                  />
                </validation-provider>
              </div>
              <div class="input-auth">
                <span class="icon"></span>
                <validation-provider
                  rules="required|min:4|max:20|alpha_num"
                  name="아이디"
                >
                  <input
                    type="text"
                    placeholder="아이디"
                    v-model="userId"
                    autocomplete="off"
                  />
                </validation-provider>
                <button type="button" class="btn-search">인증요청</button>
              </div>
            </div>
            <div class="check-area">
              <span class="checkbox-wrap">
                <input type="checkbox" id="saveUserId" />
                <label for="saveUserId">아이디/패스워드 저장</label>
              </span>
            </div>
            <div class="login-btns">
              <button type="submit" class="btn-login">로그인</button>
            </div>
          </validation-observer>
        </div>
        <div class="form-footer">
          <div class="info">
            업체코드, 비밀번호를 모르시면,<br />
            주문하시는 주류도매 업체에 문의바랍니다.
          </div>
          <div class="copyright">Copyright 다바다. All right reserved.</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import bus from '@/utils/bus';
import $LogonUser from '@/common/logonUser';
export default {
  data() {
    return {
      userId: null,
      userPwd: null,
      isIdActive: false,
      isPassActive: false,
    };
  },
  methods: {
    saveUserIdCheck() {
      document.getElementById('saveUserId').checked === true
        ? localStorage.setItem('ilms_userId', this.userId)
        : localStorage.removeItem('ilms_userId');
    },
    async submitForm() {
      console.log('submitForm');
      /* //유효성 검사
      if ((await this.$vxForm.isValid(this.$refs.validator)) === false) {
        return;
      }
      //인증 요청
      let res = await this.$vxHttp.post('/api/auth', {
        userId: this.userId,
        userPwd: this.userPwd,
      });
      //resCode가 0이 아닐 경우, 서버에서 받은 메시지를 표시하고 종료처리
      if (res.data.resCode !== 0) {
        this.$vxAlert(res.data.resMsg, {});
        return;
      }
      //성공
      $LogonUser.setUserInfo(res.data);
      this.saveUserIdCheck(); //로컬스토리지에 아이디 저장 또는 삭제 */

      this.$router.push('/main');
    },
    initForm() {
      this.userId = '';
      this.password = '';
    },
  },
  created() {
    //이미 로그인되어 있던 사용자인지 확인
    if ($LogonUser.isLogon()) {
      this.$router.push('/main');
    }
  },
  mounted() {
    //로딩중에 이동한 경우 spinner end
    bus.$emit('end:spinner');
    //아이디 저장 유무 확인
    let userId = localStorage.getItem('ilms_userId');
    if (userId) {
      this.userId = userId;
      document.getElementById('saveUserId').checked = true;
    }
  },
};
</script>
