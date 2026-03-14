import { Injectable } from '@angular/core';

const STORAGE_KEY = 'app-locale';

export type AppLocale = 'pt-BR' | 'en-US';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  readonly locales: { code: AppLocale; label: string }[] = [
    { code: 'pt-BR', label: 'PT' },
    { code: 'en-US', label: 'EN' },
  ];

  getLocale(): AppLocale {
    return (localStorage.getItem(STORAGE_KEY) as AppLocale) ?? 'pt-BR';
  }

  setLocale(locale: AppLocale): void {
    localStorage.setItem(STORAGE_KEY, locale);
    window.location.reload();
  }

  toggle(): void {
    this.setLocale(this.getLocale() === 'pt-BR' ? 'en-US' : 'pt-BR');
  }

  getNextLocaleLabel(): string {
    return this.getLocale() === 'pt-BR' ? 'EN' : 'PT';
  }
}
