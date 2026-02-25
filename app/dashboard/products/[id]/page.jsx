import { getProductById } from "@/lib/api/products";
import ProductForm from "@/components/products/ProductForm";
import Link from "next/link";

export default async function EditProductPage({ params }) {
  const { id } = await params;
  const product = await getProductById(id);

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
        <div className="flex items-center gap-4 mb-8">
          <img
            src={product.image}
            alt={product.title}
            className="w-16 h-16 rounded-lg object-contain bg-white p-1"
          />
          <div>
            <h1 className="text-xl font-bold text-white">{product.title}</h1>
            <p className="text-sm text-gray-400 capitalize">{product.category}</p>
          </div>
        </div>

        <ProductForm
          initialValues={{
            id: product.id,
            title: product.title,
            price: String(product.price),
            description: product.description || "",
            category: product.category || "",
          }}
          onSubmit={async (values) => {
            "use server";
            console.log("Update product:", values);
          }}
        />
      </div>
    </div>
  );
}