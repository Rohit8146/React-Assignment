import React, { useState, useEffect } from "react";
import { TipTapEditor } from "./TipTapEditor";
import { Button } from "./Button";
import { Heading } from "./Heading";

export const TodoForm = ({ initialData, onSave, onCancel }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSave(title, description);
  };

  return (
    <div className="mb-8 rounded-xl border border-gray-200 bg-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-300 overflow-hidden">
      <div className="p-6 py-4 ">
        <Heading level={4} className="text-md">
          {initialData ? "Edit Task" : "New Task"}
        </Heading>
      </div>

      <form onSubmit={handleSubmit} className="p-6 py-2 space-y-5">
        <div className="space-y-2">
          <label className="text-[13px] font-semibold text-black-700">
            Title
          </label>
          <input
            autoFocus
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm shadow-sm transition-all focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[13px] font-semibold text-black-700">
            Description
          </label>
          <TipTapEditor content={description} onChange={setDescription} />
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <Button
            onClick={onCancel}
            className="border-gray-300 hover:bg-gray-50 text-slate-700"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={!title.trim()}
            className="bg-slate-900 text-white hover:bg-slate-800"
          >
            {initialData ? "Save Changes" : "Create Task"}
          </Button>
        </div>
      </form>
    </div>
  );
};
