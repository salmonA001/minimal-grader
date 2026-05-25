import { Outlet, Link, useLocation } from 'react-router-dom';
import { BookOpen, Code2, History, LayoutDashboard, LogIn, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navItems = [
    { name: 'หน้าหลัก', path: '/', icon: LayoutDashboard },
    { name: 'ชั้นเรียน', path: '/classes', icon: BookOpen },
    { name: 'คลังโจทย์', path: '/problemset', icon: Code2 },
    { name: 'สถานะการส่ง', path: '/submissions', icon: History },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 dark:text-gray-100 transition-colors duration-200">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
              <span className="text-blue-600 dark:text-blue-500">Grader</span>
              <span className="text-gray-900 dark:text-gray-100 font-medium">Minimal</span>
            </Link>
            <nav className="hidden md:flex gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path || (item.path === '/problemset' && location.pathname.startsWith('/problem/'));
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-gray-50'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800/50 hover:text-gray-900 dark:hover:text-gray-50'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
              aria-label="สลับโหมดมืด/สว่าง"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link
              to="/login"
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-sm"
            >
              <LogIn className="h-4 w-4" />
              เข้าสู่ระบบ
            </Link>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}
