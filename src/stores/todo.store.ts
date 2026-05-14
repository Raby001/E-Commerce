import { defineStore } from 'pinia'
import { ref } from 'vue'

import { apolloClient } from '@/apollo/client'

import {
  GET_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  TODOS_SUB,
} from '@/graphql/todos'

export type Todo = {
  id: string
  title: string
  is_done: boolean
  created_at: string
}

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchTodos() {
    loading.value = true
    error.value = null

    try {
      const { data } = await apolloClient.query<{ todos: Todo[] }>({
        query: GET_TODOS,
        fetchPolicy: 'network-only',
      })

      todos.value = data.todos
    } catch (e: any) {
      error.value = e.message ?? 'Failed to load todos'
    } finally {
      loading.value = false
    }
  }

  async function addTodo(title: string) {
    const clean = title.trim()

    if (!clean) return

    const {data} = await apolloClient.mutate({
      mutation: ADD_TODO,
      variables: {
        title: clean,
      },
    })

    if (data?.insert_todos_one) {
      todos.value.unshift(data.insert_todos_one)
    }
  }


  async function toggleTodo(todo: Todo) {
    const oldValue = todo.is_done

    // optimistic update
    todo.is_done = !todo.is_done

    try {
      await apolloClient.mutate({
        mutation: TOGGLE_TODO,
        variables: {
          id: todo.id,
          done: todo.is_done,
        },
      })
    } catch (e) {
      // rollback if request fails
      todo.is_done = oldValue

      console.error('Toggle failed', e)
    }
  }

  async function deleteTodo(id: string) {
    await apolloClient.mutate({
      mutation: DELETE_TODO,
      variables: {
        id,
      },
    })

    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  function startRealtime() {
    const obs = apolloClient.subscribe<{ todos: Todo[] }>({
      query: TODOS_SUB,
    })

    const sub = obs.subscribe({
      next: ({ data }) => {
        if (data?.todos) {
          todos.value = data.todos
        }
      },
      error: (e) => {
        console.error('Subscription error', e)
      },
    })

    return () => sub.unsubscribe()
  }

  return {
    todos,
    loading,
    error,
    fetchTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    startRealtime,
  }
})