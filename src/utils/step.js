import { store } from '@/store';

// 결제
export const setPayStep = num => {
  store.commit('pay/setStep', num);
  sessionStorage.setItem('payStep', num);
};

export const getStorePayStep = () => {
  return store.getters['pay/getStep'];
};

export const getSessionPayStep = () => {
  return Number(sessionStorage.getItem('payStep'));
};

export const deletePayStep = () => {
  store.commit('pay/setStep', '');
  sessionStorage.removeItem('payStep');
};

// 마이
export const setMyStep = num => {
  store.commit('my/setStep', num);
  sessionStorage.setItem('myStep', num);
};

export const getStoreMyStep = () => {
  return store.getters['my/getStep'];
};

export const getSessionMyStep = () => {
  return Number(sessionStorage.getItem('myStep'));
};

export const deleteMyStep = () => {
  store.commit('my/setStep', '');
  sessionStorage.removeItem('myStep');
};
