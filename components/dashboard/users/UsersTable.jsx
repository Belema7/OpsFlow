import React from 'react';
import RowTable from './RowTable';

const UsersTable = ({ users, total }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Summary bar */}
      <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          User Directory
        </h1>

        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
          Total: {total}
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-0">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700">
              <th className="px-6 py-3 text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider border-b">
                ID
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider border-b">
                Name
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider border-b">
                Email
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider border-b">
                Phone
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {users.map((user) => (
              <RowTable key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
