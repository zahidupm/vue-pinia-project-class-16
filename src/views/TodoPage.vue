<template>
  HomePage
  <ul>
    <li v-for="(todo, index) in todos" :key="index">{{ todo.title }}</li>
  </ul>
</template>

<script>
import { mapState } from "pinia";
import { useTodoStore } from "../stores/TodoStore";

export default {
  name: "TodoPage",
  data() {
    return {};
  },
  computed: {
    ...mapState(useTodoStore, ["todos"]),
    name() {
      return "";
    },
  },
  methods: {},
};
</script>

<style scoped></style>
