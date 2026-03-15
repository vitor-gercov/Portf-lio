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
      href: 'https://www.linkedin.com/in/vitor-gobato-gercov-a89474178/',
      icon: 'linkedin',
      ariaLabel: $localize`:@@footer.linkedInAriaLabel:Meu perfil no LinkedIn`,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/vitor-gercov',
      icon: 'github',
      ariaLabel: $localize`:@@footer.githubAriaLabel:Meu perfil no GitHub`,
    },
    {
      label: 'WhatsApp',
      href: 'https://api.whatsapp.com/send/?phone=5511971112207&text&type=phone_number&app_absent=0',
      icon: 'whatsapp',
      ariaLabel: $localize`:@@footer.whatsappAriaLabel:Entrar em contato via WhatsApp`,
    },
    {
      label: 'E-mail',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=gercovvitor@gmail.com',
      icon: 'email',
      ariaLabel: $localize`:@@footer.emailAriaLabel:Enviar um e-mail`,
    },
  ];
}
