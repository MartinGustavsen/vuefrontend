<template>
  <div>
    <form>
      <h1 v-if="failuere">ERROR</h1>
    <p v-else>Log in</p>
      <input type="text" name="email" id="login_email" v-model="username">
      <input type="password" name="password" id="login_password" v-model="password">
      <button v-on:click.prevent="attemptLogin">Login</button>

      <router-link to="/register">Register?</router-link>

      <!-- <input type="submit" value="Login" v-on:clicked.prevent="attemptLogin"> -->
    </form>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  data() {
    return {
      username:'',
      password:'',
      failuere : false
    }
  },
  methods: {
    attemptLogin(){

       axios
      .post('http://localhost:8000/api/login/', {
        email:this.username,
        password:this.password
        
      })
      .then(response => {
        if(response.status == 200)
        {
          this.$emit('loginSuccess',response.data.token);
        }
        }
        ).catch(()=>{
          this.failuere = true

        });

    }
  }
}
</script>

<style>
  h1{
    color:crimson
    }
</style>