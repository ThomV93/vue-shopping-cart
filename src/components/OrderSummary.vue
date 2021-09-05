<template>
  <div className="order-summary">
    <h1>Order Summary</h1>
    <div className="subtotal-container">
      <div className="value-container">
        <p>Order value</p>
        <p>$ {{ total }}</p>
      </div>
      <div className="value-container">
        <p>Delivery</p>
        <p>Free</p>
      </div>
    </div>
    <div>
      <div className="value-container">
        <p>Total</p>
        <p>$ {{ total }}</p>
      </div>
      <router-link :to="{ name: 'Home' }">
        <button>PROCEED TO CHECKOUT</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderSummary",
  props: {
    total: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.order-summary {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 2rem;
  border: 1px solid #aaa;
  width: 400px;
  height: fit-content;
  border-radius: 15px;
  padding: 1.5rem;
  margin-top: 1rem;

  .subtotal-container {
    padding: 1rem 0;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
  }

  p {
    margin: 0.5rem 0;
  }

  .value-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
