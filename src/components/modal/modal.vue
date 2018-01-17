<template>
    <transition name="modal">
        <div class="modal modal-mask" style="display: block">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <!-- header -->
                    <div v-if="title" class="modal-header">
                        <h2>{{title}}</h2>
                    </div>
                    <!-- body -->
                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>
                    <!-- footer -->
                    <div class="modal-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-body {
        position: relative;
        padding: 15px;
        overflow: scroll;
        height: 500px;
        width:700px;
    }

    button.close {
        -webkit-appearance: none;
        padding: 0;
        cursor: pointer;
        background: 0 0;
        border: 0;
        position: absolute;
        right: 25px;
        top: 25px;
    }

    .modal-content {
        width: 700px;
    }
</style>