import React from "react";
import { cn } from "../utils/utils";

export const Heading = ({ children, level = 1, className, ...props }) => {
  const Tag = `h${level}`;
  return (
    <Tag
      className={cn("font-bold text-slate-900 tracking-tight", className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
