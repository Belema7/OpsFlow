import Link from "next/link";
import { formatCurrency } from "@/utils/formatters";

export default function ProductRow({ product }) {
  return (
    <tr className="hover:bg-gray-800/30 transition-colors group">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src={product.image}
            alt={product.title}
            className="w-12 h-12 rounded-lg object-contain bg-white p-1"
          />
          <div className="flex flex-col max-w-[220px]">
            <span className="font-medium text-white truncate">{product.title}</span>
            <span className="text-xs text-gray-500 truncate">{product.description}</span>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-violet-900/30 text-violet-400 capitalize">
          {product.category}
        </span>
      </td>
      <td className="px-6 py-4">
        <span className="font-semibold text-white">{formatCurrency(product.price)}</span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex text-amber-400 text-xs">
            {"★".repeat(Math.round(product.rating?.rate || 0))}
          </div>
          <span className="text-xs text-gray-500">
            ({product.rating?.count || 0})
          </span>
        </div>
      </td>
      <td className="px-6 py-4 text-right">
        <div className="flex justify-end gap-2">
          <Link href={`/dashboard/products/${product.id}`}>
            <button className="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1.5 rounded-lg hover:bg-indigo-600 hover:text-white transition-all">
              Edit
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