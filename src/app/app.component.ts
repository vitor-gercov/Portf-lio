import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../widgets/header/header.component';
import { HeroComponent } from '../widgets/hero/hero.component';
import { TimelineComponent } from '../widgets/timeline/timeline.component';
import { ProjectsComponent } from '../widgets/projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from '../widgets/sidebar/sidebar.component';
import { ThemeService } from '../shared/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent, TimelineComponent, ProjectsComponent, FooterComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // Injected here to ensure ThemeService initializes and applies the theme on app start
  private readonly _theme = inject(ThemeService);
}
