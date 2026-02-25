import ProductRow from "./ProductRow";
import Pagination from "@/components/shared/Pagination";
import EmptyState from "@/components/shared/EmptyState";

export default function ProductsTable({ products, currentPage, total }) {
  if (!products?.length) {
    return <EmptyState message="No products found" />;
  }

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/80 backdrop-blur-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Inventory</h2>
        <span className="text-xs font-medium bg-gray-800 px-2.5 py-1 rounded-full text-gray-400">
          {total} items
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-800/40 text-gray-500 text-xs uppercase tracking-wider">
              <th className="px-6 py-3 font-semibold">Product</th>
              <th className="px-6 py-3 font-semibold">Category</th>
              <th className="px-6 py-3 font-semibold">Price</th>
              <th className="px-6 py-3 font-semibold">Rating</th>
              <th className="px-6 py-3 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800/50">
            {products.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        total={total}
        basePath="/dashboard/products"
      />
    </div>
  );
}