import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../widgets/header/header.component';
import { TimelineComponent } from '../widgets/timeline/timeline.component';
import { ThemeService } from '../shared/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TimelineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // Injected here to ensure ThemeService initializes and applies the theme on app start
  private readonly _theme = inject(ThemeService);
}
