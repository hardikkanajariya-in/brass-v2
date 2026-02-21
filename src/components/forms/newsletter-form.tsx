"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";

export function NewsletterForm() {
  const t = useTranslations("footer.newsletter");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Static site — simulate submission
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t("placeholder")}
        required
        className="flex-1 rounded-button bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50 outline-none transition-colors focus:bg-white/15 focus:ring-1 focus:ring-brand-primary"
      />
      <button
        type="submit"
        className="inline-flex items-center gap-1.5 rounded-button bg-brand-primary px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-primary-dark"
      >
        <Send className="h-3.5 w-3.5" />
      </button>
      {status === "success" && (
        <p className="absolute mt-12 text-xs text-green-400">
          {t("success")}
        </p>
      )}
    </form>
  );
}
