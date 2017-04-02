<template>
  <div>
    <LoginModal></LoginModal>
    <MainLayout :menuitems="menuitems">
      <router-view></router-view>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from './components/MainLayout.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'
import LoginModal from './components/LoginModal.vue'
import AuthSvc from 'src/services/AuthSvc.js'

AuthSvc.init();

export default {
  data () {
    return {
      menuitems: [
        {icon: 'tachometer', label: 'Dashboard', children:[
          {label: 'Todo', routerpath: '/todo'},
          {label: 'Issues', routerpath: '/issues'},
        ]},
        {icon: 'bar-chart-o', label: 'Bla'},
        {icon: 'laptop', label: 'blum'},
      ],
    }
  },
  components: {
    MainLayout, 
    LoginModal,
  }
}
</script>

<style lang="scss">
// @import '~bulma/sass/base/_all';
// @import '~bulma/sass/utilities/_all.sass';
// @import '~bulma/sass/elements/button.sass';
@import '~bulma';
@import '~font-awesome/css/font-awesome.css';
@import '~animate.css';
@import './scss/_animations.scss'


/*
Esse '~' se refere a "node_modules/"
No caso, node_modules/bulma/package.json tem um atributo main = 'bulma.sass', portanto
@import '~bulma' eh equivalente a @import '~bulma/bulma.sass';
*/

</style>
