<template>
  <div class="yn-card-content">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'YnCardContent'
}
</script>

<style lang="scss" scoped>
.yn-card {
  &-content {
    display: grid;
    grid-template-columns: 1fr 5fr;
    margin: 10px;
    font-size: 12px;
   }
  &.horizontal {
    .yn-card-content {
      display: block;
    }
  }
}
</style>
