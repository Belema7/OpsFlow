import React from 'react'

const AddProduct = () => {
  return (
    <div className='p-6 min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100'>
      <h1 className='text-2xl font-bold mb-6'>Add New Product</h1>
      <div className='bg-white dark:bg-slate-900 shadow-sm rounded-xl p-6'>
        <form>
          <div className='mb-4'>
            <label htmlFor="name" className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1'>Product Name</label>
            <input type="text" id="name" className='w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white' placeholder="Enter product name" />
          </div>
          <div className='mb-4'>
            <label htmlFor="category" className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1'>Category</label>
            <select id="category" className='w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white'>
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="home">Home & Kitchen</option>
            </select>
          </div>
          <div className='mb-4'>
            <label htmlFor="price" className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1'>Price ($)</label>
            <input type="number" id="price" className='w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white' placeholder="Enter price" />
          </div>
          <button type="submit" className='bg-indigo-600 hover:bg-indigo-70 transition-colors text-white px-4 py-2 rounded-lg font-medium text-sm'>
            Save Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct