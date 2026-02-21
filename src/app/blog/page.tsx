import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Newspaper } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { SectionHeading } from "@/components/content/section-heading";
import { BlogCard } from "@/components/content/blog-card";
import { getBlogPosts } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return {
    title: t("blog.title"),
    description: t("blog.description"),
  };
}

export default function BlogPage() {
  const t = useTranslations("blog");
  const posts = getBlogPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <>
      <Breadcrumb />

      <Section background="brand">
        <Container>
          <div className="relative overflow-hidden py-12 text-center text-white md:py-16">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/5" />
            <h1 className="relative text-3xl font-bold md:text-4xl lg:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="relative mx-auto mt-4 max-w-2xl text-lg text-white/80">
              {t("hero.subtitle")}
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          {/* Featured post - larger card */}
          {featuredPost && (
            <div className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10">
                  <Newspaper className="h-5 w-5 text-brand-primary" />
                </div>
                <h2 className="text-lg font-semibold text-brand-secondary">Latest Article</h2>
                <div className="h-px flex-1 bg-brand-primary/20" />
              </div>
              <div className="grid gap-8 lg:grid-cols-2">
                <BlogCard post={featuredPost} readMoreLabel={t("readMore")} />
                {remainingPosts[0] && (
                  <BlogCard post={remainingPosts[0]} readMoreLabel={t("readMore")} />
                )}
              </div>
            </div>
          )}

          {/* Remaining posts */}
          {remainingPosts.length > 1 && (
            <>
              <SectionHeading
                title="More Articles"
                subtitle="Stay informed with industry insights and updates"
              />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                {remainingPosts.slice(1).map((post) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    readMoreLabel={t("readMore")}
                  />
                ))}
              </div>
            </>
          )}
        </Container>
      </Section>
    </>
  );
}
