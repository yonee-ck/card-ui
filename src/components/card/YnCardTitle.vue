<template>
  <div class="yn-card-title">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'YnCardTitle'
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
