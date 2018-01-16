<template>
  <button class="btn" v-bind:class="className" v-bind:disabled="disabled || isLoading" onclick="onClick">
    <span v-if={text}>{text}</span>
    <spinner size="small" v-if={isLoading} />
  </button>
</template>

<script>
export default {
  name: 'vue-button',
  props: {
    className: {
      type: String,
      default: ''
    },
    kind: {
      // primary, secondary, danger, default, etc
      type: String,
      default: 'default'
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  }
}

</script>

<style>
</style>
