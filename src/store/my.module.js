import { getSessionMyStep } from '@/utils/step';

const state = {
  step: getSessionMyStep() || '',
};

const mutations = {
  setStep(state, step) {
    state.step = step;
  },
};

const getters = {
  getStep(state) {
    return state.step;
  },
};

export const my = {
  namespaced: true,
  state,
  mutations,
  getters,
};
