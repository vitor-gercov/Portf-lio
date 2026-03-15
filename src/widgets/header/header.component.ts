import { Component, HostListener, inject, signal } from '@angular/core';
import { ThemeService } from '../../shared/services/theme.service';
import { AppLocale, LocaleService } from '../../shared/services/locale.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly themeService = inject(ThemeService);
  protected readonly localeService = inject(LocaleService);

  protected readonly dropdownOpen = signal(false);

  protected readonly lightModeLabel = $localize`:@@header.lightMode:Ativar modo claro`;
  protected readonly darkModeLabel = $localize`:@@header.darkMode:Ativar modo escuro`;

  protected toggleDropdown(event: MouseEvent): void {
    event.stopPropagation();
    this.dropdownOpen.update(v => !v);
  }

  protected selectLocale(code: AppLocale): void {
    this.dropdownOpen.set(false);
    this.localeService.setLocale(code);
  }

  @HostListener('document:click')
  protected closeDropdown(): void {
    this.dropdownOpen.set(false);
  }

  scrollTo(id: string, event: MouseEvent): void {
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    el.focus({ preventScroll: true });
  }
}
