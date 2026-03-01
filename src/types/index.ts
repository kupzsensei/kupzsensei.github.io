export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string[];
  tech: string[];
  url?: string;
  image?: string;
  screenshots?: string[];
  features?: string[];
  role?: string;
  year?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface TechItem {
  name: string;
  icon: string;
  category: 'language' | 'framework' | 'tool' | 'platform';
}

export interface NavLink {
  label: string;
  href: string;
}
