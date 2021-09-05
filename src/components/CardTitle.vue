<template>
  <div class="title-section">
    <h1>{{ card.name }}</h1>
    <p>
      {{ card.supertype }} -
      {{ subtype }}
    </p>
  </div>
  <div class="description-section">
    <p>{{ card.flavorText }}</p>
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
    subtype() {
      return this.card.subtypes === undefined ? "n/a" : this.card.subtypes[0];
    },
  },
};
</script>

<style lang="scss">
%section {
  align-items: center;
  height: auto;
  padding: 1rem 0;
  border-bottom: 2px solid #d3d3d3;
  margin-bottom: 0.7rem;
}

.title-section {
  @extend %section;
  display: flex;
  justify-content: space-between;
  border-bottom: none;
  padding: 0;
  margin: 0;
}

.description-section {
  display: flex;
  @extend %section;

  p {
    font-size: 1.05rem;
  }
}
</style>
