export default function PageNotFound() {
  return (
    <div className="flex min-h-[700px] items-center justify-center md:max-h-[600px]">
      <div className="flex items-center gap-4 py-8 -mt-40 text-2xl font-bold text-transparent bg-gradient-to-tr from-teal-500 to-tera-500 bg-clip-text dark:from-teal-200 dark:to-teal-500 md:text-5xl">
        <h1>404</h1>
        <span>:</span>
        <span>Page not found</span>
      </div>
    </div>
  );
}
