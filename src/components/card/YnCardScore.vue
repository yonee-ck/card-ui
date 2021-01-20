<template>
  <div class="yn-card-score">
    <div v-for="el in score" :key="el.index" class="yn-card-score-inner">
      <img src="@/assets/images/score.png">
    </div>
    <div v-for="el in emptyScore" :key="el.index" class="yn-card-score-inner">
      <img src="@/assets/images/score_empty.png">
    </div>
    <div class="yn-card-score-description">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'YnScore',
  props: {
    score: {
      type: Number,
      default: 5
    }
  },
  computed: {
    emptyScore () {
      return (5 - this.score)
    }
  }
}
</script>

<style lang="scss" scoped>
.yn-card-score {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  &-inner {
    width: 25px;
    img {
      display: block;
      width: 100%;
    }
  }
  &-description {
    grid-column: 6 / 11;
    text-align: left;
    font-size: 12px;
    color: gray;
    padding-top: 5px;
  }
}
</style>
