<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Suspense @pending="pending" @fallback="fallback" @resolved="resolved">
    <template #default>
      <RepoFetch  />
    </template>
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import RepoFetch from './components/RepoFetch.vue';

const pending = () => {
  console.log('pending')
}

const fallback = () =>{
  console.log("fallback")
}

const resolved = () => {
  console.log("resolved")
}

export default {
  name: 'App',
  components: {
    // HelloWorld,
    RepoFetch
},

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
