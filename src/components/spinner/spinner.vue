<template>
  <div v-bind:class="className">
    <div class="spinner" :style="spinnerStyle"></div>
    <div class="spinner-text" :style="textStyle" v-if="message.length > 0">{{message}}</div>
  </div>
</template>

<script>
const isNumber = (n) => !isNaN(parseFloat(n)) && isFinite(n)
export default {
  name: 'spinner',
  props: {
    size: {
      // either a number (pixel width/height) or 'tiny', 'small',
      // 'medium', 'large', 'huge', 'massive' for common sizes
      default: 32
    },
    lineSize: {
      type: Number,
      default: 3
    },
    lineBgColor: {
      type: String,
      default: '#eee'
    },
    lineFgColor: {
      type: String,
      default: '#2196f3'
    },
    speed: {
      type: Number,
      default: 0.8
    },
    spacing: {
      type: Number,
      default: 4
    },
    message: {
      type: String,
      default: ''
    },
    fontSize: {
      type: Number,
      default: 13
    },
    textFgColor: {
      type: String,
      default: '#555'
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    sizePx () {
      switch (this.size) {
        case 'tiny':
          return 12
        case 'small':
          return 16
        case 'medium':
          return 32
        case 'large':
          return 48
        case 'big':
          return 64
        case 'huge':
          return 96
        case 'massive':
          return 128
      }
      return isNumber(this.size) ? this.size : 32
    },
    lineSizePx () {
      switch (this.size) {
        case 'tiny':
          return 1
        case 'small':
          return 2
        case 'medium':
          return 3
        case 'large':
          return 3
        case 'big':
          return 4
        case 'huge':
          return 4
        case 'massive':
          return 5
      }
      return isNumber(this.lineSize) ? this.lineSize : 4
    },
    textMarginTop () {
      switch (this.size) {
        case 'tiny':
        case 'small':
        case 'medium':
        case 'large':
        case 'big':
        case 'huge':
        case 'massive':
          return Math.min(Math.max(Math.ceil(this.sizePx / 8), 3), 12)
      }
      return isNumber(this.spacing) ? this.spacing : 4
    },
    textFontSize () {
      switch (this.size) {
        case 'tiny':
        case 'small':
        case 'medium':
        case 'large':
        case 'big':
        case 'huge':
        case 'massive':
          return Math.min(Math.max(Math.ceil(this.sizePx * 0.4), 11), 32)
      }
      return isNumber(this.fontSize) ? this.fontSize : 13
    },
    spinnerStyle () {
      return {
        'margin': '0 auto',
        'border-radius': '100%',
        'border': this.lineSizePx + 'px solid ' + this.lineBgColor,
        'border-top': this.lineSizePx + 'px solid ' + this.lineFgColor,
        'width': this.sizePx + 'px',
        'height': this.sizePx + 'px',
        'animation': 'vue-simple-spinner-spin ' + this.speed + 's linear infinite'
      }
    },
    textStyle () {
      return {
        'margin-top': this.textMarginTop + 'px',
        'color': this.textFgColor,
        'font-size': this.textFontSize + 'px',
        'text-align': 'center'
      }
    }
  }
}
</script>

<style>
  .spinner {
    transition: all 0.3s linear;
  }

  @keyframes spinner-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>]
