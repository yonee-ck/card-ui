<template>
  <div>
    <h1>카드 UI</h1>
    <yn-card :img="img">
      <yn-card-header>
        <yn-card-subtitle :subtitle="subtitle" />
        <yn-card-title :title="title" />
      </yn-card-header>
      <yn-card-content>
        <yn-card-hilight>
          {{ hilight }}
        </yn-card-hilight>
        <yn-card-cross-out>
          {{ cross }}
        </yn-card-cross-out>
      </yn-card-content>
      <yn-card-bottom>
        <yn-card-score :score="score" />
        <yn-card-description>
          {{ description }}
        </yn-card-description>
      </yn-card-bottom>
    </yn-card>
    <yn-card :img="img">
      <yn-card-header>
        <yn-card-subtitle :subtitle="subtitle" />
        <yn-card-title :title="title" />
      </yn-card-header>
      <yn-card-content>
        <yn-card-hilight>
          {{ hilight }}
        </yn-card-hilight>
        <yn-card-cross-out>
          {{ cross }}
        </yn-card-cross-out>
      </yn-card-content>
      <yn-card-bottom>
        <yn-card-score :score="3" />
      </yn-card-bottom>
    </yn-card>
    <yn-card :img="img">
      <yn-card-header>
        <yn-card-subtitle :subtitle="subtitle" />
        <yn-card-title :title="title" />
      </yn-card-header>
      <yn-card-content>
        <yn-card-hilight>
          {{ hilight }}
        </yn-card-hilight>
        <yn-card-cross-out>
          {{ cross }}
        </yn-card-cross-out>
      </yn-card-content>
    </yn-card>
    <yn-card horizontal :img="img">
      <yn-card-header>
        <yn-card-title :title="title" />
      </yn-card-header>
      <yn-card-content>
        <yn-card-description>
          {{ description }}
        </yn-card-description>
      </yn-card-content>
      <yn-card-bottom>
        <yn-card-score :score="3">
          | {{ writer }}
        </yn-card-score>
      </yn-card-bottom>
    </yn-card>
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
import YnCardHilight from '@/components/card/YnCardHilight'
import YnCardCrossOut from '@/components/card/YnCardCrossOut'

export default {
  name: 'Content',
  components: { YnCardHeader, YnCardContent, YnCardBottom, YnCard, YnCardTitle, YnCardSubtitle, YnCardScore, YnCardDescription, YnCardHilight, YnCardCrossOut },
  data () {
    return {
      img: require('../../assets/images/sample1.png'),
      subtitle: 'Card Subtitle',
      title: 'Card Title1',
      hilight: 'Hilight',
      cross: 'Cross Out',
      score: 4,
      description: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet',
      writer: 'John Doe'
    }
  }
}
</script>

<style scoped>

</style>
