import React from "react";
import { Button } from "./Button";
import { Plus } from "lucide-react";
import { FILTERS } from "../constants/data";
import { cn } from "../utils/utils";

export const TodoFilter = ({ filter, setFilter, onAddClick }) => {
  return (
    <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
        {FILTERS.map((filterItem) => {
          const isActive = filter === filterItem.id;
          return (
            <Button
              key={filterItem.id}
              onClick={() => setFilter(filterItem.id)}
              className={cn(
                "h-6 text-[10px] px-4 border-none shadow-none cursor-pointer transition-all duration-500 ease-in-out",
                isActive
                  ? "bg-black text-white shadow-sm font-semibold"
                  : "bg-transparent text-slate-500 hover:text-slate-900 hover:bg-gray-200/50"
              )}
            >
              {filterItem.label}
            </Button>
          );
        })}
      </div>
      <Button
        onClick={onAddClick}
        className="rounded-full py-0 px-6 bg-slate-900 text-white hover:bg-slate-800 shadow-md h-10"
      >
        <Plus className="h-3 w-3 mr-1" />
        Add Task
      </Button>
    </div>
  );
};
