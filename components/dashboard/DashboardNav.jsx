"use client";
import { usePathname } from "next/navigation";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineChatBubbleLeftRight,
  HiOutlineBell,
  HiOutlineGlobeAlt
} from "react-icons/hi2";

const Navbar = () => {
  const pathname = usePathname();
  const pageTitle = pathname.split("/").pop() || "Home";

  return (
    <nav className="
     
      w-full bg-white/80 dark:bg-gray-900/95
      backdrop-blur-md border-b border-gray-200 dark:border-gray-800
      px-4 sm:px-6 lg:px-8
    ">
      {/* sticky top-0 z-30 */}
      <div className="flex h-14 items-center justify-between gap-4 max-w-7xl mx-auto">

        <div className="
          text-lg font-semibold 
          text-gray-900 dark:text-gray-100
          truncate max-w-60 sm:max-w-none
        ">
          {pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)}
        </div>


        <div className="flex items-center gap-2 sm:gap-4">

          {/* Search */}
          <div className="
            hidden sm:flex items-center
            bg-gray-100 dark:bg-gray-800 
            border border-gray-300 dark:border-gray-700 
            rounded-full px-3 py-1.5 text-sm
            focus-within:ring-2 focus-within:ring-blue-500/40
            transition-all duration-200
          ">
            <HiOutlineMagnifyingGlass className="text-gray-500 dark:text-gray-400 mr-2" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="
                bg-transparent outline-none border-none
                placeholder:text-gray-500 dark:placeholder:text-gray-400
                text-gray-900 dark:text-gray-100
                w-36 lg:w-64
              "
            />
          </div>

          {/* Mobile search icon (only on small screens) */}
          <button
            className="sm:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Search"
          >
            <HiOutlineMagnifyingGlass size={22} className="text-gray-700 dark:text-gray-300" />
          </button>

          {/* Icons */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              className="
                p-2 rounded-full 
                hover:bg-gray-100 dark:hover:bg-gray-800 
                text-gray-700 dark:text-gray-300
                hover:text-blue-600 dark:hover:text-blue-400
                transition-colors duration-200
              "
              aria-label="Messages"
            >
              <HiOutlineChatBubbleLeftRight size={22} />
            </button>

            <button
              className="
                p-2 rounded-full 
                hover:bg-gray-100 dark:hover:bg-gray-800 
                text-gray-700 dark:text-gray-300
                hover:text-blue-600 dark:hover:text-blue-400
                transition-colors duration-200
                relative
              "
              aria-label="Notifications"
            >
              <HiOutlineBell size={22} />
            </button>

            <button
              className="
                p-2 rounded-full 
                hover:bg-gray-100 dark:hover:bg-gray-800 
                text-gray-700 dark:text-gray-300
                hover:text-blue-600 dark:hover:text-blue-400
                transition-colors duration-200
              "
              aria-label="Language / Public"
            >
              <HiOutlineGlobeAlt size={22} />
            </button>
          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;