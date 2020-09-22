<template>
  <div class="home">
    <a v-if="authToken" v-on:click="removeAuthLS()">Log out</a>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <todos v-if="authToken"></todos>
    <login v-else v-on:loginSuccess="updateLS($event)"></login>
    
  </div>
</template>

<script>
// @ is an alias to /src
import ToDos from '@/components/todo/Todos.vue'
import Login from '@/components/auth/Login.vue'

export default {
  name: 'Home',
   data() {
     return {  
       authToken:localStorage.getItem('authToken')     
     }
   },
  methods: {
    updateLS(token){
      
       this.authToken=localStorage.getItem('authToken')  
          localStorage.setItem('authToken',token);
      },      
      removeAuthLS(){
        
       this.authToken=localStorage.getItem('authToken')  
        localStorage.removeItem("authToken");
      }
  },
  components: {
    'todos':ToDos,
    'login':Login
    
  }
  
}
</script>