import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = ({ size = 32 }) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-${size} h-${size} bg-amber-600 rounded-md`} />
      <Image
       src="/logo.jpg" alt="OpsFlow Logo" width={100} height={32} className="hidden sm:block rounded-full" />
    </div>
  )
}

export default Logo
