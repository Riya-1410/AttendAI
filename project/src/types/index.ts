export interface FeatureType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMemberType {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface StatType {
  id: number;
  value: number;
  label: string;
  suffix: string;
}

export interface FaqType {
  id: number;
  question: string;
  answer: string;
}

export interface ProcessStepType {
  id: number;
  title: string;
  description: string;
  icon: string;
}