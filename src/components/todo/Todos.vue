<template>
    <div>                
        <create-to-do-list v-on:changeTodoLists="updateTodoLists($event)"></create-to-do-list>
        <div v-for="(todolist,index) in todoLists" v-bind:key="todolist">
            <div class="todolist">
                <h3 v-bind:id="index">{{todolist.name}}</h3>
                <!-- <h5>{{todolist.todos.length}}</h5> -->
                <!-- <h5>{{todolist.todos.length}}</h5> -->
                <!-- <ul>
                    <li v-for="todo in todoList['todos']" v-bind:key="todo">todo.name</li>
                </ul> -->
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import CreateTodoList from './CreaeteTodoList.vue';
export default {

    data() {
        return {
            todoLists:[]
            
        }
    },
    
    beforeMount(){
        this.getTodos()
    },
    methods: {
        updateTodoLists(listTitle){



             axios
      .post('http://localhost:8000/api/todo/', {
          name:listTitle
        
      }, {headers: {
            'Authorization': `Bearer ${localStorage.getItem("authToken")}`
        }})
      .then(response => {
        if(response.status == 200)
        {
            this.todoLists.push({name:listTitle,todoItems:[]});
        }
        }
        );

        this.getTodos()

        },

        getTodos(){
            axios
            .get('http://localhost:8000/api/todo/', {headers: {
            'Authorization': `Bearer ${localStorage.getItem("authToken")}`
        }})
            .then(response => {
                if(response.status == 200)
                {
                    let todoLists = response.data
                //   this.todoLists=  this.getItemForList(todoLists)
                    this.todoLists = todoLists
                }
                }
                );
        },

        getItemForList(todoLists){
            todoLists.forEach(todoList => {
                axios
            .get('http://localhost:8000/api/todo/' + todoList.id + '/todos', {headers: {
            'Authorization': `Bearer ${localStorage.getItem("authToken")}`
        }})
            .then(response => {
                if(response.status == 200)
                {
                    let todos = response.data
                    todoList['todos'] = todos
                //   this.$emit('loginSuccess',response.data.token);
                }
                }
                )
            });

            return todoLists
        }
    },
    components:{
        'create-to-do-list':CreateTodoList,
        }


}
</script>

<style scoped>
    div.todolist{
        background-color:darkgray;
        }
</style>