<template>
  <div class="info-section">
    <div>
      <h3>HP</h3>
      <p>{{ hp }}</p>
      <h3>Level</h3>
      <p>{{ level }}</p>
    </div>
    <div>
      <h3>Set Name</h3>
      <p>{{ card.set.name }}</p>
      <h3>Set Series</h3>
      <p>{{ card.set.series }}</p>
    </div>
    <div>
      <h3>Pokédex Nº</h3>
      <p>{{ pokedexNum }}</p>
      <h3>Card Nº</h3>
      <p>{{ card.number }}/{{ card.set.printedTotal }}</p>
    </div>
    <div>
      <h3>Artist</h3>
      <p>{{ card.artist }}</p>
      <h3>Rarity</h3>
      <p>{{ card.rarity }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardTitle",
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hp() {
      return this.card.hp === undefined ? "n/a" : this.card.hp;
    },
    level() {
      return this.card.level === undefined ? "n/a" : this.card.level;
    },
    pokedexNum() {
      return this.card.nationalPokedexNumbers === undefined
        ? "n/a"
        : this.card.nationalPokedexNumbers[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.info-section {
  align-items: center;
  height: auto;
  padding: 1rem 0;
  border-bottom: 2px solid #d3d3d3;
  margin-bottom: 0.7rem;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
  }
}
</style>
