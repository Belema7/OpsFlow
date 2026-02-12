'use client'
import Header from '@/components/dashboard/ Header'
import Sidebar from '@/components/dashboard/ Sidebar'
import { useState } from 'react'

export default function DashboardLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleCollapse = () => setIsCollapsed(!isCollapsed)

  return (
    // overflow-hidden prevents double scrollbars on the main page
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden">
      {/* Sidebar - Width is handled internally via state */}
      <Sidebar isCollapsed={isCollapsed} onCollapse={handleCollapse} />

      <div className="flex flex-1 flex-col min-w-0">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
