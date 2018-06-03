<template>
<div class="p-tech-selector row no-gutters">
  <input @keypress.prevent.enter="addTag" @keypress.space.prevent v-model="currentInputContent" type="text" class="form-control col-10 px-2" placeholder="Enter here some skills">
  <div class="col-2 p-0 pl-2 text-center">
    <button @click.prevent="addTag" class="btn btn-primary w-100" :class="{'p-disabled':!currentInputContent}">Add</button>
  </div>
  <div class="tags-wrapper text-left py-3 col-12">
    <div v-for="(tag, index) in techTags" class="d-inline-block tech-tag">
      <span>{{tag}}</span>
      <span @click="removeTag(index)" class="ml-1 close">&times;</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      currentInputContent: null,
      techTags: []
    }
  },
  methods: {
    addTag () {
      if (!!this.currentInputContent) {
        this.techTags.push(this.currentInputContent)
        this.currentInputContent = null
      }
      this.$emit('input', this.techTags)
    },
    removeTag (index) {
      this.techTags.splice(index,1)
    }
  }
}
</script>

<style lang="scss">
.tech-tag {
  padding: 6px;
  background-color: tomato;
  color: white;
  margin: 4px;
  .close {
    color: white;
  }
}
</style>
