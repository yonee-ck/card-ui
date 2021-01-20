<template>
  <div class="yn-card-highlight">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'YnCardHighlight'
}
</script>

<style lang="scss" scoped>
.yn-card-highlight {
  color: red;
}
</style>
