import React from "react";
import { useTodos } from "./hooks/useTodos";
import { TodoHeader } from "./components/TodoHeader";
import { TodoFilter } from "./components/TodoFilter";
import { TodoForm } from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";
import { EmptyState } from "./components/EmptyState";

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

        <div className="grid gap-2">
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
