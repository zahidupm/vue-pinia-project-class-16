<template>
  Todos
  <button class="font-bold bg-blue-400 p-2 text-white rounded" @click="addTodo">
    Add Todo
  </button>
  <ul>
    <single-todo
      v-for="todo in allTodos"
      :key="todo.id"
      :todo="todo"
    ></single-todo>
  </ul>
</template>

<script>
import { mapState } from "pinia";
import SingleTodo from "../components/SingleTodo.vue";
import { useTodoStore } from "../stores/TodoStore";

export default {
  name: "TodoPage",
  components: { SingleTodo },
  data() {
    return {};
  },
  computed: {
    ...mapState(useTodoStore, ["todos", "allTodos"]),
    name() {
      return "";
    },
  },
  methods: {
    addTodo() {
      useTodoStore().addTodo({
        id: this.todos.length + 1,
        title: "Todo " + (this.todos.length + 1),
        completed: false,
      });
    },
  },
  components: { SingleTodo },
};
</script>

<style scoped></style>
