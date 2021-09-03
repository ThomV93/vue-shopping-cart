<template>
  <div className="credits">
    <div>
      <p>Created by Thomas Veit</p>
      <a
        href="https://github.com/ThomV93/shopping-cart"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src="@/assets/images/github.svg" alt="gitLogo" />
      </a>
    </div>
    <p>built with Pokémon TCG API</p>
  </div>
</template>

<script>
export default {
  name: "Credits",
};
</script>

<style lang="scss">
.credits {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  flex-grow: 1;
  align-self: flex-end;
  text-align: right;

  div {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      color: inherit;
      text-decoration: none;
      margin-left: 5px;
    }
  }
}
</style>
