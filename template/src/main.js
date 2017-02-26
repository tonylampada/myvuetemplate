// require('~font-awesome');
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Todo from './components/Todo.vue'
import Issues from './components/Issues.vue'

Vue.use(VueRouter);
const routes = [
  // { path: '/todo', component: {template: '<div><Todo></Todo></div>'} },
  { path: '/todo', component: Todo },
  { path: '/issues', component: Issues },
];
const router = new VueRouter({routes})


new Vue({
  el: '#app',
  router: router,
  components: {Todo},
  render: h => h(App)
})
