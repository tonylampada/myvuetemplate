<template>
  <Modal :title="'Log in'" :visible="visible" @close="visible = false" @ok="login()">
    <div slot="body">
      <div class="field is-grouped">
        <div class="control">
          <input class="input" v-model="username" placeholder="Usuário">
        </div>
        <div class="control">
          <input type="password" class="input" v-model="password" placeholder="Senha" @keyup.enter="login()">
        </div>
        <p class="help is-danger"v-if="login_error">Usuário ou senha inválido</p>
      </div>
    </div>
    <div slot="footer">
      <a class="button is-success" @click="login()">
        Login
        <span v-if="AuthSvc.state == 'UNKNOWN'">&nbsp;<i class="fa fa-spinner animation-spin"> </i> </span>
      </a>
      <a class="button" @click="$emit('close')">Cancel</a>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue'
import AuthSvc from 'src/services/AuthSvc.js'

const LoginModalSvc = {
  AuthSvc,
  visible: false,
  username: '',
  password: '',
  login_error: false,
  show(){
    this.username = '';
    this.password = '';
    this.login_error = false;
    this.visible = true;
  }
}

export default {
  name: 'ModalDocs',
  data () {
    return LoginModalSvc;
  },
  methods: {
    login(){
      this.login_error = false;
      AuthSvc.authenticate(this.username, this.password).then(() => {
        if(AuthSvc.state == 'LOGGED'){
          this.visible = false;
        } else {
          this.login_error = true;
        }
      })
    },
  },
  components: {Modal},
}
</script>
