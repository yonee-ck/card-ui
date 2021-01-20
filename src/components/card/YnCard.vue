<template>
  <div class="yn-card" :class="{horizontal: horizontal}">
    <img :src="img">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'YnCard',
  props: {
    horizontal: {
      type: Boolean,
      default: false
    },
    img: {
      type: String,
      default: require('../../assets/images/sample2.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.yn-card {
  display: inline-grid;
  float: left;
  width: 100%;
  min-width: 200px;
  margin: 10px;
  border: 1px solid darkgray;
  border-radius: 2px;
  background-color: lightgray;
  img {
    width: 100%;
  }
  &.horizontal {
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: 0.5fr 1fr 0.5fr;
    width: 100%;
    min-width: 300px;
    img {
      height: 100%;
      grid-row: 1 / 4;
    }
  }
}
</style>
