<template>
  <div class="row no-gutters">
    <div class="col-8"><span class="h3">{{task.title}}</span></div>
    <div class="col-4 px-3">
      <pp-bar :percentage="task.percentage" />
    </div>
    <div class="col-6">
      <p class="task-desc m-0">{{task.desc}}</p>
    </div>
    <div class="col-4 offset-2 text-right px-3">
      <button @click="collapsed = false" class="btn btn-success" :class="{'p-disabled':!collapsed}">Add technologies</button>
    </div>
    <div class="col-12 p-collapsible" :class="{'is-collapsed':collapsed}">
      <tech-tags class="py-4" @input="tags = $event" />
      <div class="w-100 text-right">
        <button @click="emitNewTaskObject" class="btn btn-primary">Done</button>
      </div>
    </div>
  </div>
</template>

<script>
import ppBar from '@/components/pelements/PercentageBar'
import techTags from '@/components/pelements/TechSelector'

export default {
  data () {
    return {
      collapsed: true,
      tags: []
    }
  },
  methods: {
    emitNewTaskObject () {
      let newTask = this.task
      newTask.tags = this.tags

      this.$store.commit('setTagsForExistingTag', newTask)
    }
  },
  props: {
    task: {
      required: true
    }
  },
  components: {
    ppBar,
    techTags
  }
}
</script>

<style lang="scss">
.p-collapsible {
  transition: max-height 650ms ease-in;
  overflow: hidden;
  max-height: 100vh;
  &.is-collapsed {
    max-height: 0 !important;
  }
}
</style>
