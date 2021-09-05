<template>
  <div class="cart">
    <div class="cart-items-container">
      <h1>Shopping Cart</h1>
      <CartItem v-for="item in cart" :key="item.id" :item="item" />
    </div>
    <!-- <OrderSummary :total="total" /> -->
  </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";

export default {
  name: "Cart",
  components: {
    CartItem,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    total() {
      return this.cart.reduce((a, b) => a + b.price * b.amount, 0).toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  justify-content: space-between;
  height: 92vh;
  padding: 1.3rem 3.8rem;
  overflow: scroll;

  h1 {
    font-size: 1.5rem;
    font-family: walkway;
    margin: 0;
    padding: 0;
  }

  .cart-items-container {
    width: 60%;
    margin-right: 2rem;
  }

  button {
    &:hover {
      background-color: #45a049;
    }
    width: 100%;
    font-size: 1rem;
    background-color: #4caf50;
    color: white;
    padding: 12px 20px;
    margin-top: 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
