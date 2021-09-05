<template>
  <div class="home">
    <div class="text-container">
      <h1>Welcome to Poké Antiques</h1>
      <h3>
        Join our nostalgic community dedicated to the first Pokémon TCG sets
      </h3>
      <Credits />
    </div>
    <div class="image-container">
      <img src="@/assets/images/pokeball.png" alt="Pokeball" />
    </div>
  </div>
</template>

<script>
import Credits from "@/components/Credits.vue";

export default {
  name: "Home",
  components: {
    Credits,
  },
};
</script>

<style lang="scss">
$yellow: rgb(251, 194, 43);
$blue: rgba(58, 79, 153, 1);

.home {
  font-family: "Open Sans";
  display: grid;
  grid-column: repeat(2, 50%);
  color: #fff;
  height: 92vh;
  overflow: hidden;
  background: $yellow;
  background: linear-gradient(207deg, $yellow 4%, $blue 76%);

  .text-container {
    display: flex;
    flex-direction: column;
    grid-column: 1;
    height: 92vh;
    width: 50vw;
    z-index: 1;
    padding: 5rem;
    background-color: transparent;

    h1 {
      font-family: walkway;
      font-size: 5rem;
      text-align: right;
      line-height: 6rem;
    }

    h3 {
      text-align: right;
      font-weight: 300;
      font-size: 1.8rem;
    }
  }

  .image-container {
    grid-column: 2;
    background-color: transparent;

    img {
      padding-top: 5rem;
      height: 80vh;
      width: auto;
      z-index: -1;
    }
  }
}
</style>
