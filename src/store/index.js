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
    UP_AMOUNT(state, idx) {
      state.cart[idx].amount++;
    },
    DOWN_AMOUNT(state, idx) {
      state.cart[idx].amount--;
    },
  },
  actions: {
    pushToCart({ commit }, card) {
      commit("ADD_CARD", card);
    },
    removeFromCart({ commit }, id) {
      commit("REMOVE_CARD", id);
    },
    increaseAmt({ commit }, idx) {
      commit("UP_AMOUNT", idx);
    },
    decreaseAmt({ commit }, idx) {
      if (this.state.cart[idx].amount > 1) {
        commit("DOWN_AMOUNT", idx);
      }
    },
  },
  modules: {},
});
