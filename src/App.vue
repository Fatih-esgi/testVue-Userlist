<template>
  <UserList/>
</template>

<script>
import UserList from './components/userList.vue'

export default {
  name: 'App',
  components: {
    UserList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
