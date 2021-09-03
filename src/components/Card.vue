<template>
  <img :src="card.images.small" :alt="card.name" />
</template>

<script>
export default {
  name: "Card",
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  &:hover {
    transform: scale(1.05);
  }
  border-radius: 8px;
  box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.45);
  cursor: pointer;
  transition: 300ms;
}
</style>
