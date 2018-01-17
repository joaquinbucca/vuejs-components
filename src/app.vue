<template>
    <div id="app">
        <div id="modal">
            <h1>Modal</h1>
            <modal title="Some fancy title">
                <div slot="body">
                    <p>Some text as body</p>
                </div>
                <div slot="footer">
                    <button>Close button</button>
                </div>
            </modal>
        </div>

    </div>
</template>

<script>
import Modal from '@/components/modal/modal.vue'

export default {
    name: 'App',
    components: {Modal}
}
</script>

<style type = "text/css">
    /* comon styles go in here */
    body {
        background-color: #EDEDED;
        color: #333333;
        font-size: 14px;
        font-family: "Lato", "Helvetica", sans-serif;
    }

    .bg-dark {
        background-color: #303042;
        color: #FFF;
    }
    .bg-dark a {
        color: #FFF;
    }

    .bg-white {
        background-color: #FFF;
    }
</style>
