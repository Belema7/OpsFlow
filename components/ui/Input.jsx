import { clsx } from "clsx";

export default function Input({
  label,
  error,
  id,
  className,
  ...props
}) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}
      <input
        id={id}
        className={clsx(
          "w-full rounded-lg border bg-gray-800/50 px-3.5 py-2.5 text-sm text-gray-100",
          "placeholder:text-gray-500",
          "focus:outline-none focus:ring-2 transition-all duration-200",
          error
            ? "border-rose-500 focus:ring-rose-500/40"
            : "border-gray-700 focus:ring-indigo-500/40 focus:border-indigo-500",
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-xs text-rose-400">{error}</p>
      )}
    </div>
  );
}