import React from "react";
import { useTodos } from "./hooks/useTodos";
import { TodoHeader } from "./components/todo/TodoHeader";
import { TodoFilter } from "./components/todo/TodoFilter";
import { TodoForm } from "./components/todo/TodoForm";
import { TodoItem } from "./components/todo/TodoItem";
import { EmptyState } from "./components/todo/EmptyState";

export default function App() {
  const {
    todos,
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
  } = useTodos();

  const handleFormSubmit = (title, description) => {
    if (editingTodo) {
      updateTodo(editingTodo.id, title, description);
    } else {
      addTodo(title, description);
    }
  };

  return (
    <div className="min-h-screen text-slate-900 font-sans">
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <TodoHeader />
        <TodoFilter
          filter={filter}
          setFilter={setFilter}
          onAddClick={openCreate}
        />

        {(isCreating || editingTodo) && (
          <TodoForm
            initialData={editingTodo}
            onSave={handleFormSubmit}
            onCancel={closeForm}
          />
        )}

        <div className="grid gap-4">
          {todos.length === 0 ? (
            <EmptyState />
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleStatus}
                onDelete={deleteTodo}
                onEdit={openEdit}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
