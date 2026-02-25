import { clsx } from "clsx";

const sizeMap = {
  sm: "h-5 w-5 border-2",
  md: "h-8 w-8 border-[3px]",
  lg: "h-12 w-12 border-4",
};

export default function Loader({ size = "md", className }) {
  return (
    <div className={clsx("flex items-center justify-center py-12", className)}>
      <div
        className={clsx(
          "animate-spin rounded-full border-indigo-500 border-t-transparent",
          sizeMap[size]
        )}
      />
    </div>
  );
}