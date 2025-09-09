import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 overflow-hidden text-slate-900 dark:text-neutral-300 lg:h-[90vh]">
      <h1 className="text-4xl font-semibold md:text-6xl">Why am i here?</h1>
      <p className="text-center">
        It seems like the page that you are looking for is no longer here.
      </p>
      <Link
        href="/"
        className="rounded-md bg-neutral-600 px-6 py-4 text-xs uppercase text-neutral-100 transition-all duration-300 hover:shadow-lg dark:bg-neutral-300 dark:text-neutral-700"
      >
        Take me home
      </Link>
    </div>
  );
}
