<template>
<transition name="fade">
  <div class="p-modal-back position-fixed">
    <div class="modal-body">
      <span class="h3 mb-3">Why do you want to ask for help?</span>
      <textarea name="name" rows="8" class="w-100 mt-3"></textarea>
      <div class="text-right my-3">
        <button @click="$emit('modalDone')" class="btn btn-primary">Done</button>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.p-modal-back {
  z-index: 2000;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  .modal-body {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 500px;
    background-color: white;
    textarea {
      resize: none;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 500ms ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave {
  opacity: 1;
}
</style>
