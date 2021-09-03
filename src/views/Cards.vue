<template>
  <div className="cards">
    <div className="card-container">
      <Card v-for="card in cards" :key="card.id" :card="card" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Cards",
  components: {
    Card,
  },
  props: ["id"],
  data() {
    return {
      cards: null,
    };
  },
  async created() {
    try {
      const data = await fetch(
        `https://api.pokemontcg.io/v2/cards?q=set.id:${this.id}`
      );
      const set = await data.json();
      this.cards = set.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss">
.cards {
  height: 92vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 1.3rem 3.8rem;
  overflow: scroll;

  .card-container {
    display: flex;
    flex-wrap: wrap;
    max-width: 1344px;
    gap: 1.3rem;
  }
}
</style>
