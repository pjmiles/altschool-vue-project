<template>
    <div>
      <h1>Repository details</h1>
      <p>Please go <router-link to="/repofetch">back</router-link></p>
      <p>{{ route.params.id }}</p>
    </div>
  </template> 
  
  <script>
  import { useRoute } from 'vue-router'
  const route = useRoute()

  export default {
    name: 'RepoDetails',
    methode: {
      async fetchRepos(){
            try {
                const response = await axios.get(`https://api.github.com/users/${this.searchRepo}/repos`)
                this.repos = response.data
            } catch(err) {
                console.error(err)
                this.errorMessage = true
            } finally {
                this.loading = false
                this.searchRepo = ""
            }
        },
    },
    computed:{
      route
    }

  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>