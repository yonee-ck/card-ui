<template>
  <div>
    <h1>카드 UI</h1>
    <div>
      <div class="column vertical">
        <yn-card :img="img">
          <yn-card-header>
            <yn-card-subtitle>{{ subtitle }}</yn-card-subtitle>
            <yn-card-title>{{ title }}</yn-card-title>
          </yn-card-header>
          <yn-card-content>
            <yn-card-highlight>{{ highlight }}</yn-card-highlight>
            <yn-card-cross-out>{{ cross }}</yn-card-cross-out>
          </yn-card-content>
          <yn-card-bottom>
            <yn-card-score :score="score"/>
            <yn-card-description>
              {{ description }}
            </yn-card-description>
          </yn-card-bottom>
        </yn-card>
      </div>
      <div class="column vertical">
        <yn-card :img="img">
          <yn-card-header>
            <yn-card-subtitle>{{ subtitle }}</yn-card-subtitle>
            <yn-card-title>{{ title }}</yn-card-title>
          </yn-card-header>
          <yn-card-content>
            <yn-card-highlight>{{ highlight }}</yn-card-highlight>
            <yn-card-cross-out>{{ cross }}</yn-card-cross-out>
          </yn-card-content>
          <yn-card-bottom>
            <yn-card-score :score="3"/>
          </yn-card-bottom>
        </yn-card>
      </div>
      <div class="column vertical">
        <yn-card :img="img">
          <yn-card-header>
            <yn-card-subtitle>{{ subtitle }}</yn-card-subtitle>
            <yn-card-title>{{ title }}</yn-card-title>
          </yn-card-header>
          <yn-card-content>
            <yn-card-highlight>{{ highlight }}</yn-card-highlight>
            <yn-card-cross-out>{{ cross }}</yn-card-cross-out>
          </yn-card-content>
        </yn-card>
      </div>
      <div class="column horizontal">
        <yn-card horizontal :img="img">
          <yn-card-header>
            <yn-card-title>{{ title }}</yn-card-title>
          </yn-card-header>
          <yn-card-content>
            <yn-card-description>
              {{ description }}
            </yn-card-description>
          </yn-card-content>
          <yn-card-bottom>
            <yn-card-score :score="3">| {{ writer }}</yn-card-score>
          </yn-card-bottom>
        </yn-card>
      </div>
    </div>
  </div>
</template>

<script>
import YnCardHeader from '@/components/card/YnCardHeader'
import YnCardContent from '@/components/card/YnCardContent'
import YnCardBottom from '@/components/card/YnCardBottom'
import YnCard from '@/components/card/YnCard'
import YnCardTitle from '@/components/card/YnCardTitle'
import YnCardSubtitle from '@/components/card/YnCardSubtitle'
import YnCardScore from '@/components/card/YnCardScore'
import YnCardDescription from '@/components/card/YnCardDescription'
import YnCardHighlight from '@/components/card/YnCardHighlight'
import YnCardCrossOut from '@/components/card/YnCardCrossOut'

export default {
  name: 'Card',
  components: {
    YnCardHeader,
    YnCardContent,
    YnCardBottom,
    YnCard,
    YnCardTitle,
    YnCardSubtitle,
    YnCardScore,
    YnCardDescription,
    YnCardHighlight,
    YnCardCrossOut
  },
  data () {
    return {
      img: require('../../assets/images/sample1.png'),
      subtitle: 'Card Subtitle',
      title: 'Card Title1',
      highlight: 'Highlight',
      cross: 'Cross Out',
      score: 4,
      description: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet',
      writer: 'John Doe'
    }
  }
}
</script>

<style lang="scss" scoped>
.column {
  display: inline-block;
  margin: 10px;
  float: left;
  &.vertical {
    width: 250px;
  }
  &.horizontal {
    width: 350px;
  }
}
</style>
