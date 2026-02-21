import { User } from "lucide-react";
import type { TeamMember as TeamMemberType } from "@/types";

interface TeamMemberProps {
  member: TeamMemberType;
}

export function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="group relative overflow-hidden rounded-card bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Avatar placeholder */}
      <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary/10 to-brand-primary/20 ring-4 ring-brand-primary/5 transition-all duration-300 group-hover:ring-brand-primary/20">
        <User className="h-10 w-10 text-brand-primary" />
      </div>

      <h3 className="text-lg font-semibold text-brand-secondary">
        {member.name}
      </h3>
      <p className="text-sm font-medium text-brand-primary">
        {member.designation}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
        {member.bio}
      </p>

      {/* Bottom accent bar */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-primary to-brand-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
