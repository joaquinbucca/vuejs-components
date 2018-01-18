<template>
  <div>
    <textarea
      class="form-control"
      v-model="value"
      v-on:change="emitChange"
      v-on:blur="emitBlur"
      v-on:focus="emitFocus"
      :placeholder="placeholder"
      :disabled="disabled"
    />
  </div>
</template>
<script>
export default {
  name: 'Textarea',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    emitChange: (e) => {
      if (this.disabled) {
        e.stopPropagation();
        e.preventDefault();
      } else this.$emit('value', e.target.value)
    },
    emitFocus: (e) => this.$emit('focus', e.target.value),
    emitBlur: (e) => this.$emit('blur', e.target.value)
  }
}
</script>

<style>
</style>
