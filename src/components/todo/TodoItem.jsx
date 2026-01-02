import React, { useState } from "react";
import { format, isToday } from "date-fns";
import {
  CheckCircle,
  Circle,
  Calendar,
  Edit2,
  Trash2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { cn } from "../../utils/utils";

export const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        "group relative rounded-xl border-gray-400 bg-white shadow-sm transition-all duration-200 hover:shadow-md",
        todo.status === "done" && "opacity-75 bg-gray-50"
      )}
    >
      <div className="flex items-center p-4 py-6 gap-4">
        {/* Toggle Status Button */}
        <Button
          className={cn(
            "h-4 w-4 p-0 mr-2 rounded-full hover:bg-gray-100 bg-transparent border-none shadow-none",
            todo.status === "done" ? "text-green-500" : "text-slate-400"
          )}
          onClick={() => onToggle(todo.id)}
        >
          {todo.status === "done" ? (
            <CheckCircle className="h-6 w-6" />
          ) : (
            <Circle className="h-6 w-6" />
          )}
        </Button>

        {/* Content Click Area */}
        <div
          className="flex-1 min-w-0 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-2">
            <Heading
              level={3}
              className={cn(
                "text-sm font-semibold truncate",
                todo.status === "done" &&
                  "line-through text-slate-500 font-normal"
              )}
            >
              {todo.title}
            </Heading>

            {isToday(new Date(todo.createdAt)) && (
              <span className="inline-flex items-center rounded-full border border-transparent bg-slate-100 px-2.5 py-0.5 text-[8px] font-bold uppercase text-slate-900">
                Today
              </span>
            )}
          </div>
          <Paragraph className="text-[10px] flex items-center gap-1 mt-0.5">
            <Calendar className="h-3 w-3" />
            {format(new Date(todo.createdAt), "MMM d, h:mm a")}
          </Paragraph>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
          <Button
            onClick={() => onEdit(todo)}
            className="h-6 w-6 p-0 bg-transparent text-slate-500 hover:bg-gray-100 border-none shadow-none"
          >
            <Edit2 className="h-3 w-3" />
          </Button>
          <Button
            onClick={() => onDelete(todo.id)}
            className="h-6 w-6 p-0 bg-transparent text-red-500 hover:bg-red-50 hover:text-red-600 border-none shadow-none"
          >
            <Trash2 className="h-3 w-3" />
          </Button>
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            className="h-6 w-6 p-0 bg-transparent text-slate-500 hover:bg-gray-100 border-none shadow-none"
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {isExpanded && (
        <div className="px-14 pb-6 pt-2 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
          <div
            className="prose prose-sm prose-slate max-w-none [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"
            dangerouslySetInnerHTML={{
              __html:
                todo.description ||
                '<p class="italic text-slate-400">No description provided.</p>',
            }}
          />
        </div>
      )}
    </div>
  );
};
