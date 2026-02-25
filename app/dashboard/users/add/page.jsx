import UserForm from "@/components/users/UserForm";
import Link from "next/link";

export default function AddUserPage() {
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
                <h1 className="text-xl font-bold text-white mb-6">Add New User</h1>

                <UserForm
                    onSubmit={async (values) => {
                        "use server";
                        console.log("Create user:", values);
                    }}
                />
            </div>
        </div>
    );
}