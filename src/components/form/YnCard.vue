<template>
  <div class="yn-card">
<!--    <img :src="`@/assets/images/${img}`">-->
    <img src="@/assets/images/sample1.png">
    <div class="yn-card-header">
      <div class="yn-card-label">{{ label }}</div>
      <div class="yn-card-title">{{ title }}</div>
    </div>
    <div class="yn-card-etc">
      <div class="yn-card-etc-hi">Hilight</div>
      <div class="yn-card-etc-cross">Cross Out</div>
    </div>
    <div class="yn-card-footer">
      <yn-score :score="score"></yn-score>
<!--      <div class="yn-card-score">{{ score }}</div>-->
      <div class="yn-card-desc">{{ description }}</div>
    </div>
  </div>
</template>

<script>
import YnScore from '@/components/YnScore'
export default {
  name: 'YnCard',
  components: { YnScore },
  props: {
    type: {
      type: String,
      default: 'vertical'
    },
    img: {
      type: String,
      default: 'sample3.png'
    },
    label: {
      type: String,
      default: 'Card Label'
    },
    title: {
      type: String,
      default: 'Card Title'
    },
    score: {
      type: Number,
      default: 5
    },
    description: {
      type: String,
      default: 'Card Description'
    }
  }
}
</script>

<style lang="scss" scoped>
.yn-card {
  display: inline-block;
  float: left;
  width: 25%;
  margin: 10px;
  border: 1px solid darkgray;
  border-radius: 2px;
  background-color: lightgray;
  &-header {
    margin: 10px 0 50px 10px;
  }
  &-label {
    text-align: left;
    font-size: 12px;
    color: gray;
  }
  &-title {
    float: left;
    margin-top: 5px;
    font-size: 13px;
    font-weight: bold;
  }
  &-etc {
    display: grid;
    grid-template-columns: 1fr 5fr;
    margin: 10px;
    font-size: 12px;
    float: left;
    &-hi {
      color: red;
    }
    &-cross {
      text-align: left;
      margin-left: 10px;
      text-decoration: line-through;
      color: gray;
    }
  }
  &-footer {
    border-top: 1px solid gray;
    margin: 10px;
  }
  &-desc {
    font-size: 12px;
    float: left;
    color: gray;
  }
  img {
    width: 100%;
  }
}
@media screen and ( min-width: 0px) and ( max-width: 799px){ /* 안드로이드 , ios */
  .yn-card {
    width: 50%;
  }
}
</style>
