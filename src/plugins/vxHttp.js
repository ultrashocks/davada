import axios from 'axios';
import $LogonUser from '@/common/logonUser';

let VxHttpPlugin = {};
VxHttpPlugin.install = (Vue, { router }) => {
  router;

  const $axios = axios.create({
    // baseURL: 'http://localhost:8080',
    // baseURL: '',
    withCredentials: true, // 기본값
  });

  //Interceptors
  $axios.interceptors.request.use(
    function (config) {
      //Before Request
      config.headers.common['Access-Control-Allow-Origin'] = '*';
      config.headers.userType = 'ADM';
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );
  $axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  function hasInternalError(response) {
    let resCode = response.data && response.data.code;
    if (Array.isArray(response.data) === true) {
      resCode = 0;
    }
    switch (resCode) {
      case 0:
      case 'POM-200':
      case 2001:
      case 2004:
      case 2005:
      case 2006:
      case 2008:
        return false;
      case 2007:
        Vue.vxAlert(response.data.resMsg, 'error');
        return false;

      default:
        return true;
    }
  }

  function execute(method, url, data, options = {}) {
    return new Promise(function (resolve, reject) {
      let params = method === 'get' ? { params: data } : { data };
      $axios.defaults.headers.common['Auth-Key'] = $LogonUser.getAuthKey();
      $axios({ method, url, ...params, ...options })
        .then(function (response) {
          if (response.data && response.data.authKey) {
            $LogonUser.setAuthKey(response.data.authKey);
          }

          if (hasInternalError(response) === false) {
            resolve(response);
          } else {
            //resolve(response);
            reject(response);
          }
        })
        .catch(function (err) {
          if (axios.isCancel(err)) {
            Vue.vxAlert('처리 중인 요청이 취소되었습니다.');
            resolve(err);
          } else {
            //HTTP STATUS 오류의 경우, vxHttp.catch로 예외를 처리할 수 없음
            doErrorHandler(err); //reject(err);
          }
        });
    });
  }

  Vue.prototype.$vxHttp = {
    get: (url, params = null, options) => {
      return execute('get', url, params, options);
    },
    post: (url, data, options) => {
      return execute('post', url, data, options);
    },
    put: (url, data, options) => {
      return execute('put', url, data, options);
    },
    delete: (url, data, options) => {
      return execute('delete', url, data, options);
    },
  };

  function doErrorHandler(err, vm, info) {
    vm;
    info;
    // eslint-disable-next-line no-debugger
    //debugger;
    //err.config && console.error('VUE.ERRORHANDLER', err.config);
    let { response } = { response: { status: 900 }, ...err };
    switch (response.status) {
      case 'POM-400':
        Vue.vxAlert('요청이 유효하지 않습니다.');
        break;
      case 400:
        Vue.vxAlert('요청이 유효하지 않습니다.');
        break;
      case 401:
        Vue.vxAlert(
          '인증정보가 유효하지 않습니다. 로그인 페이지로 이동합니다.',
          () => router.push('/login').catch(() => {}),
        );
        break;
      case 403:
        //Vue.vxAlert(
        //  '권한이 없습니다. 관리자에게 문의 바랍니다.',
        //  () => () => router.go(-1),
        //);
        router.push('/noPermissions');
        break;
      case 404:
        {
          let { url } = err.config;
          Vue.vxAlert(`요청이 올바르지 않습니다. (${url})`, 'error');
        }
        break;
      case 500:
        Vue.vxAlert('처리 중 오류가 발생하였습니다.', 'error');
        console.error((response.data && response.data) || 'ERROR!');
        console.error(err.stack.replace(/\n[ ]*/g, ' --> '));
        break;
      case 900:
        Vue.vxAlert('스크립트 오류가 발생하였습니다.');
        //console.error(err.stack.replace(/\n[ ]*/g, ' --> '));
        break;
      default:
        Vue.vxAlert('서버에 알 수 없는 오류가 발생하였습니다.', 'error');
        break;
    }
  }

  Vue.config.errorHandler = (err, vm, info) => {
    //VXHTTP.MIXIN.ERROR_CAPTURED -> VUE.CONFIG.ERROR_HANDLER
    console.log('VUE.CONFIG.ERROR_HANDLER', err, vm, info);
    doErrorHandler(err, vm, info);
  };

  /*
  Vue.mixin({
    errorCaptured(err, vm, info) {
      console.log("VXHTTP.MIXIN.ERROR_CAPTURED", err, vm, info);
      //return false; //stopPropagation
    }
  })
  */
};
export default VxHttpPlugin;
