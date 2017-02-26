// require('~font-awesome');
import Vue from 'vue'
import DocsMain from './DocsMain.vue'
import VueRouter from 'vue-router'
import DocsViewer from './DocsViewer.vue'

Vue.use(VueRouter);
const routes = [
  { path: '/view/:name', component: DocsViewer, props: true },
];
const router = new VueRouter({routes})


new Vue({
  el: '#app',
  router: router,
  components: {},
  render: h => h(DocsMain)
})
