<template>
  <div v-bind:class="className" class="textfield">
    <input
      ref={this.refInput}
    data-test-id={testId && `${testId}-input`}
    name={name}
    type={finalType}
    value={valueToUse}
    onChange={this.handleChange}
    onFocus={this.handleFocus}
    onBlur={this.handleBlur}
    onKeyPress={this.handleKeyPress}
    placeholder={placeholder}
    {...props}
    />
  </div>
</template>
<script>
export default {
  name: 'textfield',
  props: {
    className: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.textfield {
  display: block;
}
</style>
