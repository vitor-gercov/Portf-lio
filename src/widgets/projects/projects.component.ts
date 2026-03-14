import {
  Component,
  ChangeDetectionStrategy,
  viewChildren,
  ElementRef,
  effect,
  OnDestroy,
} from '@angular/core';
import { Project, ProjectTag } from './project.model';

const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Projeto Exemplo 1',
    url: 'https://github.com',
    image: 'https://placehold.co/600x340/4f46e5/ffffff?text=Projeto+1',
    description:
      'Descrição do projeto. Explique aqui o que o projeto faz, qual problema resolve e quais foram os principais desafios e aprendizados durante o desenvolvimento.',
    launchDate: { month: 3, year: 2025 },
    tags: [
      { label: 'Angular 21', category: 'framework' },
      { label: 'TypeScript', category: 'language' },
      { label: 'SCSS', category: 'language' },
      { label: 'Bun 1.3', category: 'tool' },
    ],
  },
  {
    id: '2',
    title: 'Projeto Exemplo 2',
    url: 'https://github.com',
    image: 'https://placehold.co/600x340/7c3aed/ffffff?text=Projeto+2',
    description:
      'Descrição do segundo projeto. Descreva a motivação, as tecnologias utilizadas e o impacto que o projeto gerou.',
    launchDate: { month: 8, year: 2024 },
    tags: [
      { label: 'React 18', category: 'framework' },
      { label: 'Node.js', category: 'platform' },
      { label: 'PostgreSQL', category: 'database' },
      { label: 'Docker', category: 'tool' },
    ],
  },
  {
    id: '3',
    title: 'Projeto Exemplo 3',
    url: 'https://github.com',
    image: 'https://placehold.co/600x340/0891b2/ffffff?text=Projeto+3',
    description:
      'Descrição do terceiro projeto. Substitua este texto com informações reais sobre o projeto e suas principais funcionalidades.',
    launchDate: { month: 1, year: 2024 },
    tags: [
      { label: 'Python 3.12', category: 'language' },
      { label: 'FastAPI', category: 'framework' },
      { label: 'Redis', category: 'database' },
    ],
  },
];

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnDestroy {
  protected readonly projects = PROJECTS;

  private readonly cardRefs = viewChildren<ElementRef>('projectCard');
  private observer?: IntersectionObserver;

  constructor() {
    effect(() => {
      const refs = this.cardRefs();
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
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
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

  protected getCategoryClass(tag: ProjectTag): string {
    return tag.category ? `tag--${tag.category}` : 'tag--other';
  }
}
