<template>
  <div class="cart">
    <div class="cart-items-container">
      <h1>Shopping Cart</h1>
      <CartItem
        v-for="(item, index) in cart"
        :key="item.id"
        :item="item"
        :index="index"
      />
    </div>
    <OrderSummary :total="total" />
  </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";
import OrderSummary from "@/components/OrderSummary.vue";

export default {
  name: "Cart",
  components: {
    CartItem,
    OrderSummary,
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
}
</style>
