<template>
  <div>
    <h1>카드 UI</h1>
    <yn-card :type="type" :label="label" :title="title" :score="score" :description="description" />
    <yn-card :type="type" :label="label" :title="title" :score="3" :description="description" />
    <yn-card :type="type" :label="label" :title="title" :score="score" :description="description" />
  </div>
</template>

<script>
import YnCard from '@/components/form/YnCard'

export default {
  name: 'Content',
  components: { YnCard },
  data () {
    return {
      type: 'vertical',
      img: 'sample1.png',
      label: 'Card Label1',
      title: 'Card Title1',
      score: 4,
      description: 'Lorem ipsum dolor sit amet..'
    }
  }
}
</script>

<style scoped>

</style>
