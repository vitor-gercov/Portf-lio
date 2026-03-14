import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../shared/services/theme.service';
import { LocaleService } from '../../shared/services/locale.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly themeService = inject(ThemeService);
  protected readonly localeService = inject(LocaleService);

  protected readonly lightModeLabel = $localize`:@@header.lightMode:Ativar modo claro`;
  protected readonly darkModeLabel = $localize`:@@header.darkMode:Ativar modo escuro`;
  protected readonly langToggleLabel = $localize`:@@header.langToggle:Mudar para inglês`;
}
