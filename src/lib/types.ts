export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  gradient: string;
  status: "live" | "coming-soon";
  href: string;
  image: string;
  imageAlt: string;
  audience: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Industry {
  name: string;
  icon: string;
  image: string;
  imageAlt: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}
