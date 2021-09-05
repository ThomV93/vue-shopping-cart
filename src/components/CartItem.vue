<template>
  <div className="item-container">
    <div className="info-container">
      <img className="card" :src="item.image" alt="{name}" />
      <div>
        <p>
          Name <span>{{ item.name }}</span>
        </p>
        <p>
          Set <span>{{ item.setName }}</span>
        </p>
        <p>
          Released <span>{{ item.setDate }}</span>
        </p>
        <p>
          Price <span>$ {{ item.price }}</span>
        </p>
        <div className="amount-container">
          <img src="@/assets/images/minus.svg" alt="minus" />
          <p>{{ item.amount }}</p>
          <img src="@/assets/images/plus.svg" alt="plus" />
        </div>
      </div>
    </div>
    <div className="price-container">
      <img src="@/assets/images/x-circle.svg" alt="x-circle" />
      <p>$ {{ subTotal.toFixed(2) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    subTotal() {
      return this.item.price * this.item.amount;
    },
  },
};
</script>

<style lang="scss" scoped>
.item-container {
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  border-bottom: 1px solid #aaa;
  padding: 1.5rem;

  .info-container {
    display: flex;

    .card {
      height: 200px;
      width: auto;
      border-radius: 8px;
      box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.45);
      transition: 300ms;
      padding: 0;
    }

    div {
      margin-left: 3rem;

      p {
        font-size: 0.85rem;
        margin-bottom: 0.3rem;
        color: #555;
      }

      span {
        color: #000;
        font-size: 1.1rem;
        margin-left: 1rem;
      }

      .amount-container {
        display: flex;
        gap: 0.8rem;
        margin: 0;

        p {
          color: #000;
          font-size: 1.1rem;
          margin: 0;
        }

        img {
          &:hover {
            transform: scale(1.2);
          }
          cursor: pointer;
        }
      }
    }
  }

  .price-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      &:hover {
        transform: scale(1.08);
      }
      transition: 200ms;
      height: 22px;
      width: auto;
      align-self: flex-end;
      cursor: pointer;
    }

    p {
      color: #000;
      font-size: 1.1rem;
      margin-left: 1rem;
    }
  }
}
</style>
