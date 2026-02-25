import { getUserById } from "@/lib/api/users";
import UserForm from "@/components/users/UserForm";
import Link from "next/link";

export default async function EditUserPage({ params }) {
  const { id } = await params;
  const user = await getUserById(id);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard/users"
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          ← Back to Users
        </Link>
      </div>

      <div className="rounded-xl border border-gray-800 bg-gray-900/80 backdrop-blur-sm p-6">
        <div className="flex items-center gap-4 mb-8">
          <img
            src={user.image}
            alt={`${user.firstName} ${user.lastName}`}
            className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-700"
          />
          <div>
            <h1 className="text-xl font-bold text-white">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-sm text-gray-400">{user.email}</p>
          </div>
        </div>

        <UserForm
          initialValues={{
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone || "",
            role: user.role || "",
          }}
          onSubmit={async (values) => {
            "use server";
            console.log("Update user:", values);
          }}
        />
      </div>
    </div>
  );
}