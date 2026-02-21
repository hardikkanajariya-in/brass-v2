import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { BlogCard } from "@/components/content/blog-card";
import { ArticleJsonLd } from "@/components/seo/json-ld";
import { getBlogPosts, getBlogBySlug } from "@/lib/data";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const t = await getTranslations("blog");
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const allPosts = getBlogPosts();
  const recentPosts = allPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <ArticleJsonLd post={post} />
      <Breadcrumb />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Back link */}
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-1 text-sm text-brand-primary transition-colors hover:text-brand-primary-dark"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("backToBlog")}
            </Link>

            {/* Header */}
            <div className="mb-8">
              <Badge variant="brand" className="mb-3">
                {post.category}
              </Badge>
              <h1 className="text-3xl font-bold text-brand-secondary md:text-4xl">
                {post.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
                <span>{post.author}</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {post.content.split("\n").map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-neutral-200 pt-6">
              <Tag className="h-4 w-4 text-neutral-400" />
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Recent posts */}
      {recentPosts.length > 0 && (
        <Section background="muted">
          <Container>
            <h2 className="mb-6 text-2xl font-bold text-brand-secondary">
              {t("recentPosts")}
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((rp) => (
                <BlogCard key={rp.id} post={rp} readMoreLabel={t("readMore")} />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
