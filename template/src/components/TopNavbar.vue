<template>
  <section class="hero is-bold app-navbar animated slideInDown">
    <div class="hero-head">
      <nav class="nav">
        <div class="nav-left">
          <a class="nav-item is-hidden-tablet" @click="$emit('menutoggle')">
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
          <a v-if="AuthSvc.state == 'NOT_LOGGED'" href="#" class="nav-item" @click="show_login()">Login</a>
          <a v-if="AuthSvc.state == 'LOGGED'" href="#" class="nav-item">\{{AuthSvc.logged_user.username}}</a>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
import LoginModal from './LoginModal.vue'
import AuthSvc from 'src/services/AuthSvc.js'

export default {
  data () {
    return {
      AuthSvc,
    }
  },
  methods: {
    show_login(){
      LoginModal.data().show();
    }
  },
}

</script>

<style scoped lang="scss">

  .app-navbar {
      position: fixed;
      min-width: 100%;
      z-index: 1024;
      box-shadow: 0 2px 3px hsla(0,0%,7%,.1),0 0 0 1px hsla(0,0%,7%,.1)
  }

  .nav-right {
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
</style>
