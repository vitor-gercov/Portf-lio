import { Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'app-locale';

export type AppLocale = 'pt-BR' | 'en-US';

export interface LocaleOption {
  code: AppLocale;
  label: string;
  flagUrl: string;
  flagAlt: string;
}

@Injectable({ providedIn: 'root' })
export class LocaleService {
  readonly locales: LocaleOption[] = [
    { code: 'pt-BR', label: 'PT', flagUrl: 'https://flagcdn.com/w20/br.png', flagAlt: 'Brasil' },
    { code: 'en-US', label: 'EN', flagUrl: 'https://flagcdn.com/w20/us.png', flagAlt: 'Estados Unidos' },
  ];

  private readonly _currentLocale = signal<AppLocale>(
    (localStorage.getItem(STORAGE_KEY) as AppLocale) ?? 'pt-BR'
  );

  readonly currentLocale = this._currentLocale.asReadonly();

  getCurrentOption(): LocaleOption {
    return this.locales.find(l => l.code === this._currentLocale())!;
  }

  setLocale(locale: AppLocale): void {
    localStorage.setItem(STORAGE_KEY, locale);
    window.location.reload();
  }
}
