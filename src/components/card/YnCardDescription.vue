<template>
  <div class="yn-card-desc">
    {{ description }}
  </div>
</template>

<script>
export default {
  name: 'YnDescription',
  props: {
    description: {
      type: String,
      default: 'Card Description'
    }
  }
}
</script>

<style scoped>

</style>
