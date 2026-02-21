export default function PageLoading() {
  return (
    <div className="animate-pulse">
      <div className="container-custom py-4">
        <div className="h-4 w-52 rounded bg-neutral-200" />
      </div>
      <div className="bg-neutral-200 py-16">
        <div className="container-custom text-center">
          <div className="mx-auto mb-4 h-10 w-56 rounded bg-neutral-300" />
          <div className="mx-auto h-5 w-80 rounded bg-neutral-300/60" />
        </div>
      </div>
      <div className="container-custom py-12">
        <div className="space-y-4 rounded-lg bg-neutral-100 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="h-10 rounded bg-neutral-200" />
            <div className="h-10 rounded bg-neutral-200" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="h-10 rounded bg-neutral-200" />
            <div className="h-10 rounded bg-neutral-200" />
          </div>
          <div className="h-32 rounded bg-neutral-200" />
          <div className="h-10 w-40 rounded bg-neutral-200" />
        </div>
      </div>
    </div>
  );
}
