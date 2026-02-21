export default function BlogLoading() {
  return (
    <div className="animate-pulse">
      {/* Breadcrumb skeleton */}
      <div className="container-custom py-4">
        <div className="h-4 w-36 rounded bg-neutral-200" />
      </div>

      {/* Hero banner skeleton */}
      <div className="bg-neutral-200 py-16">
        <div className="container-custom text-center">
          <div className="mx-auto mb-4 h-10 w-64 rounded bg-neutral-300" />
          <div className="mx-auto h-5 w-80 rounded bg-neutral-300/60" />
        </div>
      </div>

      {/* Blog grid skeleton */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="aspect-video bg-neutral-200" />
              <div className="p-5">
                <div className="mb-3 flex gap-3">
                  <div className="h-3 w-20 rounded bg-neutral-100" />
                  <div className="h-3 w-16 rounded bg-neutral-100" />
                </div>
                <div className="mb-2 h-6 w-4/5 rounded bg-neutral-200" />
                <div className="mb-1 h-3 w-full rounded bg-neutral-100" />
                <div className="mb-1 h-3 w-full rounded bg-neutral-100" />
                <div className="mb-4 h-3 w-2/3 rounded bg-neutral-100" />
                <div className="h-4 w-24 rounded bg-neutral-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
