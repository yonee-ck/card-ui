<template>
  <div class="yn-card-score">
    <div v-for="el in score" :key="el.index">
      <img src="@/assets/images/score.png">
    </div>
    <div v-for="el in emptyScore" :key="el.index">
      <img src="@/assets/images/score_empty.png">
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
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
  image {
    width: 100%;
  }
}
</style>
