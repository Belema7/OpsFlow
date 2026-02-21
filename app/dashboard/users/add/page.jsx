import React from 'react'

const AddUser = () => {
  return (
    <div className="p-4 dark:bg-(--color-page) ">
        <h1 className="text-2xl font-bold mb-4">Add New User</h1>
        <form className="space-y-4">
            <div>
                <label className="block mb-1">Name</label>
                <input type="text" className="border p-2 w-full" placeholder="Enter name" />
            </div>
            <div>
                <label className="block mb-1">Email</label>
                <input type="email" className="border p-2 w-full" placeholder="Enter email" />
            </div>
            <div>
                <label className="block mb-1">Role</label>
                <select className="border p-2 w-full">
                    <option value="">Select role</option>
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                    <option value="viewer">Viewer</option>
                </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add User</button>
        </form>
    </div>
  )
}

export default AddUser