import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  readonly socialLinks = [
    {
      label: 'LinkedIn',
      href: '#',
      icon: 'linkedin',
      ariaLabel: $localize`:@@footer.linkedInAriaLabel:Meu perfil no LinkedIn`,
    },
    {
      label: 'GitHub',
      href: '#',
      icon: 'github',
      ariaLabel: $localize`:@@footer.githubAriaLabel:Meu perfil no GitHub`,
    },
    {
      label: 'WhatsApp',
      href: '#',
      icon: 'whatsapp',
      ariaLabel: $localize`:@@footer.whatsappAriaLabel:Entrar em contato via WhatsApp`,
    },
    {
      label: 'E-mail',
      href: '#',
      icon: 'email',
      ariaLabel: $localize`:@@footer.emailAriaLabel:Enviar um e-mail`,
    },
  ];
}
