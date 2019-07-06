<template>
  <div class="container">
    <h1 class="title">Todo List</h1>

    <md-field>
      <md-button @click="addTodo()" class="md-icon-button addItem">
        <md-icon>add</md-icon>
      </md-button>
      <md-input class="add" v-model="currentTodo" @keyup.enter="addTodo()" placeholder="Add a todo..."></md-input>
    </md-field>

    <md-list class="todos">
      <md-list-item v-for="(todo, index) in todos" :key="todo.id" @dblclick="editTodo(index)" class="todo" :class="{completed: todo.completed}">

        <md-checkbox v-model="todo.completed" value="todo.completed" @change="completeTodo(todo)">
          <label v-if="!todo.edit">{{ todo.label }}</label>
          <input class="edit" type="text" v-model="todo.label" v-if="todo.edit" v-focus @blur="doneEdit(index)" @keyup.enter="doneEdit(index)">
        </md-checkbox>

        <md-button class="remove" @click="removeTodo(todo)">X</md-button>
      </md-list-item>
    </md-list>

    <footer v-show="todos.length > 0">
      <md-button class="clear" @click="removeCompleted()">Clear completed</md-button>
    </footer>
  </div>
</template>


<script>
  const focus = {
    inserted(el) {el.focus()}
  };

  export default {
    data() {
      return {
        todos: [],
        currentTodo: ''
      };
    },
    methods: {
      addTodo() {
        if (this.currentTodo !== "") {
          this.todos.push({id: this.todos.length, label: this.currentTodo, completed: false, edit: false
          });
        }
        this.currentTodo = "";
      },
      completeTodo(todo) {
        if (todo.completed === true) {
          todo.completed = false;
        }
        if (todo.completed === false) {
          todo.completed = true;
        }
      },
      editTodo(index) {
        this.todos[index].edit = true;
      },
      doneEdit(index) {
        this.todos[index].edit = false;
      },
      removeTodo(todo) {
        var index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
      },
      removeCompleted() {
        this.todos = this.todos.filter(function(todo) {
          return !todo.completed;
        });
      }
    }//methods
  };
</script>


<style>
  body{
    background-color: #5C6BC0;
    padding: 3%;
    height: 100%;
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

  footer {
  width: 120px;
  display: flex;
  padding: 5px;
  border-radius: 3px;
  background-color: #1ea896
  }

  

</style>
