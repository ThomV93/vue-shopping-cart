<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
@font-face {
  font-family: "walkway";
  src: url(./assets/fonts/Walkway_SemiBold.ttf);
}

* {
  font-family: "Open Sans", sans-serif;
  margin: 0;
  box-sizing: border-box;
  line-height: 1.5;
}
</style>
