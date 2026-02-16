import React from 'react';

const RowTable = ({ user }) => {
  return (
    <tr className="hover:bg-blue-50/50 dark:hover:bg-gray-700 transition-colors">
      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 font-mono">
        #{user.id}
      </td>

      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
        {user.firstName} {user.lastName}
      </td>

      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300 italic">
        {user.email}
      </td>

      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
        {user.phone}
      </td>
    </tr>
  );
};

export default RowTable;
