export default function HomePage() {
  return (
    <section className='container mx-auto flex h-full w-full flex-col items-center justify-center gap-1 lg:gap-5'>
      <h1 className='text-balance text-center text-4xl font-black lg:text-5xl'>
        <span className='animate-background-shine bg-[linear-gradient(110deg,#000000,45%,#c4c4c4,55%,#000000)] bg-[length:250%_100%] bg-clip-text text-transparent dark:bg-[linear-gradient(110deg,#ffffff,45%,#c8c8c8,55%,#ffffff)]'>
          Next.js + ESLint + TypeScript + Shadcn/ui
        </span>
      </h1>
      <div className='mt-5 flex flex-col gap-2'>
        <p className='flex flex-col items-center gap-2 text-pretty text-center lg:flex-row'>
          1. Get started by editing
          <code className='rounded-md bg-gray-100 px-2 py-0.5 text-sm dark:bg-[#282828] dark:text-gray-300'>
            src/app/page.tsx
          </code>
        </p>
        <p className='flex flex-col items-center gap-2 text-pretty text-center lg:flex-row'>
          2. Save your changes and the page will automatically update.
        </p>
      </div>
    </section>
  );
}
