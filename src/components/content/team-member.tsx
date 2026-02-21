import { User } from "lucide-react";
import type { TeamMember as TeamMemberType } from "@/types";

interface TeamMemberProps {
  member: TeamMemberType;
}

export function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="group rounded-card bg-white p-6 text-center shadow-card transition-shadow duration-300 hover:shadow-lg">
      {/* Avatar placeholder */}
      <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-brand-primary/10 transition-colors duration-300 group-hover:bg-brand-primary/20">
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
    </div>
  );
}
