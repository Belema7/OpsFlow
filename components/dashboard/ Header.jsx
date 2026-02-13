'use client'
import { useState } from 'react'
import sidebarItem from './sidebarItems'
import { usePathname } from 'next/navigation'
import moment from 'moment' 
import { Moon } from 'lucide-react'
import {Sun} from 'lucide-react'

const Header = () => {
  const pathname = usePathname()
  const [isdarkMode, setIsDarkMode] = useState(false)

  const firstSegment = pathname.split('/').filter(Boolean)[0];
  const currentItem = sidebarItem.find(item => item.segment === firstSegment);
  const displayTitle = currentItem ? currentItem.title : "Dashboard";

  return (
    <div className="flex items-center justify-between h-14 px-6 border-b">
        {/* left side: title */}
      <div className="font-semibold capitalize">
        {displayTitle}
      </div>


        {/* right side: time, theme toggle, profile */}
      <div className="flex items-center gap-4">
        {/* time */}
        <div className="text-sm text-slate-500">
          {moment().format('MMMM Do YYYY, h:mm:ss A')}
        </div>

        {/* theme toggle */}
        <button className="p-2 rounded-md hover:bg-slate-200 transition-colors">
          {/* You can replace this with an actual icon */}
          {isdarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* profile */}
        <div className="w-8 h-8 rounded-full bg-slate-300" />
      </div>
    </div>
  )
}

export default Header
