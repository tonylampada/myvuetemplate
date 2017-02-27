<template>
  <div>
      <div class="container">
        <div class="tabs">
          <ul>
            <li :class="{'is-active': showcode}"><a @click="showSource">Source</a></li>
            <li :class="{'is-active': !showcode}"><a @click="showLive">Live</a></li>
          </ul>
        </div>
        <div v-if="showcode">
          <CodeHighlight :code="getcomponent(name).source" lang="html"></CodeHighlight>
        </div>
        <div v-if="!showcode">
          <component :is="getcomponent(name)"></component>
        </div>
      </div>
  </div>
</template>

<script>
import DocsRegistry from './docs-registry'
import CodeHighlight from './CodeHighlight.vue'
import Vue from 'vue'

export default {
  data () {
    return {
      showcode: false,
    }
  },
  methods: {
    getcomponent(n){
      return DocsRegistry.get(n);
    },
    showSource(){
      this.showcode = true;
    },
    showLive(){
      this.showcode = false;
    }
  },
  components: {CodeHighlight},
  props: ['name']
}
</script>
