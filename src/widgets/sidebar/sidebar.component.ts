import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface SidebarSection {
  id: string;
  label: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);

  readonly sections: SidebarSection[] = [
    { id: 'hero', label: 'Início' },
    { id: 'timeline', label: 'Experiência' },
    { id: 'projects', label: 'Projetos' },
    { id: 'about', label: 'Sobre mim' },
  ];

  activeSection = signal<string>('hero');

  private scrollHandler: (() => void) | null = null;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.updateActiveSection();
    this.scrollHandler = () => this.updateActiveSection();
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
  }

  ngOnDestroy(): void {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }

  private updateActiveSection(): void {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const viewportMiddle = scrollY + viewportHeight / 2;

    let closestId = this.sections[0].id;
    let closestDistance = Infinity;

    for (const section of this.sections) {
      const el = document.getElementById(section.id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const sectionMiddle = scrollY + rect.top + rect.height / 2;
      const distance = Math.abs(viewportMiddle - sectionMiddle);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestId = section.id;
      }
    }

    this.activeSection.set(closestId);
  }

  scrollTo(id: string, event: MouseEvent): void {
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    el.focus({ preventScroll: true });
  }
}
