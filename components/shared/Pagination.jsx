import Link from "next/link";
import { clsx } from "clsx";
import { DEFAULT_PAGE_SIZE } from "@/utils/constants";

export default function Pagination({ currentPage, total, limit = DEFAULT_PAGE_SIZE, basePath }) {
  const totalPages = Math.ceil(total / limit);

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <p className="text-sm text-gray-500">
        Page {currentPage} of {totalPages}
      </p>

      <div className="flex items-center gap-1">
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          className={clsx(
            "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
            currentPage <= 1
              ? "pointer-events-none text-gray-600"
              : "text-gray-300 hover:bg-gray-800"
          )}
          aria-disabled={currentPage <= 1}
        >
          Prev
        </Link>

        {pages.map((page) => (
          <Link
            key={page}
            href={`${basePath}?page=${page}`}
            className={clsx(
              "min-w-[36px] text-center px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
              page === currentPage
                ? "bg-indigo-600 text-white"
                : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
            )}
          >
            {page}
          </Link>
        ))}

        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className={clsx(
            "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
            currentPage >= totalPages
              ? "pointer-events-none text-gray-600"
              : "text-gray-300 hover:bg-gray-800"
          )}
          aria-disabled={currentPage >= totalPages}
        >
          Next
        </Link>
      </div>
    </nav>
  );
}
