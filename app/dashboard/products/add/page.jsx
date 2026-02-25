import ProductForm from "@/components/products/ProductForm";
import Link from "next/link";

export default function AddProductPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard/products"
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          ← Back to Products
        </Link>
      </div>

      <div className="rounded-xl border border-gray-800 bg-gray-900/80 backdrop-blur-sm p-6">
        <h1 className="text-xl font-bold text-white mb-6">Add New Product</h1>

        <ProductForm
          onSubmit={async (values) => {
            "use server";
            console.log("Create product:", values);
          }}
        />
      </div>
    </div>
  );
}