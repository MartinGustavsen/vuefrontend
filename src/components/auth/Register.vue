<template>
  <div>
    <form>
      <h1 v-if="failuere">ERROR</h1>
    <p v-else>Register</p>
      <p>Username</p>
      <input type="text" name="name" id="register_name" v-model="name" required>
      <p>email</p>
      <input type="text" name="email" id="register_email" v-model="email" required>
      <p>Password</p>
      <input type="password" name="password" id="register_password" v-model="password" required>
      <p>Confirm password</p>
      <input type="password" name="confirmation_password" id="register_confirmation_password" v-model="password_confirmation" required>
      <br/>
      <button v-on:click.prevent="attemptLogin">Register</button>


      <!-- <input type="submit" value="Login" v-on:clicked.prevent="attemptLogin"> -->
    </form>
  </div>
</template>

<script>

import axios from 'axios'
import router from '../../router/index.js'
export default {
  data() {
    return {

      name:"",
      email:"",
      password:"",
      password_confirmation:"",

      failuere : false
    }
  },
  methods: {
    attemptLogin(){

       axios
      .post('http://localhost:8000/api/register/', {
        name:this.name,
        email:this.email,
        password:this.password,
        password_confirmation:this.password_confirmation
      })
      .then(response => {
        if(response.status == 200)
        {
          router.push('/')
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