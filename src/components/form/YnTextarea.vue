<template>
  <div class="yn-textarea" :class="{ btn: action }">
    <div class="yn-textarea-inner" :class="{ disabled: disabled }">
      <textarea class="yn-textarea-inner-txt" :value="value" :placeholder="placeholder" :maxlength="maxlength" :disabled="disabled" @input="change"></textarea>
      <p class="yn-textarea-inner-txt-limit">
        {{ value.length }}/{{ maxlength }}
      </p>
    </div>
    <button v-if="action" :disabled="!active" @click="save">save</button>
  </div>
</template>

<script>
export default {
  name: 'YnTextarea',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '초기값이 있을 수 있습니다.'
    },
    maxlength: {
      type: Number,
      default: 500
    },
    disabled: {
      type: Boolean,
      default: false
    },
    action: {
      type: Boolean,
      default: false
    }
  },
  created () {
    this.initValue = this.value
  },
  computed: {
    active () {
      return this.initValue !== this.value
    }
  },
  methods: {
    change (e) {
      this.$emit('input', e.target.value)
    },
    save () {
      this.$emit('save', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.yn-textarea {
  display: grid;
  &.btn {
    grid-template-columns: 3fr 1fr;
  }
  &-inner {
    border: 1px solid gray;
    border-radius: 2px;
    margin-bottom: 10px;
    &.disabled {
      background-color: lightgray;
    }

    &-txt {
      width: 100%;
      border: none;
      padding: 0 20px;
      display: block;
      resize: none;
      background: none;
      margin: 12px 0;
      outline: none;
      &:disabled::placeholder {
        color: red;
      }

      &-limit {
        padding: 0 20px 6px;
        margin-top: -18px;
        font-size: 12px;
        text-align: right;
        color: gray;
      }
    }
  }
  button {
    margin: 0 0 10px 10px;
  }
}
</style>
