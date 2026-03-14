export interface TimelineEvent {
  id: string;
  month: number; // 1-12
  year: number;
  title: string;
  image: string;
  details: string;
  tags?: string[];
}
