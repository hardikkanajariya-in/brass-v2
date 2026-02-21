import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { poppins } from "@/lib/fonts";
import { siteConfig } from "../../site.config";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/ui/back-to-top";
import { PageLoader } from "@/components/ui/page-loader";
import { OrganizationJsonLd } from "@/components/seo/json-ld";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");

  return {
    title: {
      template: siteConfig.seo.titleTemplate,
      default: t("home.title"),
    },
    description: t("home.description"),
    metadataBase: new URL(siteConfig.seo.siteUrl),
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: siteConfig.company.name,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <OrganizationJsonLd />
          <PageLoader />
          <Header />
          <main className="min-h-screen pt-16 md:pt-20">{children}</main>
          <Footer />
          <BackToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
