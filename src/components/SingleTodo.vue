<template>
  <li class="m-4">
    {{ todo.title }}
    <button
      @click="handleDelete(todo.id)"
      class="bg-blue-400 px-4 py-2 rounded text-white"
    >
      Delete
    </button>
  </li>
</template>

<script>
import { useTodoStore } from "../stores/TodoStore";
export default {
  name: "SingleTodo",
  props: {
    todo: {
      type: Object,
    },
  },
  methods: {
    handleDelete() {
      useTodoStore().deleteTodo(this.todo.id);
    },
  },
};
</script>

<style scoped></style>
