import DialogVX from '@/components/common/DialogVX';

let vxDialogPlugin = {};
/*
  let settings = {
    title: '알림',
    resolveText: '닫기',
    resolve: ()=>{ do something... },  
  }
  this.$vxAlert("입력이 올바르지 않습니다.");  
  this.$vxAlert("입력이 올바르지 않습니다.", ()=>{ do something... });
  this.$vxAlert("입력이 올바르지 않습니다.", { ...settings } );

  let settings = {
    title: '확인',
    resolveText: '확인',
    rejectText: '취소',
    resolve: null,
    reject: null,
  };  
  this.$vxConfirm("삭제 하시겠습니까?", ()=>{ do something... });
  this.$vxConfirm("삭제 하시겠습니까?", { ...settings } );  
 */
vxDialogPlugin.install = Vue => {
  //console.log('install vxDialog');
  var DialogConstructor = Vue.extend(DialogVX);
  var vxDialog = null;

  function createDialog() {
    if (vxDialog == null) {
      vxDialog = new DialogConstructor({
        el: document.createElement('div'),
        data() {
          return {
            view: false,
          };
        },
      });
      document.body.appendChild(vxDialog.$el);
    }
  }
  function alert(message, options = {}) {
    if (typeof options === 'function') {
      options = { resolve: options };
    }
    let settings = {
      title: '알림',
      resolveText: '닫기',
      resolve: null,
      ...options,
    };
    createDialog();
    vxDialog.type = 'alert';
    vxDialog.title = settings.title;
    vxDialog.message = message;
    vxDialog.resolveText = settings.resolveText;
    vxDialog.resolve = settings.resolve;
    vxDialog.view = true;
  }
  function confirm(message, options = {}) {
    if (typeof options === 'function') {
      options = { resolve: options };
    }
    let settings = {
      title: '확인',
      resolveText: '확인',
      rejectText: '취소',
      resolve: null,
      reject: null,
      ...options,
    };
    createDialog();
    vxDialog.type = 'confirm';
    vxDialog.title = settings.title;
    vxDialog.message = message;
    vxDialog.resolveText = settings.resolveText;
    vxDialog.rejectText = settings.rejectText;
    vxDialog.resolve = settings.resolve;
    vxDialog.reject = settings.reject;
    vxDialog.view = true;
  }

  Vue.vxAlert = alert;
  Vue.vxConfirm = confirm;
  Vue.prototype.$vxAlert = alert;
  Vue.prototype.$vxConfirm = confirm;
};
export default vxDialogPlugin;
