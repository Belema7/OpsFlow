// import DarkModeSwitch from '@/components/ui/ThemeToggle'
// import Link from 'next/link'
// import React from 'react'


// const layout = ({ children }) => {
//   return (
//     <div>
//         <div className="flex items-center justify-end p-4 gap-4">
//         <Link href={'/'}>Home</Link>
//         <DarkModeSwitch/>
//         </div>
//         {children}
//     </div>
//   )
// }

// export default layout

import DarkModeSwitch from '@/components/ui/ThemeToggle'
import Link from 'next/link'

export default function AuthLayout({ children }) {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
    <div className="flex items-center justify-end p-4 gap-4">
        <DarkModeSwitch/>
    </div>
    <div className="min-h-screen flex items-center justify-center 
                    bg-slate-50 dark:bg-slate-900 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:underline"
          >
            Back to home
          </Link>
        </div>

        {children}
      </div>
    </div>
    </div>
  )
}
