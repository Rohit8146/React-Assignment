
import { cn } from "../../utils/utils";

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-[12px] font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed px-6 py-2",
        "bg-white text-slate-900 border border-transparent",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
