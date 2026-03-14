import { loadTranslations } from '@angular/localize';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { enUSTranslations } from './locale/messages.en-US';

const locale = localStorage.getItem('app-locale') ?? 'pt-BR';

if (locale === 'en-US') {
  loadTranslations(enUSTranslations);
}

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
