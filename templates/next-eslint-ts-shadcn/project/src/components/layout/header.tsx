import Link from 'next/link';

import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  return (
    <header className='fixed left-0 top-0 h-auto w-full overflow-hidden border-b'>
      <nav className='container mx-auto flex h-full w-full items-center justify-between px-5 py-3'>
        <Link
          className='text-lg font-bold'
          href='https://github.com/gonzalojparra/create-gonzapp'
          rel='noopener noreferrer'
          target='_blank'
        >
          Gonzapp
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
