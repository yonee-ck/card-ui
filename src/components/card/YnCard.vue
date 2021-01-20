<template>
  <div class="yn-card" :class="{horizontal: horizontal}">
    <img :src="img">
    <div class="yn-card-header">
      <div class="yn-card-label">{{ label }}</div>
      <div class="yn-card-title">{{ title }}</div>
    </div>
    <div class="yn-card-etc">
      <div class="yn-card-etc-hi">Hilight</div>
      <div class="yn-card-etc-cross">Cross Out</div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'YnCard',
  props: {
    horizontal: {
      type: Boolean,
      default: false
    },
    img: {
      type: String,
      default: require('../../assets/images/sample2.png')
    },
    label: {
      type: String,
      default: 'Card Label'
    },
    title: {
      type: String,
      default: 'Card Title'
    }
  }
}
</script>

<style lang="scss" scoped>
.yn-card {
  display: inline-grid;
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
    text-align: left;
    margin-top: 5px;
    font-size: 13px;
    font-weight: bold;
  }
  &-etc {
    display: grid;
    grid-template-columns: 1fr 5fr;
    margin: 10px;
    font-size: 12px;
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
    display: grid;
    border-top: 1px solid gray;
  }
  &-desc {
    font-size: 12px;
    color: gray;
    text-align: left;
    margin: 0 10px 10px 10px;
  }
  img {
    width: 100%;
  }
  &.horizontal {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 0.5fr 1fr 0.5fr;
    width: 33.333%;
    img {
      height: 100%;
      grid-row: 1 / 4;
    }
    .yn-card {
      &-label {
        display: none;
      }
      &-etc {
        display: none;
      }
      &-score {
        grid-column: 2 / 3;
      }
      &-desc {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
      }
    }
  }
}
@media screen and ( min-width: 0px) and ( max-width: 799px){ /* 안드로이드 , ios */
  .yn-card {
    width: 50%;
  }
}
</style>
