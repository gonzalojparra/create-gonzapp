import Link from 'next/link';

export function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 h-auto w-full overflow-hidden border-t'>
      <div className='container mx-auto flex h-full w-full items-center justify-center px-5 py-3'>
        <p className='text-pretty text-center text-xs leading-loose text-muted-foreground md:text-sm'>
          Created with{' '}
          <Link
            className='font-medium underline underline-offset-4'
            href='https://github.com/gonzalojparra/create-gonzapp'
            rel='noopener noreferrer'
            target='_blank'
          >
            Gonzapp
          </Link>
          . Copyright © 2024.
        </p>
      </div>
    </footer>
  );
}
