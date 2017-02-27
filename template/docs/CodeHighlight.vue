<template>
  <pre><code ref="code" :class="lang" class="hljs xml" v-html="getcode()"></code></pre>
</template>

<script>
import hljs from 'highlight.js'

export default {
  data () {
    return {}
  },
  methods: {
    getcode(){
      return hljs.highlightAuto(this.code).value
    }
  },
  props: ['code', 'lang']
}
</script>

<style lang="css">
  @import '~highlight.js/styles/gruvbox-dark.css';
</style>
