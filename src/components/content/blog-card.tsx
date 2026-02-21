import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  readMoreLabel: string;
}

export function BlogCard({ post, readMoreLabel }: BlogCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-neutral-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <PlaceholderImage shape="rectangle" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute left-3 top-3">
          <Badge variant="brand">{post.category}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Meta */}
        <div className="mb-2 flex items-center gap-3 text-xs text-neutral-500">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(post.publishedAt)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>

        <h3 className="mb-2 text-lg font-semibold text-brand-secondary transition-colors duration-200 group-hover:text-brand-primary">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-600">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-1">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-brand-primary transition-colors hover:text-brand-primary-dark"
        >
          {readMoreLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
