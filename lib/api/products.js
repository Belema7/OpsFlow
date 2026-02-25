import { PRODUCTS_API_BASE, DEFAULT_PAGE_SIZE } from "@/utils/constants";

export async function getProducts(page = 1, limit = DEFAULT_PAGE_SIZE) {
    const res = await fetch(PRODUCTS_API_BASE, { cache: "no-store" });

    if (!res.ok) {
        throw new Error(`Failed to fetch products: ${res.status}`);
    }

    const allProducts = await res.json();
    const total = allProducts.length;
    const start = (page - 1) * limit;
    const products = allProducts.slice(start, start + limit);

    return { products, total };
}

export async function getProductById(id) {
    const res = await fetch(`${PRODUCTS_API_BASE}/${id}`, { cache: "no-store" });

    if (!res.ok) {
        throw new Error(`Failed to fetch product ${id}: ${res.status}`);
    }

    return res.json();
}
