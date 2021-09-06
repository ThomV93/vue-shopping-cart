<template>
  <div v-if="card" class="card">
    <img :src="card.images.large" :alt="card.name" />
    <div class="card-details">
      <CardTitle :card="card" />
      <h2>Details</h2>
      <CardInfo :card="card" />
      <h2>Prices</h2>
      <span>Last Updated {{ card.tcgplayer.updatedAt }}</span>
      <CardPrices :card="card" />
      <button @click="sendToCard()">Add to Cart</button>
    </div>
  </div>
  <Loading v-else />
</template>

<script>
import CardTitle from "@/components/CardTitle.vue";
import CardInfo from "@/components/CardInfo.vue";
import CardPrices from "@/components/CardPrices.vue";
import Loading from "@/components/Loading.vue";

export default {
  name: "CardDetails",
  components: {
    CardTitle,
    CardInfo,
    CardPrices,
    Loading,
  },
  props: ["selectedCard"],
  data() {
    return {
      card: null,
    };
  },
  async created() {
    try {
      const data = await fetch(
        `https://api.pokemontcg.io/v2/cards/${this.selectedCard}`
      );
      const item = await data.json();
      this.card = item.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    sendToCard() {
      let index = this.$store.state.cart.findIndex(
        (card) => card.name === this.cartItem.name
      );
      const selectedItem = this.$store.state.cart.filter(
        (card) => card.name === this.cartItem.name
      );
      index === -1
        ? this.$store.dispatch("pushToCart", this.cartItem)
        : selectedItem[0].amount++;
    },
  },
  computed: {
    prices() {
      return this.card.tcgplayer.prices;
    },
    cartItem() {
      return {
        id: this.card.id,
        image: this.card.images.small,
        name: this.card.name,
        setName: this.card.set.name,
        setDate: this.card.set.releaseDate,
        price: this.prices[Object.keys(this.prices)[0]].market,
        amount: 1,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: space-between;
  height: 92vh;
  width: 100vw;
  padding: 2rem 3.9rem;

  img {
    height: 80vh;
    width: auto;
    border-radius: 8px;
    box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.45);
  }

  .card-details {
    width: 90%;
    padding: 0 3.1rem 1.5rem 3.1rem;
    max-width: 50vw;
    overflow: scroll;

    h2 {
      margin: 0.2rem 0;
    }

    h3 {
      font-size: 0.85rem;
      color: #555;
    }

    button {
      &:hover {
        background-color: #45a049;
      }
      width: 100%;
      font-size: 1.1rem;
      background-color: #4caf50;
      color: white;
      padding: 16px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}
</style>
