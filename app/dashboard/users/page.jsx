import React from 'react';
import Search from '@/components/ui/dashboard/search/Search';
import Link from 'next/link';

const UsersPage = () => {
  // Mock Data Array
  const users = [
    {
      profile: { name: "John Doe", img: "https://i.pravatar.cc", email: "john@example.com" },
      role: "Admin",
      status: "Active",
      createdAt: "2024.01.15"
    },
    {
      profile: { name: "Sarah Smith", img: "https://i.pravatar.cc", email: "sarah@example.com" },
      role: "Editor",
      status: "Inactive",
      createdAt: "2024.02.10"
    },
  ];

  return (
    <div className='p-6 min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100'>
      {/* Header Section */}
      <div className='flex items-center justify-between bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm mb-6'>
        <Search placeholder="Search users..." />
        <Link href="/dashboard/users/add">
          <button className='bg-indigo-600 hover:bg-indigo-700 transition-colors text-white px-4 py-2 rounded-lg font-medium text-sm'>
            + Add User
          </button>
        </Link>
      </div>

      {/* Table Section */}
      <div className='bg-white dark:bg-slate-900 shadow-sm rounded-xl overflow-hidden'>
        <div className='p-5 border-b border-slate-100 dark:border-slate-800'>
          <h2 className='text-xl font-semibold'>Users Management</h2>
        </div>
        
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr className='bg-slate-50/50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-sm uppercase tracking-wider'>
              <th className='px-6 py-4 font-semibold'>Profile</th>
              <th className='px-6 py-4 font-semibold'>Role</th>
              <th className='px-6 py-4 font-semibold'>Joined Date</th>
              <th className='px-6 py-4 font-semibold text-right'>Action</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-slate-100 dark:divide-slate-800'>
            {users.map((user, index) => (
              <tr key={index} className='hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors'>
                <td className='px-6 py-4'>
                  <div className='flex items-center gap-3'>
                    <img 
                      src={user.profile.img} 
                      alt={user.profile.name} 
                      className='w-10 h-10 rounded-full object-cover ring-2 ring-slate-100 dark:ring-slate-800'
                    />
                    <div className='flex flex-col'>
                      <span className='font-medium text-slate-900 dark:text-white'>{user.profile.name}</span>
                      <span className='text-xs text-slate-500'>{user.profile.email}</span>
                    </div>
                  </div>
                </td>
                <td className='px-6 py-4'>
                  <span className='px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'>
                    {user.role}
                  </span>
                </td>
                <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-400'>
                  {user.createdAt}
                </td>
                <td className='px-6 py-4 text-right'>
                  <div className='flex justify-end gap-2'>
                    <button className='text-xs bg-emerald-500/10 text-emerald-600 px-3 py-1 rounded hover:bg-emerald-500 hover:text-white transition-all'>View</button>
                    <button className='text-xs bg-rose-500/10 text-rose-600 px-3 py-1 rounded hover:bg-rose-500 hover:text-white transition-all'>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersPage;
