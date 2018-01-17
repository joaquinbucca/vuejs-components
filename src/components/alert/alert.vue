<template>
    <div class="alert" v-bind:class="`alert-${kind}`" role="alert">
        {{message}}
        <slot name="action" />
    </div>

</template>

<script>
  export default {
    name: 'alert',
    props: {
      message: {
        type: String,
        default: ''
      },
      kind: {
        type: String,
        default: 'primary'
      }
    }
  }
</script>

<style>
</style>