<template>
<div class="progress p-task-percentage position-relative">
  <div :style="{width: `${percentage}px`}" :aria-valuenow="percentage" :class="progressBackground" class="progress-bar progress-bar-striped" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
  <span class="p-percentage-display">{{percentage}}</span>
</div>
</template>

<script>
export default {
  props: {
    percentage: {
      required: true
    },
    progressBackground: {
      required: false
    }
  }
}
</script>

<style lang="scss">
.p-task-percentage {
  height: 2em;
  .p-percentage-display {
    position: absolute;
    right: 1em;
    top: 50%;
    transform: translateY(-50%);
    color: black;
    &::after {
      content: "%";
    }
  }
}
</style>
