<template>
  <div class="yn-card-subtitle">
    {{ subtitle }}
  </div>
</template>

<script>
export default {
  name: 'YnCardSubtitle',
  props: {
    subtitle: {
      type: String,
      default: 'Card Subtitle'
    }
  }
}
</script>

<style lang="scss" scoped>
.yn-card-subtitle {
  text-align: left;
  font-size: 12px;
  color: gray;
}
</style>
