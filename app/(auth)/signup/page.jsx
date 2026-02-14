'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="w-full bg-white dark:bg-black
                    shadow-xl rounded-2xl p-8 
                    border border-slate-200 dark:border-slate-700">

      {/* Title */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Create Account
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Sign up to get started
        </p>
      </div>

      {/* Form */}
      <form className="space-y-5">

        {/* Name */}
        <div>
          <label className="block text-sm font-medium 
                            text-slate-700 dark:text-slate-300 mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-2.5 rounded-xl 
                       bg-slate-50 dark:bg-slate-900
                       border border-slate-300 dark:border-slate-700
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       text-slate-900 dark:text-white
                       placeholder:text-slate-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium 
                            text-slate-700 dark:text-slate-300 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2.5 rounded-xl 
                       bg-slate-50 dark:bg-slate-900
                       border border-slate-300 dark:border-slate-700
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       text-slate-900 dark:text-white
                       placeholder:text-slate-400"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium 
                            text-slate-700 dark:text-slate-300 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-xl 
                         bg-slate-50 dark:bg-slate-900
                         border border-slate-300 dark:border-slate-700
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         text-slate-900 dark:text-white
                         placeholder:text-slate-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
              className="absolute right-3 top-2.5 text-sm 
                         text-slate-500 dark:text-slate-400"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium 
                            text-slate-700 dark:text-slate-300 mb-1">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-xl 
                         bg-slate-50 dark:bg-slate-900
                         border border-slate-300 dark:border-slate-700
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         text-slate-900 dark:text-white
                         placeholder:text-slate-400"
            />
            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(prev => !prev)
              }
              className="absolute right-3 top-2.5 text-sm 
                         text-slate-500 dark:text-slate-400"
            >
              {showConfirmPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
          <input
            type="checkbox"
            className="mt-1 rounded border-slate-300 dark:border-slate-600"
          />
          <span>
            I agree to the{' '}
            <Link
              href="/terms"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Terms & Conditions
            </Link>
          </span>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-2.5 rounded-xl 
                     bg-blue-600 hover:bg-blue-700
                     text-white font-medium
                     transition-colors duration-200"
        >
          Create Account
        </button>
      </form>

      {/* Divider */}
      <div className="my-6 flex items-center gap-3">
        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
        <span className="text-xs text-slate-400">OR</span>
        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
      </div>

      {/* Login Link */}
      <p className="text-center text-sm text-slate-600 dark:text-slate-400">
        Already have an account?{' '}
        <Link
          href="/login"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  )
}
