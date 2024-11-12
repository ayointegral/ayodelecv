'use client';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();
  
  const isActive = (path: string) => router.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          <div className="flex space-x-8">
            <Link 
              href="/" 
              className={`${
                isActive('/') 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
              } transition-colors`}
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className={`${
                isActive('/blog') 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
              } transition-colors`}
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className={`${
                isActive('/about') 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
              } transition-colors`}
            >
              About Me
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;