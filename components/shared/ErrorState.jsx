import { MdErrorOutline } from "react-icons/md";
import Button from "@/components/ui/Button";

export default function ErrorState({ message = "Something went wrong", onRetry }) {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-gray-500">
            <MdErrorOutline size={48} className="mb-3 text-rose-500" />
            <p className="text-sm font-medium mb-4">{message}</p>
            {onRetry && (
                <Button variant="ghost" size="sm" onClick={onRetry}>
                    Try Again
                </Button>
            )}
        </div>
    );
}
