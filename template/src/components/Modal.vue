<template>
  <div class="modal" :class="{'is-active': visible}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <slot name="title">
          <p class="modal-card-title">\{{title}}</p>
        </slot>
        <button class="delete" @click="$emit('close')"></button>
      </header>
      <section class="modal-card-body">
        <slot name="body">
          <h3>Modal Body</h3>
          <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
        </slot>
      </section>
      <footer class="modal-card-foot">
        <slot name="footer">
          <a class="button is-success" @click="$emit('ok')">OK</a>
          <a class="button" @click="$emit('close')">Cancel</a>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data () {
    return {
      // title: 'Modal Title'
    };
  },
  props: [
    'visible',
    'title',
  ],
  // methods: {
  //   toggle(item){
  //       Vue.set(item, 'expanded', !item.expanded);
  //   },
  // }
}
    
</script>

<style>
    
</style>
