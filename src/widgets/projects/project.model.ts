export type ProjectTagCategory =
  | 'framework'
  | 'language'
  | 'library'
  | 'tool'
  | 'database'
  | 'platform'
  | 'other';

export interface ProjectTag {
  label: string;
  category?: ProjectTagCategory;
}

export interface Project {
  id: string;
  title: string;
  url: string;
  image: string;
  description: string;
  launchDate: { month: number; year: number };
  tags?: ProjectTag[];
}
