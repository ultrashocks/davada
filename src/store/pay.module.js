import { getSessionPayStep } from '@/utils/step';

const state = {
  bank: {},
  step: getSessionPayStep() || '',
};

const mutations = {
  setBank(state, bank) {
    state.bank = bank;
  },
  setStep(state, step) {
    state.step = step;
  },
};

const getters = {
  getBank(state) {
    return state.bank;
  },
  getStep(state) {
    return state.step;
  },
};

export const pay = {
  namespaced: true,
  state,
  mutations,
  getters,
};
