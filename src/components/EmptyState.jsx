import React from "react"
import { Calendar } from "lucide-react"

export const EmptyState = () => (
  <div className="rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
    <div className="flex flex-col items-center justify-center text-slate-500">
      <Calendar className="h-12 w-12 mb-4 opacity-20" />
      <p>No tasks found for this filter.</p>
    </div>
  </div>
)