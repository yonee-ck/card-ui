<template>
  <div class="yn-card-subtitle">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'YnCardSubtitle'
}
</script>

<style lang="scss" scoped>
.yn-card-subtitle {
  text-align: left;
  font-size: 12px;
  color: gray;
}
</style>
