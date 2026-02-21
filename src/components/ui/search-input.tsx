"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder,
  className,
}: SearchInputProps) {
  return (
    <div className={cn("relative", className)}>
      <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-neutral-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-input border border-neutral-200 bg-white py-2.5 pr-4 pl-10 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none"
      />
    </div>
  );
}
