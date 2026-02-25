import Sidebar from '@/components/dashboard/Sidebar';
import Navbar from '@/components/dashboard/DashboardNav';
import Footer from '@/components/dashboard/Footer';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex">
      {/* Sidebar – sticky on large screens */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen mx-8">
        <Navbar />

        <main className="flex-1 py-8">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}


