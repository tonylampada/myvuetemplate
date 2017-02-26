<template>
  <div>
    <div class="control is-grouped">
      <input class="input" v-model="text">
      <button class="button is-primary" @click="add">Add</button>
    </div>
    <table class="table">
      <tr v-for="item in items">
        <td class="coluninha"><input class="checkbox" type="checkbox" v-model="item.done"></td>
        <td :class="{riscado: item.done}">\{{item.text}}</td>
        <button class="button is-danger" @click="remove(item)">Remover</td>
      </tr>
    </table>
  </div>
</template>

<script>

var DATA = {
  text: '',
  items: []
};

export default {
  name: 'Todo',
  data () {
    return DATA;
  },
  methods: {
    add() {
      this.items.push({text:this.text, done: false});
      this.text = '';
    },
    remove(item) {
      var idx = this.items.indexOf(item);
      if(idx >= 0){
        this.items.splice(idx, 1);
      }
    }
  }
}
</script>

<style lang="scss">
</style>

<style scoped lang="scss">
.riscado {
  text-decoration: line-through;
}
.coluninha {
  width: 40px;
}
</style>
