import React from 'react'

const ProductsPage = () => {
  return (
    <div className='w-full h-full flex flex-col'>
      <h1 className='text-2xl font-bold'>Products Page</h1>
      <div className='mb-5 flex justify-end'>
        <button className='bg-indigo-600 hover:bg-indigo-700 transition-colors text-white px-4 py-2 rounded-lg font-medium text-sm'>
          + Add Product
        </button>
      </div>

      {/* Table Section */}
      <div className='bg-white dark:bg-slate-900 shadow-sm rounded-xl overflow-hidden w-full'>
        <div className='p-5 border-b border-slate-100 dark:border-slate-800'>
          <h2 className='text-xl font-semibold'>Products Management</h2>
        </div>
        
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr className='bg-slate-50/50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-sm uppercase tracking-wider'>
              <th className='px-6 py-4 font-semibold'>Product Name</th>
              <th className='px-6 py-4 font-semibold'>Category</th>
              <th className='px-6 py-4 font-semibold'>Price</th>
              <th className='px-6 py-4 font-semibold text-right'>Action</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-slate-100 dark:divide-slate-800'>
            {/* Sample Product Row */}
            <tr className='hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors'>
              <td className='px-6 py-4'>Sample Product</td>
              <td className='px-6 py-4'>Category A</td>
              <td className='px-6 py-4'>$19.99</td>
              <td className='px-6 py-4 text-right'>
                <div className='flex justify-end gap-2'>
                  <button className='text-xs bg-emerald-500/10 text-emerald-600 px-3 py-1 rounded hover:bg-emerald-500 hover:text-white transition-all'>
                    View
                  </button>
                  <button className='text-xs bg-rose-500/10 text-rose-600 px-3 py-1 rounded hover:bg-rose-500 hover:text-white transition-all'>Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>  
    </div>
  )
}

export default ProductsPage