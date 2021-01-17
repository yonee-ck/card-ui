<template>
  <div></div>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      contents: [{
        img: 'logo.png',
        label: 'Card Label1',
        title: 'Card Title1',
        description: 'Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        score: 3
      },
      {
        img: 'logo.png',
        label: 'Card Label2',
        title: 'Card Title2',
        description: 'Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        score: 2
      },
      {
        img: 'logo.png',
        label: 'Card Label3',
        title: 'Card Title3',
        description: 'Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        score: 4.5
      }]
    }
  }
}
</script>

<style scoped>

</style>
