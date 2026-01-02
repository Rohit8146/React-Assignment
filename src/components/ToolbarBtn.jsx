import React from "react";
import { cn } from "../utils/utils";

export const ToolbarBtn = ({ onClick, isActive, disabled, children }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={cn(
      "p-1.5 rounded-md transition-colors",
      "hover:bg-gray-100 disabled:opacity-50",
      isActive ? "bg-gray-200 text-black font-medium" : "text-gray-600"
    )}
  >
    {children}
  </button>
);
