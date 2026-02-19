import Sidebar from '@/components/ui/dashboard/sidebar/Sidebar';
import Navbar from '@/components/ui/dashboard/navbar/Navbar';
import Footer from '@/components/ui/dashboard/footer/Footer';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex">
      {/* Sidebar – sticky on large screens */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen mx-8">
        <Navbar />

        <main className="flex-1 px-5 sm:px-8 lg:px-12 py-8">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}


