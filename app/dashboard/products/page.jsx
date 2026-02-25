import Link from "next/link";
import { getProducts } from "@/lib/api/products";
import ProductsTable from "@/components/products/ProductsTable";

export default async function ProductsPage({ searchParams }) {
  const params = await searchParams;
  const currentPage = Number(params?.page) || 1;
  const { products, total } = await getProducts(currentPage);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Products</h1>
        <Link
          href="/dashboard/products/add"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          + Add Product
        </Link>
      </div>

      <ProductsTable products={products} currentPage={currentPage} total={total} />
    </div>
  );
}
