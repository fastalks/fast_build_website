'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg dark:border-gray-800 dark:bg-black/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-black dark:text-white">
              AnimeGent
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#features" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
                功能特性
              </Link>
              <Link href="#how-it-works" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
                使用方法
              </Link>
              <Link href="#gallery" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
                作品展示
              </Link>
              <Link href="#pricing" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
                价格方案
              </Link>
              <Link
                href="/generate"
                className="rounded-full bg-black px-6 py-2 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                开始创作
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black dark:text-gray-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link href="#features" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900">
              功能特性
            </Link>
            <Link href="#how-it-works" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900">
              使用方法
            </Link>
            <Link href="#gallery" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900">
              作品展示
            </Link>
            <Link href="#pricing" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900">
              价格方案
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
