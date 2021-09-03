<template>
  <div className="shop">
    <h1>Available Sets</h1>
    <div className="sets" v-if="sets">
      <Set v-for="set in sets" :key="set.ptcgoCode" :set="set" />
    </div>
  </div>
</template>

<script>
import Set from "@/components/Set.vue";

export default {
  name: "Shop",
  components: {
    Set,
  },
  data() {
    return {
      sets: null,
    };
  },
  async created() {
    try {
      const data = await fetch(
        "https://api.pokemontcg.io/v2/sets?q=series:base"
      );
      const items = await data.json();
      this.sets = items.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss">
.shop {
  display: flex;
  flex-direction: column;
  height: 92vh;
  width: 100vw;
  padding: 2rem 3.8rem;
  bottom: 2rem;

  a {
    text-decoration: none;
    color: inherit;
  }

  h1 {
    font-size: 1.5rem;
    font-family: walkway;
    margin: 0;
    padding: 0;
  }

  .sets {
    height: 88vh;
    width: auto;
    max-width: 1344px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-self: center;
    gap: 1.3rem;
    overflow: scroll;
    padding: 0.5rem 0 1.5rem 0;
  }
}
</style>
