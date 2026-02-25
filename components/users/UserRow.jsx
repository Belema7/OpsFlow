import Link from "next/link";

export default function UserRow({ user }) {
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <tr className="hover:bg-gray-800/30 transition-colors group">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src={user.image}
            alt={fullName}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-800"
          />
          <div className="flex flex-col">
            <span className="font-medium text-white">{fullName}</span>
            <span className="text-xs text-gray-500">{user.email}</span>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-900/30 text-indigo-400">
          {user.role || "User"}
        </span>
      </td>
      <td className="px-6 py-4 text-sm text-gray-400">
        {user.company?.title || "—"}
      </td>
      <td className="px-6 py-4 text-right">
        <div className="flex justify-end gap-2">
          <Link href={`/dashboard/users/${user.id}`}>
            <button className="text-xs bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-lg hover:bg-emerald-600 hover:text-white transition-all">
              View
            </button>
          </Link>
          <button className="text-xs bg-rose-500/10 text-rose-400 px-3 py-1.5 rounded-lg hover:bg-rose-600 hover:text-white transition-all">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}