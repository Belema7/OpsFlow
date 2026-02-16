import React from 'react';

const RowTable = ({ user }) => {
  return (
    <tr className="hover:bg-blue-50/50 transition-colors group">
      <td className="px-6 py-4 text-sm text-gray-500 font-mono">#{user.id}</td>
      <td className="px-6 py-4 text-sm font-medium text-gray-900">
        {user.firstName} {user.lastName}
      </td>
      <td className="px-6 py-4 text-sm text-gray-600 italic">{user.email}</td>
      <td className="px-6 py-4 text-sm text-gray-600">{user.phone}</td>
    </tr>
  );
};

export default RowTable;
