export default function PageLoading() {
  return (
    <div className="animate-pulse">
      <div className="container-custom py-4">
        <div className="h-4 w-40 rounded bg-neutral-200" />
      </div>
      <div className="bg-neutral-200 py-16">
        <div className="container-custom text-center">
          <div className="mx-auto mb-4 h-10 w-56 rounded bg-neutral-300" />
          <div className="mx-auto h-5 w-96 max-w-full rounded bg-neutral-300/60" />
        </div>
      </div>
      <div className="container-custom py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-lg bg-neutral-100 p-6">
              <div className="mb-3 h-10 w-10 rounded-lg bg-neutral-200" />
              <div className="mb-2 h-5 w-3/4 rounded bg-neutral-200" />
              <div className="h-4 w-full rounded bg-neutral-100" />
              <div className="mt-2 h-4 w-2/3 rounded bg-neutral-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
