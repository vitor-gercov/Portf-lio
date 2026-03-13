import {
  Component,
  ChangeDetectionStrategy,
  signal,
  viewChildren,
  ElementRef,
  effect,
  OnDestroy,
} from '@angular/core';
import { TimelineEvent } from './timeline-event.model';

const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

const EVENTS: TimelineEvent[] = [
  {
    id: '1',
    month: 1,
    year: 2020,
    title: 'Evento 1',
    shortDescription: 'Breve descrição do evento 1.',
    image: 'https://placehold.co/80x80/4f46e5/ffffff?text=2020',
    details: 'Descrição detalhada do evento 1. Substitua este texto com informações reais sobre este marco na sua trajetória.',
    tags: ['Tag A', 'Tag B'],
  },
  {
    id: '2',
    month: 6,
    year: 2021,
    title: 'Evento 2',
    shortDescription: 'Breve descrição do evento 2.',
    image: 'https://placehold.co/80x80/7c3aed/ffffff?text=2021',
    details: 'Descrição detalhada do evento 2. Substitua este texto com informações reais sobre este marco na sua trajetória.',
    tags: ['Tag C'],
  },
  {
    id: '3',
    month: 3,
    year: 2022,
    title: 'Evento 3',
    shortDescription: 'Breve descrição do evento 3.',
    image: 'https://placehold.co/80x80/0891b2/ffffff?text=2022',
    details: 'Descrição detalhada do evento 3. Substitua este texto com informações reais sobre este marco na sua trajetória.',
    tags: ['Tag D', 'Tag E'],
  },
  {
    id: '4',
    month: 9,
    year: 2023,
    title: 'Evento 4',
    shortDescription: 'Breve descrição do evento 4.',
    image: 'https://placehold.co/80x80/059669/ffffff?text=2023',
    details: 'Descrição detalhada do evento 4. Substitua este texto com informações reais sobre este marco na sua trajetória.',
    tags: ['Tag F'],
  },
  {
    id: '5',
    month: 5,
    year: 2024,
    title: 'Evento 5',
    shortDescription: 'Breve descrição do evento 5.',
    image: 'https://placehold.co/80x80/dc2626/ffffff?text=2024',
    details: 'Descrição detalhada do evento 5. Substitua este texto com informações reais sobre este marco na sua trajetória.',
    tags: ['Tag G', 'Tag H'],
  },
];

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent implements OnDestroy {
  protected readonly events = EVENTS;
  protected readonly openEventId = signal<string | null>(null);

  private readonly itemRefs = viewChildren<ElementRef>('timelineItem');
  private observer?: IntersectionObserver;

  constructor() {
    effect(() => {
      const refs = this.itemRefs();
      if (!refs.length) return;

      this.observer?.disconnect();
      this.observer = new IntersectionObserver(
        entries =>
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              this.observer!.unobserve(entry.target);
            }
          }),
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
      );

      refs.forEach(ref => this.observer!.observe(ref.nativeElement));
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  protected getMonthLabel(month: number): string {
    return MONTHS[month - 1];
  }

  protected toggleEvent(id: string): void {
    this.openEventId.update(current => (current === id ? null : id));
  }

  protected isOpen(id: string): boolean {
    return this.openEventId() === id;
  }
}
