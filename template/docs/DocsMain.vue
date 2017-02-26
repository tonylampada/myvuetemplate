<template>
  <MainLayout :menuitems="menuitems">
    <router-view></router-view>
  </MainLayout>
</template>

<script>
import VueRouter from 'vue-router'
import Vue from 'vue'
import MainLayout from 'src/components/MainLayout.vue'
import DocsRegistry from './docs-registry'

export default {
  data () {

    var children = DocsRegistry.components.map(c => {
        return {label: c.name, routerpath: '/view/'+c.name}
    });
    return {
      menuitems: [
        {
            icon: 'tachometer', 
            label: 'Dashboard', 
            children: children,
        }
      ],
    }
  },
  components: {MainLayout}
}
</script>

<style lang="scss">
@import '~bulma';
@import '~font-awesome/css/font-awesome.css';
@import '~animate.css';
</style>
