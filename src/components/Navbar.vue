<template>
  <div class="navbar">
    <h1>Poké Antiques</h1>
    <ul>
      <router-link to="/">
        <li>Home</li>
      </router-link>
      <router-link to="/shop">
        <li>Shop</li>
      </router-link>
      <router-link to="/cart">
        <li>Cart <span>(0)</span></li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
.navbar {
  display: flex;
  align-items: center;
  height: 8vh;
  min-height: 50px;
  width: 100%;
  box-shadow: 0 2px 8px #e0e0e0;
  background-color: white;
  padding: 0 3.9rem;
  box-sizing: border-box;
  z-index: 3;

  h1 {
    font-family: walkway;
    font-size: 2.2rem;
    width: 40%;
  }

  span {
    font-size: 0.9rem;
    color: #333;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 4rem;
    list-style: none;
    width: 57%;

    li {
      font-weight: 300;
    }
  }

  a {
    text-decoration: none;
    color: #000;
  }
}
</style>
