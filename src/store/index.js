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
      const newArray = state.cart.filter((item) => item.id !== id);
      state.cart = newArray;
    },
  },
  actions: {
    pushToCart({ commit }, card) {
      commit("ADD_CARD", card);
    },
    removeFromCart({ commit }, card) {
      commit("REMOVE_CARD", card);
    },
  },
  modules: {},
});
