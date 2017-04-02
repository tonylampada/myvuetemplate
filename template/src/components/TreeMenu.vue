<template>
    <ul class="menu-list">
        <li v-for="item in items">
            <a href="#" @click="toggle(item)">
                <span v-if="item.icon" class="icon is-small"><i class="fa" :class="'fa-'+item.icon"></i></span>
                \{{item.label}}
                <span v-if="item.children" class="icon is-small is-angle">
                    <i class="fa" :class="item.expanded ? 'fa-angle-up' : 'fa-angle-down'"></i>
                </span>
            </a>
            <ul class="collapse in" v-if="item.expanded && item.children">
                <li v-for="child in item.children">
                  <a v-if="!child.routerpath" :href="child.href">\{{child.label}}</a>
                  <router-link v-if="child.routerpath" :to="child.routerpath" active-class="is-active">\{{child.label}}</router-link>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
import Vue from 'vue'

export default {
  data () {
    return {
        // items: this.items,
    };
  },
  props: [
    'items'
  ],
  methods: {
    toggle(item){
        Vue.set(item, 'expanded', !item.expanded);
    },
  }
}
    
</script>

<style scoped lang="scss">
  .icon {
      vertical-align: baseline
  }

  .icon.is-angle {
      position: absolute;
      right: 10px;
      transition: transform .377s ease
  }

  .menu-label {
      padding-left: 5px
  }

  .menu-list li a[aria-expanded=true] .is-angle {
      transform: rotate(180deg)
  }

  .menu-list li a+ul {
      margin: 0 10px 0 15px
  }
</style>
