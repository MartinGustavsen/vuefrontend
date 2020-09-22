<template>
    <div>
        <form action="" method="post">

            <input type="text" name="todo-list-name" id="todo-list-name"  v-model="todolist_name" required>
            <input type="button" v-on:click="addTodoList" value="Add Todo">

        </form>
    </div>
</template>

<script>
export default {

    methods: {
        addTodoList(){
            this.$emit('changeTodoLists',this.todolist_name);
            
            this.todolist_name = "";   
            
            
            

            }
    },
}
</script>

<style>

</style>