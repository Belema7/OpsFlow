import React from 'react'
import Link from 'next/link'
import Search from '@/components/ui/dashboard/search/Search'

const ProductsPage = () => {
  // Product Data Array
  const products = [
    {
      id: 1,
      title: "iPhone 15 Pro",
      desc: "Apple's latest flagship smartphone with titanium design.",
      price: 999.00,
      stock: 34,
      category: "Electronics",
      img: "https://images.pexels.com"
    },
    {
      id: 2,
      title: "Mechanical Keyboard",
      desc: "RGB backlit mechanical keyboard with blue switches.",
      price: 129.50,
      stock: 12,
      category: "Accessories",
      img: "https://images.pexels.com"
    },
    {
      id: 3,
      title: "Ergonomic Desk Chair",
      desc: "High-back mesh chair with lumbar support.",
      price: 245.00,
      stock: 8,
      category: "Furniture",
      img: "https://images.pexels.com"
    },
  ];

  return (
    <div className='p-6 min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100'>
      {/* Header Section */}
      <div className='flex items-center justify-between bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm mb-6'>
        <Search placeholder="Search products..." />
        <Link href="/dashboard/products/add">
          <button className='bg-indigo-600 hover:bg-indigo-700 transition-colors text-white px-4 py-2 rounded-lg font-medium text-sm'>
            + Add Product
          </button>
        </Link>
      </div>

      {/* Table Section */}
      <div className='bg-white dark:bg-slate-900 shadow-sm rounded-xl overflow-hidden w-full'>
        <div className='p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center'>
          <h2 className='text-xl font-semibold'>Inventory</h2>
          <span className='text-xs font-medium bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-500'>
            {products.length} Items Total
          </span>
        </div>
        
        <div className="overflow-x-auto">
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='bg-slate-50/50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-sm uppercase tracking-wider'>
                <th className='px-6 py-4 font-semibold'>Product</th>
                <th className='px-6 py-4 font-semibold'>Category</th>
                <th className='px-6 py-4 font-semibold'>Price</th>
                <th className='px-6 py-4 font-semibold'>Stock</th>
                <th className='px-6 py-4 font-semibold text-right'>Action</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-100 dark:divide-slate-800'>
              {products.map((product) => (
                <tr key={product.id} className='hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors group'>
                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-3'>
                      <img 
                        src={product.img} 
                        alt={product.title} 
                        className='w-12 h-12 rounded-lg object-cover bg-slate-100 dark:bg-slate-800'
                      />
                      <div className='flex flex-col max-w-[200px]'>
                        <span className='font-medium text-slate-900 dark:text-white truncate'>{product.title}</span>
                        <span className='text-xs text-slate-500 truncate'>{product.desc}</span>
                      </div>
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <span className='text-sm text-slate-600 dark:text-slate-400'>{product.category}</span>
                  </td>
                  <td className='px-6 py-4'>
                    <span className='font-semibold text-slate-900 dark:text-white'>${product.price.toFixed(2)}</span>
                  </td>
                  <td className='px-6 py-4'>
                    <span className={`text-sm font-medium ${product.stock < 10 ? 'text-amber-500' : 'text-slate-500'}`}>
                      {product.stock} left
                    </span>
                  </td>
                  <td className='px-6 py-4 text-right'>
                    <div className='flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                      <Link href={`/dashboard/products/${product.id}`}>
                        <button className='text-xs bg-indigo-500/10 text-indigo-600 px-3 py-1.5 rounded hover:bg-indigo-500 hover:text-white transition-all'>
                          Edit
                        </button>
                      </Link>
                      <button className='text-xs bg-rose-500/10 text-rose-600 px-3 py-1.5 rounded hover:bg-rose-500 hover:text-white transition-all'>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>  
    </div>
  )
}

export default ProductsPage
