<template>
  <div class="price-section">
    <div class="price-container">
      <h3>High Market</h3>
      <p class="high-price">${{ high }}</p>
    </div>
    <div class="price-container">
      <h3>Market</h3>
      <p>${{ market }}</p>
    </div>
    <div class="price-container">
      <h3>Low Market</h3>
      <p class="low-price">${{ low }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardPrices",
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      prices: this.card.tcgplayer.prices,
    };
  },
  computed: {
    high() {
      return this.prices[Object.keys(this.prices)[0]].high;
    },
    market() {
      return this.prices[Object.keys(this.prices)[0]].market;
    },
    low() {
      return this.prices[Object.keys(this.prices)[0]].low;
    },
  },
};
</script>

<style lang="scss" scoped>
.price-section {
  align-items: center;
  height: auto;
  padding: 1rem 0;
  border-bottom: 2px solid #d3d3d3;
  margin-bottom: 0.7rem;
  display: flex;
  justify-content: space-between;
  border-bottom: none;

  span {
    font-size: 0.8rem;
  }

  p {
    font-size: 1.6rem;
  }

  .high-price {
    color: red;
  }

  .low-price {
    color: green;
  }
}
</style>
