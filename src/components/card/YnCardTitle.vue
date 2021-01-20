<template>
  <div class="yn-card-title">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'YnCardTitle',
  props: {
    title: {
      type: String,
      default: 'Card Title'
    }
  }
}
</script>

<style lang="scss" scoped>
.yn-card-title {
  text-align: left;
  margin-top: 5px;
  font-size: 13px;
  font-weight: bold;
}
</style>
