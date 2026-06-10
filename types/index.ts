export type Contact = {
  phone: string;
  phoneHref: string;
  email: string;
  linkedin: string;
  github: string;
};

export type Project = {
  id: string;
  icon: string; // font-awesome class
  title: string;
  tech: string;
  date?: string;
  github: string;
  bullets: string[];
  metrics?: { label: string; icon: string }[];
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  bullets: string[];
  tags: string[];
};

export type Education = {
  institution: string;
  location: string;
  degree: string;
  duration: string;
  specializations: string[];
  coursework: string[];
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  bullets: string[];
};

export type SkillGroup = {
  label: string;
  skills: string[];
};

export type NavItem = { id: string; label: string };
