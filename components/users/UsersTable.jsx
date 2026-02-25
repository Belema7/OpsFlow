import UserRow from "./UserRow";
import Pagination from "@/components/shared/Pagination";
import EmptyState from "@/components/shared/EmptyState";

export default function UsersTable({ users, currentPage, total }) {
  if (!users?.length) {
    return <EmptyState message="No users found" />;
  }

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/80 backdrop-blur-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Users Management</h2>
        <span className="text-xs font-medium bg-gray-800 px-2.5 py-1 rounded-full text-gray-400">
          {total} total
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-800/40 text-gray-500 text-xs uppercase tracking-wider">
              <th className="px-6 py-3 font-semibold">Profile</th>
              <th className="px-6 py-3 font-semibold">Role</th>
              <th className="px-6 py-3 font-semibold">Company</th>
              <th className="px-6 py-3 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800/50">
            {users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        total={total}
        basePath="/dashboard/users"
      />
    </div>
  );
}