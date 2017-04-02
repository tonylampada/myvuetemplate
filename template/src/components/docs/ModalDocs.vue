<template>
  <div style="height: 500px;">
    <button @click="show_modal = true">Mostra</button>
    <Modal :title="'Hello World'" :visible="show_modal" @close="show_modal = false" @ok="modal_save()">
      <div slot="body">
        <h1>Formulario</h1>
        <div class="control is-grouped">
          <input class="input" v-model="o.fruta">
          <input class="input" v-model="o.animal">
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>

import Modal from '../Modal.vue'

export default {
  name: 'ModalDocs',
  data () {
    return {
        show_modal: true,
        o: {
            fruta: 'Abacate',
            animal: 'Lobo',
        },
    };
  },
  methods: {
    modal_save(){
        window.alert(JSON.stringify(this.o));
        this.show_modal = false;
    },
  },
  components: {Modal},
}
</script>
