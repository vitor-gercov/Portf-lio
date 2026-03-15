import {
  Component,
  ChangeDetectionStrategy,
  viewChildren,
  ElementRef,
  effect,
  OnDestroy,
} from '@angular/core';
import { Project, ProjectTag } from './project.model';


@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnDestroy {
  protected readonly months = [
    $localize`:@@timeline.month.jan:Jan`,
    $localize`:@@timeline.month.feb:Fev`,
    $localize`:@@timeline.month.mar:Mar`,
    $localize`:@@timeline.month.apr:Abr`,
    $localize`:@@timeline.month.may:Mai`,
    $localize`:@@timeline.month.jun:Jun`,
    $localize`:@@timeline.month.jul:Jul`,
    $localize`:@@timeline.month.aug:Ago`,
    $localize`:@@timeline.month.sep:Set`,
    $localize`:@@timeline.month.oct:Out`,
    $localize`:@@timeline.month.nov:Nov`,
    $localize`:@@timeline.month.dec:Dez`,
  ];

  protected readonly projects: Project[] = [
    {
      id: '1',
      title: 'Todeschini Tattoo',
      url: 'https://todeschinitattoo.com/',
      image: 'https://todeschinitattoo.com/assets/images/logo.png',
      description: $localize`:@@projects.project1.description:Site landing page da minha tatuadora, mostrando um pouco do trabalho dela assim como um guia para os clientes e um CTA para entrar em contato com ela.`,
      launchDate: { month: 3, year: 2024 },
      tags: [
        { label: 'Angular v21', category: 'framework' },
        { label: 'Node.js', category: 'tool' },
      ],
    },
    {
      id: '2',
      title: 'CAGED',
      url: 'https://caged-practice.netlify.app/caged',
      image: 'https://media.guitarcenter.com/is/image/MMGS7/518358000000000-00-600x600.jpg',
      description: $localize`:@@projects.project2.description:Site para me auxiliar nas minhas práticas de guitarra. Está um pouco largado, porém ainda tenho muitos planos pra ele.`,
      launchDate: { month: 2, year: 2025 },
      tags: [
        { label: 'Angular v21', category: 'framework' },
        { label: 'Node.js', category: 'tool' },
      ],
    },
    {
      id: '3',
      title: $localize`:@@projects.project3.title:Meu portfólio`,
      url: '#',
      image: 'https://placehold.co/600x340/0891b2/ffffff?text=Portfólio',
      description: $localize`:@@projects.project3.description:O próprio site que você está navegando agora! Kkkk meu trabalho mais recente, criado em um final de semana com vibe coding.`,
      launchDate: { month: 3, year: 2026 },
      tags: [
        { label: 'Angular v21', category: 'framework' },
        { label: 'Bun.js v1.3', category: 'tool' },
        { label: 'Claude code', category: 'tool' },
      ],
    },
  ];

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
    return this.months[month - 1];
  }

  protected getOpenLinkLabel(title: string): string {
    return $localize`:@@projects.openLink:Ver projeto: ` + title;
  }

  protected getCategoryClass(tag: ProjectTag): string {
    return tag.category ? `tag--${tag.category}` : 'tag--other';
  }
}
