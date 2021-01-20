<template>
  <div class="yn-card-desc">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'YnDescription'
}
</script>

<style lang="scss" scoped>
.yn-card {
  &-desc {
    font-size: 12px;
    color: gray;
    text-align: left;
    text-overflow : ellipsis;
    overflow: hidden;
    white-space: normal;
    line-height: 1.2;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  &.horizontal {
    .yn-card {
      &-desc {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
      }
    }
  }
}
</style>
