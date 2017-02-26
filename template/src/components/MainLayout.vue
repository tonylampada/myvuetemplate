<template>
  <div id="main" :class="{'sidebar-active': show_sidebar}">
    <section class="hero is-bold app-navbar animated slideInDown">
      <div class="hero-head">
        <nav class="nav">
          <div class="nav-left">
            <a class="nav-item is-hidden-tablet" @click="toggle_sidebar">
              <i aria-hidden="true" class="fa fa-bars"></i>
            </a>
            <a href="#" class="nav-item">Esquerda</a>
          </div>
          <div class="nav-center">
            <a href="#" class="nav-item">
              <div aria-label="v0.1.9" class="is-hidden-mobile tooltip tooltip--right tooltip--success tooltip--small tooltip--rounded tooltip--always tooltip--no-animate">
                <span class="vue">Teste</span>
                <strong class="admin">Sidebar</strong>
              </div>
            </a>
            <a href="#" class="nav-item">
              Meio
            </a>
          </div> 
          <div class="nav-right is-flex">
            <a href="#" class="nav-item">Direita</a>
          </div>
        </nav>
      </div>
    </section>

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
  }
}
</script>

<style lang="scss">
</style>

<style scoped lang="scss">
  .app-navbar {
      position: fixed;
      min-width: 100%;
      z-index: 1024;
      box-shadow: 0 2px 3px hsla(0,0%,7%,.1),0 0 0 1px hsla(0,0%,7%,.1)
  }
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

  .app-navbar .container {
      margin: auto 10px
  }

  .app-navbar .nav-right {
      -ms-flex-align: stretch;
      align-items: stretch;
      -ms-flex: 1;
      flex: 1;
      -ms-flex-pack: end;
      justify-content: flex-end;
      overflow: hidden;
      overflow-x: auto;
      white-space: nowrap
  }

  .app-sidebar .icon {
      vertical-align: baseline
  }

  .app-sidebar .icon.is-angle {
      position: absolute;
      right: 10px;
      transition: transform .377s ease
  }

  .app-sidebar .menu-label {
      padding-left: 5px
  }

  .app-sidebar .menu-list li a[aria-expanded=true] .is-angle {
      transform: rotate(180deg)
  }

  .app-sidebar .menu-list li a+ul {
      margin: 0 10px 0 15px
  }
</style>
