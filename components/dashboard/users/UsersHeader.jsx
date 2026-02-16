import React from 'react';

const UsersHeader = () => {
  return (
    <div className="flex items-center justify-between h-16 px-8 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Users
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Manage all registered users
        </p>
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
        Add User
      </button>
    </div>
  );
};

export default UsersHeader;
