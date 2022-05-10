<template>
  <div class="wrap">
    <div class="pay step2">
      <Header class="non-border blue" path="/pay/step1"></Header>
      <div class="content-wrap top-header bottom-btn">
        <div class="icon-wrap">
          <i class="icon-question"></i>
        </div>
        <div class="content-info__t mb16">
          상품 정보를<br />
          캡쳐해서 올려주세요.
        </div>
        <div class="content-info__b mb56">
          상품 이름과 이미지가 보여야해요.<br />
          구매하시려는 상품의 옵션이 표시돼야해요.
        </div>
        <div class="thum-list">
          <ul>
            <li>
              <div class="btn-capture">
                <label>
                  <i class="icon-plus"></i>
                  <span class="nums">{{ imgDatas.length }}/5</span>
                  <input
                    type="file"
                    id="photoFile"
                    ref="photoFile"
                    class="photoFile"
                    @change="addPhoto"
                    accept="images/*;capture=camera"
                  />
                </label>
                <div
                  class="trans-btn"
                  @click="onMessage"
                  v-if="imgDatas.length >= maxNum"
                ></div>
              </div>
            </li>
            <li v-for="(data, index) in imgDatas" :key="data.id">
              <div class="thum-img">
                <img :src="data.img" />
                <span class="nums">{{ index + 1 }}/{{ maxNum }}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="bottom-btns">
          <button class="btn-m step" @click="onNext()" :disabled="btnDisabled">
            다음
            <span class="next">상품금액 입력</span>
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
    return {
      maxNum: 5,
      id: 0,
      imgDatas: [],
      btnDisabled: true,
    };
  },
  methods: {
    addPhoto() {
      // if (this.maxNum === this.imgDatas.length) {
      //   this.$vxAlert('최대 등록이미지는 5개까지만 등록됩니다.');
      //   return;
      // }
      const input = this.$refs.photoFile;
      if (input.files && input.files[0]) {
        const photo = {
          id: this.id++,
          img: URL.createObjectURL(input.files[0]),
        };
        this.imgDatas.push(photo);
      }
    },
    onMessage() {
      this.$vxAlert('최대 등록이미지는 5개까지만 등록됩니다.');
    },
    async onNext() {
      if (this.imgDatas.length === 0) {
        this.$vxAlert('이미지를 최소 1개이상 등록하세요.');
        return;
      }
      setPayStep(3);
      await this.$router.push('/pay/step3').catch(() => {});
    },
  },
  watch: {
    imgDatas() {
      if (this.imgDatas.length > 0) {
        this.btnDisabled = false;
      } else {
        this.btnDisabled = true;
      }
    },
  },
};
</script>

<style></style>
