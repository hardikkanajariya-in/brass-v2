import Link from "next/link";
import { useTranslations } from "next-intl";
import { Linkedin, Facebook, Youtube, Mail } from "lucide-react";
import { Container } from "@/components/layout/container";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { siteConfig } from "../../../site.config";

export function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-secondary text-white">
      <Container>
        {/* Main footer grid */}
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
          {/* Column 1: Company */}
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-1">
              <span className="text-xl font-bold text-brand-primary">
                BrassCraft
              </span>
              <span className="text-xl font-semibold text-white">
                Industries
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {t("footer.company.description")}
            </p>
            {/* Social icons */}
            <div className="mt-4 flex gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-primary"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-primary"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-primary"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-primary-light">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2.5">
              {siteConfig.footer.columns[0]?.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-primary"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-primary-light">
              {t("footer.productCategories")}
            </h3>
            <ul className="space-y-2.5">
              {siteConfig.footer.columns[1]?.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-primary"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-primary-light">
              {t("footer.contactUs")}
            </h3>
            <div className="space-y-3 text-sm text-white/70">
              <p>{siteConfig.contact.address.street}</p>
              <p>
                {siteConfig.contact.address.city},{" "}
                {siteConfig.contact.address.state},{" "}
                {siteConfig.contact.address.country} -{" "}
                {siteConfig.contact.address.pincode}
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="transition-colors hover:text-brand-primary"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-brand-primary"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>{siteConfig.contact.workingHours}</p>
            </div>

            {/* Newsletter */}
            {siteConfig.features.showNewsletter && (
              <div className="mt-6">
                <h4 className="mb-2 text-sm font-semibold text-white">
                  {t("footer.newsletter.title")}
                </h4>
                <NewsletterForm />
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/60 sm:text-sm">
          <p>
            {t("footer.copyright", { year: currentYear })}
            <span className="mx-1">|</span>
            {t("footer.builtBy")}{" "}
            <a
              href={siteConfig.footer.credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-primary-light transition-colors hover:text-brand-primary"
            >
              {siteConfig.footer.credit.companyName}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
