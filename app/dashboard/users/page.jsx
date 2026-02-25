import Link from "next/link";
import { getUsers } from "@/lib/api/users";
import UsersTable from "@/components/users/UsersTable";

export default async function UsersPage({ searchParams }) {
  const params = await searchParams;
  const currentPage = Number(params?.page) || 1;
  const { users, total } = await getUsers(currentPage);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Users</h1>
        <Link
          href="/dashboard/users/add"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          + Add User
        </Link>
      </div>

      <UsersTable users={users} currentPage={currentPage} total={total} />
    </div>
  );
}
