import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  basePath,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={cn("flex items-center justify-center gap-2", className)}>
      {currentPage > 1 && (
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 text-neutral-600 transition-colors hover:border-brand-primary hover:text-brand-primary"
        >
          <ChevronLeft className="h-4 w-4" />
        </Link>
      )}
      {pages.map((page) => (
        <Link
          key={page}
          href={`${basePath}?page=${page}`}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors",
            page === currentPage
              ? "bg-brand-primary text-white"
              : "border border-neutral-200 text-neutral-600 hover:border-brand-primary hover:text-brand-primary"
          )}
        >
          {page}
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 text-neutral-600 transition-colors hover:border-brand-primary hover:text-brand-primary"
        >
          <ChevronRight className="h-4 w-4" />
        </Link>
      )}
    </nav>
  );
}
