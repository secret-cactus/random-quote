<template>
  <Header> </Header>
  <router-view> </router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header/template.vue'

export default {
  name: 'App',
  components: {
      Header
//    HelloWorld
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
