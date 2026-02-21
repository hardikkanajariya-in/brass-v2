export default function ProductsLoading() {
  return (
    <div className="animate-pulse">
      {/* Breadcrumb skeleton */}
      <div className="container-custom py-4">
        <div className="h-4 w-48 rounded bg-neutral-200" />
      </div>

      {/* Hero banner skeleton */}
      <div className="bg-neutral-200 py-16">
        <div className="container-custom text-center">
          <div className="mx-auto mb-4 h-10 w-72 rounded bg-neutral-300" />
          <div className="mx-auto h-5 w-96 max-w-full rounded bg-neutral-300/60" />
        </div>
      </div>

      {/* Filter bar skeleton */}
      <div className="container-custom py-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-9 w-24 rounded-full bg-neutral-200" />
            ))}
          </div>
          <div className="flex gap-3">
            <div className="h-10 w-64 rounded-lg bg-neutral-200" />
            <div className="h-10 w-32 rounded-lg bg-neutral-200" />
          </div>
        </div>

        {/* Product grid skeleton */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="aspect-[4/3] bg-neutral-200" />
              <div className="p-4">
                <div className="mb-2 h-4 w-20 rounded bg-neutral-100" />
                <div className="mb-2 h-5 w-3/4 rounded bg-neutral-200" />
                <div className="mb-1 h-3 w-full rounded bg-neutral-100" />
                <div className="h-3 w-2/3 rounded bg-neutral-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
