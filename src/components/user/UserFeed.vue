<template>
<section id="main-feed" class="container pt-5">
  <div class="row">
    <div class="col-12">
      <div class="row no-gutters">
        <div class="col-2">
          <img src="/img/user-default.svg" alt="" class="img-fluid">
        </div>
        <div class="col-9 offset-1">
          <h1>User name</h1>
          <br>
          <h3>User title</h3>
        </div>
      </div>
    </div>
    <!-- ./ User info col -->
    <hr class="w-100">
    <div class="col-12">
      <p>Here are some task in wich you can give a hand on... ;)</p>
    </div>
    <hr class="w-100">
    <div v-for="(task, index) in feedTask" class="col-12">
      <p-task :task="task" />
    </div>
  </div>

</section>
</template>

<script>
import pTask from '@/components/pelements/Task'

export default {
  data() {
    return {
      feedTask: [
        {
          owner: 'ilichh1',
          title: 'Some title',
          desc: 'This is a short description for this simple task',
          tags: ['javascript', 'angular', 'html', 'css'],
          percentage: 50,
          hand: false
        },
        {
          owner: 'carlosl',
          title: 'Some title',
          desc: 'This is a short description for this simple task',
          tags: ['javascript', 'angular', 'html', 'css'],
          percentage: 69,
          hand: true
        },
        {
          owner: 'miguelg',
          title: 'Some title',
          desc: 'This is a short description for this simple task',
          tags: ['javascript', 'angular', 'html', 'css'],
          percentage: 78,
          hand: false
        },
        {
          owner: 'leom',
          title: 'Some title',
          desc: 'This is a short description for this simple task',
          tags: ['javascript', 'angular', 'html', 'css'],
          percentage: 80,
          hand: false
        },
        {
          owner: 'miguela',
          title: 'Some title',
          desc: 'This is a short description for this simple task',
          tags: ['vue', 'javascript', 'html5', 'css3'],
          percentage: 5,
          hand: false
        }
      ]
    }
  },
  components: {
    pTask
  },
}
</script>

<style lang="css">
</style>
