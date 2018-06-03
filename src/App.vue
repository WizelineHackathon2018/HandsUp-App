<template>
  <main>
    <p-header/>
    <router-view></router-view>
  </main>
</template>

<script>
import pHeader from './Header'

export default {
  name: 'app',
  components: {
    pHeader
  }
}
</script>

<style>
</style>
