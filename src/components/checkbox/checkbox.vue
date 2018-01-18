<template>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" :checked="checked" :disabled="disabled" v-on:change="emitChange">
    <label class="form-check-label">
      {{label}}
      <span class="form-check-description">
        <slot name="description"></slot>
      </span>
    </label>
  </div>
</template>
<script>
  export default {
    name: 'Checkbox',
    props: {
      checked: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ''
      }

    },
    methods: {
      emitChange: (e) => {
        if (this.disabled) {
          e.stopPropagation();
          e.preventDefault();
        } else this.$emit('checked', !this.checked)
      }
    }
  }
</script>
