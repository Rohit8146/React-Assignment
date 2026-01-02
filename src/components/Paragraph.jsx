import { cn } from "../utils/utils";

export const Paragraph = ({ children, className, ...props }) => {
  return (
    <p className={cn("text-slate-500 leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
};
