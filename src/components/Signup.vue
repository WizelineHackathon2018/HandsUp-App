<template>
<section class="container">
  <div class="row">
    <form class="col-8 offset-2 text-center" @submit.prevent="signUpUser">
      <div class="row no-gutters">
        <div class="col-6 offset-3 p-5 c-pointer mb-4">
          <input class="d-none" type="file" ref="fileInput">
          <img @click="openFileBox" src="/img/user-default.svg" alt="Default User Profile" class="img-fluid">
        </div>
        <div class="col-12 form-group">
          <div class="row no-gutters">
            <label for="p-signup-name" class="col-3 m-0">Your name</label>
            <input v-model="form.name" type="text" id="p-signup-name" class="col-9 form-control px-2" placeholder="Juan Perez">
          </div>
        </div>
        <div class="col-12 form-group">
          <div class="row no-gutters">
            <label for="p-signup-username" class="col-3 m-0">Your username</label>
            <input v-model="form.username" type="text" id="p-signup-username" class="col-9 form-control px-2" placeholder="jperez69">
          </div>
        </div>
        <div class="col-12 form-group">
          <div class="row no-gutters">
            <label for="p-signup-name" class="col-3 m-0">Your email</label>
            <input v-model="form.email" type="email" id="p-signup-name" class="col-9 form-control px-2" placeholder="juan@perez.com">
          </div>
        </div>
        <div class="col-12 form-group">
          <div class="row no-gutters">
            <label for="p-signup-name" class="col-3 m-0">Your organization</label>
            <input v-model="form.organization" type="text" id="p-signup-name" class="col-9 form-control px-2" placeholder="Juan Perez Co. LTD.">
          </div>
        </div>
        <div class="col-12 form-group">
          <div class="row no-gutters">
            <label for="p-signup-role" class="col-3 m-0">Your role</label>
            <input v-model="form.role" type="text" id="p-signup-role" class="col-9 form-control px-2" placeholder="Project Manager">
          </div>
        </div>
        <div class="col-12 form-group">
          <div class="row no-gutters">
            <label for="p-signup-password" class="col-3 m-0">Your password</label>
            <input v-model="form.password" type="password" id="p-signup-password" class="col-9 form-control px-2" placeholder="Password">
          </div>
        </div>
        <div class="col-12">
          <div class="row no-gutters">
            <label class="col-3">Your skills</label>
            <tech-tag-selector @input="form.techTags = $event" class="col-9"></tech-tag-selector>
          </div>
        </div>
        <div class="col-12 py-5 text-center">
          <button type="submit" class="btn px-5" id="join-button">JOIN</button>
        </div>
      </div>
    </form>
  </div>
</section>
</template>

<script>
import techTagSelector from '@/components/pelements/TechSelector'

export default {
  data() {
    return {
      form: {
        name: null,
        username: null,
        email: null,
        organization: null,
        password: null,
        role: null,
        techTags: []
      }
    }
  },
  computed: {
    API_URL() {
      return this.$store.state.apiURL
    }
  },
  components: {
    techTagSelector
  },
  methods: {
    signUpUser() {
      // console.log(JSON.stringify(this.form))
      let myBody = {
        name: this.form.name,
        username: this.form.username,
        password: this.form.password,
        skills: this.form.techTags,
        role: this.form.role,
        tasks: [{
            title: 'Make view #1',
            description: 'This is the very first view of our super app',
            tags: ['php', 'js', 'minecraft', 'webapp'],
            comments: [],
            hand: false,
            categorized: true
          },
          {
            title: 'Design omething',
            description: 'Draw some random lines ',
            tags: ['imagination', 'creativity', 'illustrator'],
            comments: [],
            hand: false,
            categorized: true
          },
          {
            title: 'Develop a whole Android and iOS app',
            description: 'This is a very easy task, so we hope to be finished in 2 days',
            tags: [],
            comments: [],
            hand: false,
            categorized: false
          }
        ]
      }

      fetch(`${this.API_URL}/api/user/signup`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(myBody)
        }).then(res => res.json())
        .then(json => {
          if (json.status === 'success') {
            console.log('Saved on local storage')
            this.$store.commit('setUserFromFormData', this.form)
            this.$router.push({
              name: 'user.uncategorized',
              params: {
                username: this.form.username
              }
            })
          }
        })
    },
    openFileBox() {
      // Trigger file inputw
      this.$refs.fileInput.click()
    }
  }
}
</script>

<style lang="scss">
#join-button {
    background-color: green;
    color: white;
    font-size: 1.5em;
}
</style>
