export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-neutral-200 h-[60vh]" />

      {/* Content sections skeleton */}
      <div className="container-custom py-16">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mx-auto mb-4 h-8 w-64 rounded bg-neutral-200" />
          <div className="mx-auto h-4 w-96 max-w-full rounded bg-neutral-100" />
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-lg bg-neutral-100 p-6">
              <div className="mb-4 h-12 w-12 rounded-lg bg-neutral-200" />
              <div className="mb-2 h-5 w-3/4 rounded bg-neutral-200" />
              <div className="h-4 w-full rounded bg-neutral-100" />
              <div className="mt-1 h-4 w-2/3 rounded bg-neutral-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
