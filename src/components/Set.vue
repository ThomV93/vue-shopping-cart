<template>
  <router-link :to="{ name: 'Cards', params: { set: set.id } }">
    <div class="set-container">
      <img :src="set.images.logo" :alt="set.name" />
      <div>
        <img :src="set.images.symbol" alt="symbol" />
        <p class="set-name">{{ set.name }}</p>
        <p class="set-release-date">Released in {{ set.releaseDate }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    set: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.set-container {
  &:hover {
    transform: scale(1.05);
  }
  text-align: center;
  padding: 1.5rem 2rem;
  height: 290px;
  width: 420px;
  border-radius: 0.25rem;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.2);
  color: #4a4a4a;
  cursor: pointer;
  transition: 300ms;

  img {
    height: 130px;
    width: auto;
    margin-bottom: 5px;
  }

  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 100%;
    height: 40%;

    img {
      grid-column: 1;
      grid-row: 1/ -1;
      height: 45px;
      width: auto;
      margin: 1.1rem auto auto auto;
    }

    .set-name {
      grid-column: 2/ -1;
      grid-row: 1;
      font-size: 1.5rem;
      font-weight: 400;
      margin: auto auto 0 0;
      text-align: start;
    }

    .set-release-date {
      grid-column: 2/ -1;
      grid-row: 2;
      text-align: start;
    }
  }
}
</style>
