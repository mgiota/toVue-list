<template>
  <div class="container">
    <h1>Todo List</h1>
    <input v-model="currentTodo" @keydown.enter="addTodo()" placeholder="Add a todo">
    <ul class="todos">
      <li v-for="todo in todos" :key="todo.id">
        <button @click="removeTodo">X</button>
        {{ todo.label }}
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        todos: [],
        currentTodo: ''
      };
    },
    methods: {
      addTodo() {
        this.todos.push({id: this.todos.length, label: this.currentTodo, completed: false});
        this.currentTodo = '';
      },
      removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
      }
    }
  };
</script>


<style>
  body{
    background-color: #5C6BC0;
    padding: 3%;
  }

  .container{
    background-color: white;
    padding: 1%;
    text-align: center;
    width: 60%;
    margin: 0 auto;
  }

  input{
    padding: 10px;
    margin: 0 auto;
    outline: none
  }

  ul{
    padding: 0;
  }

  li{
    list-style: none;
    border: solid black 1px;
    margin: 10px auto;
    padding: 10px;
  }
</style>
