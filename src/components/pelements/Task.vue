<template>
  <div class="row no-gutters p-4 feed-task" :style="{'border':task.hand ? '4px solid red' : '','border-radius':'1em'}">
    <img v-if="task.hand" src="/img/hand-raised.png" alt="Hand Raised" class="position-absolute hand-raised">
    <div class="col-2">
      <div class="first-letter" :class="randomBackgrond"><span>{{task.owner.substr(0,1)}}</span></div>
    </div>
    <div class="col-4 pl-3 pr-5">
      <progress-bar class="mt-4" :progress-background="randomBackgrond" :percentage="task.percentage"/>
    </div>
    <div class="col-4">
      <p class="m-0">{{task.desc}}</p>
    </div>
    <div class="col-2">
      <button v-if="LOGGED_USER_NAME === task.owner" @click="toggleModalTask" type="button" class="btn btn-primary" name="button">Ask for help</button>
    </div>
    <div class="col-12 mt-3 tags-container">
      <span v-for="(tag, index) in task.tags" class="tag" :class="randomBackgrond">{{tag}}</span>
    </div>
    <modal-task v-if="showModalTask" @modalDone="toggleModalTask" />
  </div>
</template>

<script>
import modalTask from '@/components/pelements/TaskModal'
import progressBar from '@/components/pelements/PercentageBar'

export default {
  props: ['task'],
  data() {
    return {
      showModalTask: false,
      randomBackgrond: 'blue-gradient'
    }
  },
  computed: {
    LOGGED_USER_NAME () {
      return this.$store.state.user.name
    }
  },
  methods: {
    toggleModalTask () {
      document.body.classList.contains('no-scroll') ? document.body.classList.remove('no-scroll') : document.body.classList.add('no-scroll')
      this.showModalTask = !this.showModalTask
    },
    generateBackground () {
      let backgroundArray = [
        'blue-gradient',
        'green-gradient',
        'red-gradient',
        'yellow-gradient',
        'pink-gradient'
      ]
      let randomIndex = Math.floor(Math.random() * backgroundArray.length)
      this.randomBackgrond = backgroundArray[randomIndex]
    }
  },
  components: {
    modalTask,
    progressBar
  },
  mounted () {
    this.generateBackground()
  }
}
</script>

<style lang="scss">
.feed-task {
  .hand-raised {
    border-radius: 50%;
    right: -0.5em;
    top: -1em;
    width: 4em;
    height: auto;
  }
  .position-absolute > .position-relative {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .first-letter {
    display: flex;
    text-align: center;
    align-items: center;
    color: white;
    height: 64px;
    width: 64px;
    border-radius: 50%;
    font-size: 2em;
     > span {
      flex: 1;
      text-transform: uppercase;
    }
  }
  .tags-container {
    .tag {
      color: white;
      margin-left: 4px;
      padding: 6px;
    }
  }
  .blue-gradient {
    background: #2989d8;
    background: -moz-linear-gradient(-45deg, #2989d8 2%, #85d1f7 100%);
    background: -webkit-linear-gradient(-45deg, #2989d8 2%,#85d1f7 100%);
    background: linear-gradient(135deg, #2989d8 2%,#85d1f7 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2989d8', endColorstr='#85d1f7',GradientType=1 );
  }
  .green-gradient {
    background: #27ce32;
    background: -moz-linear-gradient(-45deg, #27ce32 0%, #a7f785 100%);
    background: -webkit-linear-gradient(-45deg, #27ce32 0%,#a7f785 100%);
    background: linear-gradient(135deg, #27ce32 0%,#a7f785 100%);
    filter: progid:DXImageTranssform.Microsoft.gradient( startColorstr='#27ce32', endColorstr='#a7f785',GradientType=1 );
  }
  .red-gradient {
    background: #d65628;
    background: -moz-linear-gradient(-45deg, #d65628 0%, #e08579 100%);
    background: -webkit-linear-gradient(-45deg, #d65628 0%,#e08579 100%);
    background: linear-gradient(135deg, #d65628 0%,#e08579 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d65628', endColorstr='#e08579',GradientType=1 );
  }
  .yellow-gradient {
    color: blue !important;
    background: #e5d92b;
    background: -moz-linear-gradient(-45deg, #e5d92b 0%, #f4fc8a 100%);
    background: -webkit-linear-gradient(-45deg, #e5d92b 0%,#f4fc8a 100%);
    background: linear-gradient(135deg, #e5d92b 0%,#f4fc8a 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e5d92b', endColorstr='#f4fc8a',GradientType=1 );
  }
  .pink-gradient {
    background: #f22eee;
    background: -moz-linear-gradient(-45deg, #f22eee 0%, #fc8a98 100%);
    background: -webkit-linear-gradient(-45deg, #f22eee 0%,#fc8a98 100%);
    background: linear-gradient(135deg, #f22eee 0%,#fc8a98 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f22eee', endColorstr='#fc8a98',GradientType=1 );
  }
}
</style>
