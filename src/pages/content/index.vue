<template>
  <div>
    <h1>카드 UI</h1>
    <yn-card :horizontal="horizontal" :img="img" :label="label" :title="title">
      <div class="yn-card-footer">
        <yn-card-score :score="score" />
        <yn-card-description :description="description" />
      </div>
    </yn-card>
    <yn-card :horizontal="horizontal" :img="img" :label="label" :title="title">
      <div class="yn-card-footer">
        <yn-card-score :score="3" />
      </div>
    </yn-card>
    <yn-card :horizontal="horizontal" :img="img" :label="label" :title="title" />
    <yn-card :horizontal="true" :img="img" :label="label" :title="title">
      <yn-card-score :score="3">
        <yn-card-writer :writer="writer" />
      </yn-card-score>
    <yn-card-description :description="description" />
    </yn-card>
  </div>
</template>

<script>
import YnCard from '@/components/card/YnCard'
import YnCardScore from '@/components/card/YnCardScore'
import YnCardDescription from '@/components/card/YnCardDescription'
import YnCardWriter from '@/components/card/YnCardWriter'

export default {
  name: 'Content',
  components: { YnCard, YnCardScore, YnCardDescription, YnCardWriter },
  data () {
    return {
      horizontal: false,
      img: require('../../assets/images/sample1.png'),
      label: 'Card Label1',
      title: 'Card Title1',
      score: 4,
      description: 'Lorem ipsum dolor sit amet..',
      writer: 'John Doe'
    }
  }
}
</script>

<style scoped>

</style>
