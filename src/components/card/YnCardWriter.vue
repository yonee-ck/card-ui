<template>
  <div class="yn-card-score-writer">
     | {{ writer }}
  </div>
</template>

<script>
export default {
  name: 'YnCardWriter',
  props: {
    writer: {
      type: String,
      default: 'Card Writer'
    }
  }
}
</script>

<style lang="scss" scoped>
.yn-card-score-writer {
  grid-column: 6 / 11;
  text-align: left;
  font-size: 12px;
  color: gray;
  padding-top: 5px;
}
</style>
