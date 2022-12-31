import { defineStore } from 'pinia';

export const useTodoStore = defineStore('TodoStore', {
    // state
    state: () => ({
        todos: [
            {id:1, title: 'Todo', completed: false},
            {id:2, title: 'Todo1', completed: true},
            {id:3, title: 'Todo2', completed: false},
        ]
    }),
    // actions
    actions: {
        addTodo(todo) {
            this.todos.push(todo);
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        }
    },
    // getters
    getters: {
        allTodos: (state) => state.todos,
    }
});