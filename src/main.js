import Vue from 'vue';

import App from '@/app.vue';
import 'bootstrap/dist/css/bootstrap.min.css'; // import this here so it's globally accessible
import 'font-awesome/css/font-awesome.min.css';

//
// Main App
//
new Vue({
  template: "<App/>",
  components: { App }
}).$mount('#app');
