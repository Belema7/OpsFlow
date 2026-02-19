'use client';

import { sidebarItems } from './sidebarItems';
import SidebarLink from './sidebarLink/SidebarLink';

export default function Sidebar() {
  return (
    <aside
      className="
        hidden lg:block
        w-64 shrink-0
        bg-gray-900/95 backdrop-blur-sm
        border-r border-gray-800
        h-screen
        sticky top-0
        overflow-y-auto
        py-6 px-4
      "
    >
      <div className="mb-10 px-4">
        <h2 className="text-xl font-bold text-white tracking-tight">
          Admin Panel
        </h2>
      </div>

      <nav className="space-y-8">
        {sidebarItems.map((group) => (
          <div key={group.title} className="space-y-1">
            <h3 className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
              {group.title}
            </h3>

            <div className="space-y-0.5">
              {group.list.map((item) => (
                <SidebarLink key={item.title} item={item} />
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}