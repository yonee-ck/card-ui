<template>
  <div class="yn-card-bottom">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'YnCardBottom'
}
</script>

<style lang="scss" scoped>
.yn-card-bottom {
  display: grid;
  border-top: 1px solid gray;
  padding: 10px;
}
</style>
