<template>
  <div id="app">
    <todo-header v-on:logout="removeAuthLS($event)"></todo-header>

    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
export default {
  components:{
    'todo-header':Header
  },
  
  methods: {
  },
}
</script>

<style>
body{
  
        background: rgb(200, 130, 50);
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
