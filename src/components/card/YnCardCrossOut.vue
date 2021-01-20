<template>
  <div class="yn-card-cross">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'YnCardCrossOut'
}
</script>

<style lang="scss" scoped>
.yn-card-cross {
  text-align: left;
  margin-left: 10px;
  text-decoration: line-through;
  color: gray;
}
</style>
