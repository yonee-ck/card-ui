<template>
  <div>
    <h1>입력 폼 UI</h1>
    <yn-textarea v-model="text" :placeholder="placeholder" :disabled="disabled" :maxlength="maxlength" />
    <yn-textarea v-model="text" :placeholder="placeholder" :disabled="disabled" :maxlength="maxlength" :action="true" @save="saveTxt" />
    <yn-textarea v-model="text" :placeholder="placeholder" :disabled="true" :maxlength="maxlength" />
  </div>
</template>

<script>
import YnTextarea from '@/components/form/YnTextarea'

export default {
  name: 'index',
  components: { YnTextarea },
  data () {
    return {
      text: '',
      placeholder: '초기값이 있을 수 있습니다.',
      disabled: false,
      maxlength: 500
    }
  },
  methods: {
    saveTxt (txt) {
      alert(txt + ' 가 저장되었습니다!')
    }
  }
}
</script>

<style scoped>

</style>
