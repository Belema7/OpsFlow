'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function SidebarLink({ item }) {
  const pathname = usePathname();
  const isActive = pathname === item.path;

  return (
    <Link
      href={item.path}
      className={clsx(
        "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
        isActive
          ? "bg-indigo-600/20 text-indigo-300"
          : "text-gray-300 hover:bg-gray-800/60 hover:text-white"
      )}
    >
      <span className="text-xl opacity-80">{item.icon}</span>
      <span>{item.title}</span>
    </Link>
  );
}