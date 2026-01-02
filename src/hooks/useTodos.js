import { useState, useEffect, useMemo } from "react"
import { isToday } from "date-fns"

const STORAGE_KEY = "tiptap-todos"

export const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(STORAGE_KEY)
        return saved ? JSON.parse(saved) : []
      }
    } catch (e) {
      console.error("Failed to load todos from localStorage", e)
    }
    return []
  })

  const [filter, setFilter] = useState("all") 
  const [isCreating, setIsCreating] = useState(false)
  const [editingTodo, setEditingTodo] = useState(null)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    } catch (e) {
      console.error("Failed to save todos to localStorage", e)
    }
  }, [todos])

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === "all") return true
      if (filter === "pending") return todo.status === "pending"
      if (filter === "done") return todo.status === "done"
      if (filter === "today") return isToday(new Date(todo.createdAt))
      return true
    })
  }, [todos, filter])


  const addTodo = (title, description) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
      description,
      status: "pending",
      createdAt: new Date().toISOString(),
    }
    setTodos((prev) => [newTodo, ...prev])
    closeForm()
  }

  const updateTodo = (id, title, description) => {
    setTodos((prev) => prev.map((t) => 
      t.id === id ? { ...t, title, description } : t
    ))
    closeForm()
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const toggleStatus = (id) => {
    setTodos((prev) => prev.map((t) =>
      t.id === id ? { ...t, status: t.status === "pending" ? "done" : "pending" } : t
    ))
  }

  const openCreate = () => {
    setIsCreating(true)
    setEditingTodo(null)
  }

  const openEdit = (todo) => {
    setEditingTodo(todo)
    setIsCreating(false)
  }

  const closeForm = () => {
    setIsCreating(false)
    setEditingTodo(null)
  }

  return {
    todos: filteredTodos,
    filter,
    isCreating,
    editingTodo,
    setFilter,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleStatus,
    openCreate,
    openEdit,
    closeForm,
  }
}