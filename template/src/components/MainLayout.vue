<template>
  <div id="main" :class="{'sidebar-active': show_sidebar}">
    <TopNavbar @menutoggle="toggle_sidebar()"></TopNavbar>

    <aside id="sidebar" class="menu app-sidebar animated">
      <p class="menu-label">
        General
      </p> 
      <TreeMenu :items="menuitems"></TreeMenu>
    </aside>

    <section class="app-main">
      <slot></slot>
    </section>
  </div>
</template>

<script>
import TreeMenu from './TreeMenu.vue'
import TopNavbar from './TopNavbar.vue'

export default {
  data () {
    return {
      show_sidebar: false,
    }
  },
  props: [
    'menuitems'
  ],
  methods: {
    toggle_sidebar(){
      this.show_sidebar = !this.show_sidebar;
    }
  },
  components: {
    TreeMenu,
    TopNavbar,
  }
}
</script>

<style lang="scss">
</style>

<style scoped lang="scss">
  .app-main {
      padding-top: 50px;
      margin-left: 180px;
      transform: translateZ(0)
  }
  .app-sidebar {
      position: fixed;
      top: 50px;
      left: 0;
      bottom: 0;
      padding: 20px 0 50px;
      width: 180px;
      min-width: 45px;
      max-height: 100vh;
      height: calc(100% - 50px);
      z-index: 1023;
      background: #fff;
      box-shadow: 0 2px 3px hsla(0,0%,7%,.1),0 0 0 1px hsla(0,0%,7%,.1);
      overflow-y: auto;
      overflow-x: hidden;
      animation-name: slideInLeft;
  }

  @media screen and (max-width: 768px) {
      .app-main {
          margin-left:0
      }
      .app-sidebar {
          animation-name: slideOutLeft;
      }

      #main.sidebar-active .app-main {
        /*margin-left: 180px;*/
      }
      #main.sidebar-active .app-sidebar {
        animation-name: slideInLeft;
      }
  }

</style>
