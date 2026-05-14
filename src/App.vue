<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'
import { useTodoStore } from './stores/todo.store'

const todoStore = useTodoStore()

const title = ref('');
const filter = ref<'all' | 'active' | 'done'>('all')

const filteredTodos = computed(() => {
  if(filter.value === 'active'){
    return todoStore.todos.filter(t => !t.is_done)
  }

  if(filter.value === 'done'){
    return todoStore.todos.filter(t => t.is_done)
  }

  return todoStore.todos
})

let stopRealtime: null | (() => void) = null

onMounted(async () => {
  await todoStore.fetchTodos()

  // realtime subscription
  stopRealtime = todoStore.startRealtime()
})

onBeforeUnmount(() => {
  stopRealtime?.()
})

async function onAdd() {
  await todoStore.addTodo(title.value)
  title.value = ''
}
</script>

<template>
  <main class="container">
    <h1>Vue + Hasura Todo</h1>

    <div class="add-box">
      <input
        v-model="title"
        placeholder="Enter todo..."
        @keyup.enter="onAdd"
      />

      <button @click="onAdd">Add</button>
    </div>

    <div class="filters">
      <button @click="filter = 'all'">
        All
      </button>

      <button @click="filter = 'active'">
        Active
      </button>

      <button @click="filter = 'done'">
        Done
      </button>
    </div>

    <p v-if="todoStore.loading">Loading...</p>

    <p v-if="todoStore.error">
      {{ todoStore.error }}
    </p>

    <ul>
      <li
        v-for="todo in filteredTodos"
        :key="todo.id"
      >
        <label>
          <input
            type="checkbox"
            :checked="todo.is_done"
            @change="todoStore.toggleTodo(todo)"
          />

          <span :class="{ done: todo.is_done }">
            {{ todo.title }}
          </span>
        </label>

        <button @click="todoStore.deleteTodo(todo.id)">
          Delete
        </button>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}

.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

h1 {
  margin-bottom: 20px;
}

.add-box {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input[type='text'],
input {
  flex: 1;
  padding: 10px;
}

button {
  padding: 10px 14px;
  cursor: pointer;
}

ul {
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.done {
  text-decoration: line-through;
  opacity: 0.6;
}
</style>