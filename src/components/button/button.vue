<template>
  <button :class="classObject" :disabled="disabled || isLoading" v-on:click="onClick">
    {{text}}
    <Spinner size="small" v-if={isLoading} />
  </button>
</template>

<script>
import Spinner from '@/components/spinner/spinner.vue';

export default {
  name: 'Button',
  components: [Spinner],
  props: {
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
    }
  },
  computed: {
    buttonKind: () => `btn-${this.kind}`,
    classObject: () => ['btn', this.buttonKind]
  },
  methods: {
    onClick (e) {
      if (this.disabled && e instanceof Event) {
        e.stopPropagation()
        e.preventDefault()
      } else this.$emit('clicked')
    }
  }
}

</script>

<style>
</style>
