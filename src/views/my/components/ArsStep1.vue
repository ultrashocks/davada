<template>
  <div class="content-wrap top-header bottom-btn">
    <div class="ars-confirm">
      <validation-observer ref="validator">
        <h3>전화 받을 정보 확인</h3>
        <div class="input-box">
          <label>번호</label>
          <validation-provider rules="requiredMsg" name="통신사를 선택하세요.">
            <select v-model="selected">
              <option value="">통신사를 선택하세요</option>
              <option
                v-for="option in options"
                :value="option.value"
                :key="option.value"
              >
                {{ option.name }}
              </option>
            </select>
          </validation-provider>
        </div>
        <div class="input-box">
          <label>번호</label>
          <validation-provider rules="required|phone" name="핸드폰">
            <Inputs
              v-model="phoneNumber"
              type="tel"
              placeholder="'-'없이 핸드폰번호 입력"
            />
          </validation-provider>
        </div>
        <div class="agree-checks">
          <div class="agree-box">
            <ul>
              <li>
                <validation-provider rules="agree" name="이용약관">
                  <label class="check-all">
                    <input
                      type="checkbox"
                      v-model="allChecked"
                      @click="checkedAll($event.target.checked)"
                    />
                    <span class="check-icon"></span>
                    <span class="check-text">아래 내용에 모두 동의합니다.</span>
                  </label>
                </validation-provider>
              </li>
              <li v-for="item in boardList" :key="item.id">
                <label>
                  <input
                    type="checkbox"
                    v-model="item.checked"
                    @change="checkSelected()"
                  />
                  <span class="check-icon"></span>
                  <span class="check-text">{{ item.text }}</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </validation-observer>
    </div>
    <div class="bottom-btns">
      <button class="btn-m step" @click="onArsNext" :disabled="btnDisabled">
        다음 <span class="next">ARS 인증 전화 받기</span>
      </button>
    </div>
  </div>
</template>

<script>
import Inputs from '@/components/ui/Inputs.vue';
export default {
  components: { Inputs },
  data() {
    return {
      //통신사
      selected: '',
      options: [
        { name: 'SKT', value: 'skt' },
        { name: 'KT', value: 'kt' },
        { name: 'LG U+', value: 'lg' },
      ],
      //번호
      phoneNumber: '',
      //약관동의
      allChecked: false,
      boardList: [
        { id: 1, text: '계좌이체 서비스 이용약관', checked: false },
        { id: 2, text: '통신사 본인확인 이용약관', checked: false },
      ],

      btnDisabled: true,
    };
  },
  methods: {
    checkedAll(checked) {
      this.allChecked = checked;
      for (let i in this.boardList) {
        this.boardList[i].checked = this.allChecked;
      }
    },
    checkSelected() {
      for (let i in this.boardList) {
        if (!this.boardList[i].checked) {
          this.allChecked = false;
          return;
        } else {
          this.allChecked = true;
        }
      }
    },
    async onArsNext() {
      /** 유효성 검사 **/
      /* if (this.selected === '') {
        this.$vxAlert('통신사를 선택하세요.');
        return;
      }
      var regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
      if (regPhone.test(this.phoneNumber) === false) {
        this.$vxAlert('입력된 값은 휴대전화번호가 아닙니다.');
        return;
      }
      if (this.allChecked === false) {
        this.$vxAlert('이용약관에 모두 동의하세요.');
        return;
      } */
      let validResult = await this.$vxForm.isValid(this.$refs.validator);
      if (validResult === false) return;

      console.log('통과');
      this.$emit('ars');
    },
    async checkStepBtn() {
      let validResult = await this.$vxForm.isValid(this.$refs.validator, false);
      validResult ? (this.btnDisabled = false) : (this.btnDisabled = true);
      console.log(validResult);
    },
  },
  watch: {
    selected() {
      this.checkStepBtn();
    },
    phoneNumber() {
      this.checkStepBtn();
    },
    allChecked() {
      setTimeout(() => {
        this.checkStepBtn();
      }, 100);
    },
  },
};
</script>

<style></style>
