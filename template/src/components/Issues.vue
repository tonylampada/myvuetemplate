<template>
  <div>
    <input type="text" v-model="username" @keyup.enter="findrepos" class="input" placeholder="Digite um usuario do github e aperte ENTER">
    <select v-model="repo" @change="findIssues" class="select">
      <option v-for="r in repos" v-bind:value="r">
        {{ r.name }}
      </option>
    </select>
    <table class="table">
      <tr>
        <th>Number</th>
        <th>Title</th>
      </tr>
      <tr v-for="issue in issues">
        <td>{{issue.number}}</td>
        <td>{{issue.title}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import AppApi from 'apijs'

var DATA = {
  username: '',
  repos: [],
  repo: null,
  issues: [],
};

export default {
  name: 'Issues',
  data () {
    return DATA;
  },
  methods: {
    findrepos(){
      return AppApi.list_repos(this.username).then((response) => {
        this.repos = response.data;
      });
    },
    findIssues(){
      return AppApi.list_issues(this.repo.owner.login, this.repo.name).then(({data}) => {
        this.issues = data;
      });
    },
  }
}
</script>

<style lang="scss">
</style>

<style scoped lang="scss">
</style>
