<template>
  <div class="font-bold text-2xl">
    All: {{ allTodosCount }} Complete: {{ completedTodosCount.length }} Pending:
    {{ pendingTodosCount.length }}
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useTodoStore } from "../stores/TodoStore";

export default {
  name: "MenuSection",
  computed: {
    ...mapState(useTodoStore, [
      "allTodosCount",
      "pendingTodosCount",
      "completedTodosCount",
    ]),
  },
};
</script>
