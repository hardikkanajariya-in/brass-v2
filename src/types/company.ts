export interface Milestone {
  year: number;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  image: string;
  bio: string;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  lucideIcon: string;
}

export interface Company {
  name: string;
  tagline: string;
  description: string;
  founded: number;
  employees: string;
  exportCountries: number;
  monthlyCapacity: string;
  headquarters: string;
  milestones: Milestone[];
  leadership: TeamMember[];
  coreValues: CoreValue[];
}
