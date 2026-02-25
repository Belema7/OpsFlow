import { clsx } from "clsx";

export default function Card({ children, className, ...props }) {
  return (
    <div
      className={clsx(
        "rounded-xl border border-gray-800 bg-gray-900/80 backdrop-blur-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}