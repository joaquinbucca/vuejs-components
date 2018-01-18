<template>
  <div class="form-check">
    <select class="form-control" :disabled="disabled" v-on:change="emitChange">
      <option v-for="option in options" :value="option.value">{{option.label}}</option>
    </select>
  </div>
</template>
<script>
  export default {
    name: 'Select',
    props: {
      options: {
        type: Array,
        default: []
      },
      disabled: {
        type: Boolean,
        default: false
      }

    },
    methods: {
      emitChange: (e) => {
        if (this.disabled) {
          e.stopPropagation();
          e.preventDefault();
        } else this.$emit('value', e.target.value)
      }
    }
  }
</script>
