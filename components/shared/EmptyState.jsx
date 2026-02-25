import { MdInbox } from "react-icons/md";

export default function EmptyState({ message = "No data found" }) {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-gray-500">
            <MdInbox size={48} className="mb-3 text-gray-600" />
            <p className="text-sm font-medium">{message}</p>
        </div>
    );
}
