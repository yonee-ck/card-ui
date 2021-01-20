<template>
  <div class="yn-card-hilight">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'YnCardHilight'
}
</script>

<style lang="scss" scoped>
.yn-card-hilight {
  color: red;
}
</style>
