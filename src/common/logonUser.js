// import Vue from 'vue';

const STORAGE_KEY = 'userinfo';
const AUTH_KEY = 'userinfo-authkey';
let userInfo = null;

const setUserInfo = data => {
  userInfo = data;
  sessionStorage.setItem(STORAGE_KEY, (data && JSON.stringify(data)) || null);
  sessionStorage.setItem(AUTH_KEY, (data && data.authKey) || null);
};

const getUserInfo = () => {
  if (userInfo) {
    return userInfo;
  } else {
    userInfo = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
    return userInfo || {};
  }
};

const clear = () => {
  setUserInfo(null);
};

const isLogon = () => {
  return userInfo != null;
};

const isMobile = () => {
  return location.href.indexOf('/m/') == -1 ? false : true;
};

const getAuthKey = () => {
  return sessionStorage.getItem(AUTH_KEY) || getUserInfo().authKey;
};

const setAuthKey = authKey => {
  sessionStorage.setItem(AUTH_KEY, authKey);
};

export default {
  setUserInfo,
  getUserInfo,
  clear,
  isLogon,
  isMobile,
  getAuthKey,
  setAuthKey,
};
