import Header from '@/components/dashboard/ Header'
import Sidebar from '@/components/dashboard/ Sidebar'

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <div className="w-64 h-full">
        <Sidebar />
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col h-full">

        {/* Header */}
        <div className="h-12 shrink-0">
          <Header />
        </div>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>

      </div>
    </div>
  )
}
