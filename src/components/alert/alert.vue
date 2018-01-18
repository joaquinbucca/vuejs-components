<template>
  <div :class="classObject" v-if="localShow" role="alert" aria-atomic="true" aria-live="polite">
    <slot name="message"/>
    <button class="close" v-if="dismissible" :aria-label="dismissLabel" v-on:click="dismiss"/>
  </div>

</template>

<script>
  export default {
    name: 'Alert',
    props: {
      kind: {
        type: String,
        default: 'info'
      },
      dismissible: {
        type: Boolean,
        default: false
      },
      dismissLabel: {
        type: String,
        default: 'Close'
      },
      show: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({dismissed: false}),
    computed: {
      classObject () {
        return ['alert', this.alertKind, this.dismissible ? 'alert-dismissible' : '']
      },
      alertKind () {
        const kind = this.kind
        return `alert-${kind}`
      },
      localShow () {
        return !this.dismissed && this.show
      }
    },
    methods: {
      dismiss () {
        this.dismissed = true
        this.$emit('dismissed')
      }
    }
  }
</script>

<style>
</style>
