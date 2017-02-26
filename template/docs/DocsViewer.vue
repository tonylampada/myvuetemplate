<template>
  <div>
      <button @click="showSource">Source</button>
      <button @click="showLive">Live</button>
      <div v-if="showcode">
        Look ma, the source
        <pre>{{getcomponent(name).source}}</pre>
      </div>
      <div v-if="!showcode">
        Look ma, the component
        <component :is="getcomponent(name)"></component>
      </div>
      
  </div>
</template>

<script>
import DocsRegistry from './docs-registry'

export default {
  data () {
    return {
      showcode: false,
      code: '',
    }
  },
  methods: {
    getcomponent(n){
      return DocsRegistry.get(n);
    },
    showSource(){
      this.code = this.getcomponent(this.name).source;
      this.showcode = true;
    },
    showLive(){
      this.showcode = false;
    }
  },
  components: {},
  props: ['name']
}
</script>
