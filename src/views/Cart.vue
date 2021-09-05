<template>
  <div className="cart">
    <div className="cart-items-container">
      <h1>Shopping Cart</h1>
      <!-- <CartItem item="{item}" key="{item.id}" i="{i}" /> -->
    </div>
    <!-- <OrderSummary total="{total}" /> -->
  </div>
</template>

<script>
export default {};
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
