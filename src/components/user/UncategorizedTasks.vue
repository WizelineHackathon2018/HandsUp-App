<template lang="html">
<section id="uncategorized-tasks" class="container">
  <div class="row">
    <div class="col-12 text-center mt-4">
      <div class="row no-gutters">
        <div class="col-10 text-left">
          <span class="h1">User name</span>
          <br>
          <span class="h1"><small>Title</small></span>
        </div>
        <div class="col-2">
          <span class="h2">8</span>
          <br>
          <span class="h2 text-uppercase"><small>Tasks</small></span>
        </div>
      </div>
    </div>
    <hr class="col-12">
    <div v-for="(t, index) in uTasks" :key="index" class="col-12 my-2">
      <p-task :task="t"/>
      <hr>
    </div>
    <div v-if="uTasks.length === 0" class="col-12">
      <span class="d-block h3">It seems that you dont have any uncategorized task...</span>
      <div>
        <button @click="$router.push({name:'user.feed',params: {username: USER_NAME} })" class="btn btn-primary">Lets see other's tasks!</button>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import pTask from '@/components/pelements/TaskToCategorize'

export default {
  data () {
    return {
      uTasks: []
    }
  },
  computed: {
    USER_NAME () {
      return this.$store.state.user.name
    },
    API_URL () {
      return this.$store.state.apiURL
    }
  },
  components: {
    pTask
  },
  methods: {
    getTasksFromServer () {
      fetch(`${this.API_URL}/api/task/`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: { username: this.USER_NAME }
      }).then(res => res.json())
      .then(json => {
        this.uTasks = json.data
        console.log(json)
      })
    }
  },
  mounted () {
    this.getTasksFromServer()
  }
}
</script>

<style lang="scss">
</style>
