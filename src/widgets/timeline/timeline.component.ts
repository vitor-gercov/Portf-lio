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
    year: 2018,
    title: 'Faculdade',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTToJYqAardt5auoJk3nYmc9ywK8MUWRRZy6w&s',
    details: 'Meu primeiro contato com tecnologia foi no curso de Engenharia da Computação, na faculdade Engenheiro Salvador Arena.',
    tags: ['C#', 'Python', 'SQL'],
  },
  {
    id: '2',
    month: 10,
    year: 2020,
    title: 'Mobilemed',
    image: 'https://play-lh.googleusercontent.com/fC4DTmDReWi8kSARGzOur-bUPCWOfLUAqfF-fgu9ULGWOVzMU5z00-RDpHjcsuoL43BF',
    details: 'Meu primeiro emprego na área foi atuando como desenvolvedor fullstack em aplicações web. Durante minha atuação fui constantemente reconhecido com muitos méritos.',
    tags: ['HTML', 'CSS', 'Javascript', 'Node.js', 'Typescript', 'Angular', 'Express', 'MySQL'],
  },
  {
    id: '3',
    month: 10,
    year: 2022,
    title: 'Itaú',
    image: 'https://yt3.googleusercontent.com/kBwRcO4UjPVt70R5tlNc6s5nuZRzcznhdO9fC5tdI778sbgJbq2mL0N45KKnSr8K3LTv7Qfg=s900-c-k-c0x00ffffff-no-rj',
    details: 'Entrei em uma das empresas onde sempre quis atuar desde que ingressei na minha faculdade! Como engenheiro focado em front-end web/webview. Aqui existe uma cobrança muito alta por qualidade, meu aprendizado técnico e interpessoal foi massivo.',
    tags: ['WCAG', 'AWS', 'Jest', 'Splunk', 'Grafana', 'Datadog'],
  },
  {
    id: '4',
    month: 12,
    year: 2022,
    title: 'Formado!',
    image: 'https://cdn-icons-png.freepik.com/256/7131/7131959.png?semt=ais_white_label',
    details: 'Entrega do meu TCC. Eu e meu grupo desenvolvemos uma aplicação de gestão de saída de alunos para escolas, utilizando Flutter no front-end e Go no back-end. Ao final do curso também tive um ano massivo sobre conhecimento teórico a respeito de inteligência artificial.',
    tags: ['AI', 'Flutter'],
  },
  {
    id: '5',
    month: 2,
    year: 2024,
    title: 'PRAD',
    image: 'https://i.pinimg.com/736x/a3/67/93/a36793cc27c1880217e1a4f8e059c192.jpg',
    details: 'Programa de reconhecimento por alto desempenho do banco pela minha atuação no ano de 2023.',
  },
  {
    id: '6',
    month: 4,
    year: 2024,
    title: 'Promovido!',
    image: 'https://cdn-icons-png.flaticon.com/512/1672/1672251.png',
    details: 'Promovido para engenheiro pleno graças ao meu plano de carreira.',
  },
  {
    id: '7',
    month: 7,
    year: 2025,
    title: 'Itaú BBA',
    image: 'https://yt3.googleusercontent.com/cOsz3w-IH5jWWnqefr4-1foZTWbFh7PhvJwfBTotWR3x7Nus7FydjjPvDZoHI5tVPt_MdgFh=s900-c-k-c0x00ffffff-no-rj',
    details: 'Movimentação interna pensando no meu PDI para a comunidade de Shared Experience IBBA, aqui eu tenho um contato muito maior com desenhos de solução e uma visão mais macro de arquitetura de projetos.',
    tags: ['Java', 'Springboot']
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
