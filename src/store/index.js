import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
  },
  mutations: {
    ADD_CARD(state, card) {
      state.cart.push(card);
    },
    REMOVE_CARD(state, id) {
      state.cart.filter((item) => item.id !== id);
    },
  },
  actions: {
    pushToCart({ commit }, card) {
      commit("ADD_CARD", card);
    },
  },
  modules: {},
});
