<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

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
