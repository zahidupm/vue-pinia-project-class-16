<template>
  <div class="mx-4">
    Todos
    <button
      class="font-bold bg-blue-400 p-2 text-white rounded"
      @click="addTodo"
    >
      Add Todo
    </button>
    <h1 class="text-2xl font-bold">All</h1>
    <ul>
      <single-todo
        v-for="todo in allTodos"
        :key="todo.id"
        :todo="todo"
      ></single-todo>
    </ul>
    <h1 class="text-2xl font-bold">Pending</h1>
    <ul>
      <single-todo
        v-for="todo in pendingTodos"
        :key="todo.id"
        :todo="todo"
      ></single-todo>
    </ul>
    <h1 class="text-2xl font-bold">Complete</h1>
    <ul>
      <single-todo
        v-for="todo in completedTodos"
        :key="todo.id"
        :todo="todo"
      ></single-todo>
    </ul>
  </div>
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
    ...mapState(useTodoStore, [
      "todos",
      "allTodos",
      "pendingTodos",
      "completedTodos",
    ]),
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
