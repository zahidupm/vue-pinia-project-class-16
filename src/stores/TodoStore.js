import { defineStore } from 'pinia';

export const useTodoStore = defineStore('TodoStore', {
    // state
    state: () => ({
        todos: [
            {id:1, title: 'Todo', completed: false},
            {id:2, title: 'Todo1', completed: true},
            {id:3, title: 'Todo2', completed: false},
            {id:4, title: 'Todo3', completed: true},
        ]
    }),
    // actions
    actions: {
        addTodo(todo) {
            this.todos.push(todo);
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        },
        changeTodoStatus(id) {
            this.todos = this.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        }
    },
    // getters
    getters: {
        allTodos: (state) => state.todos,
        pendingTodos: (state) => state.todos.filter(todo => !todo.completed),
        completedTodos: (state) => state.todos.filter(todo => todo.completed),
        allTodosCount: (state) => state.todos.length,
        pendingTodosCount: (state) => state.todos.filter(todo => !todo.completed),
        completedTodosCount: (state) => state.todos.filter(todo => todo.completed),
    }
});