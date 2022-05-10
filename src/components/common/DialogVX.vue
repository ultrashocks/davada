<template>
  <transition name="fade-view">
    <div class="dialog-wrapper" v-if="view">
      <div class="dialog-box">
        <span class="btn-close" @click="doClose">닫기</span>
        <div class="dialog-body">
          <span v-html="message"></span>
        </div>
        <div class="dialog-footer">
          <button
            type="button"
            class="ui-button"
            @click="doResolve"
            v-if="type == 'alert'"
          >
            {{ resolveText }}
          </button>
          <button
            type="button"
            class="ui-button"
            @click="doResolve"
            v-if="type == 'confirm'"
          >
            {{ resolveText }}
          </button>
          <button
            type="button"
            class="ui-button"
            @click="doReject"
            v-if="type == 'confirm'"
          >
            {{ rejectText }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      type: 'alert',
      view: false,
      title: '알림',
      message: '내용',
      resolveText: '닫기',
      rejectText: '취소',
      resolve: null,
      reject: null,
    };
  },
  methods: {
    doResolve() {
      this.resolve && this.resolve();
      this.CloseDialog();
    },
    doReject() {
      this.reject && this.reject();
      this.CloseDialog();
    },
    doClose() {
      this.type === 'alert' ? this.doResolve() : this.doReject();
    },
    CloseDialog() {
      this.view = false;
    },
  },
};
</script>
