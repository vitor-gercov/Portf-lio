import { Component } from '@angular/core';

interface PodiumItem {
  name: string;
  image?: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  photoSrc: string | null = null;

  videogames: PodiumItem[] = [
    { name: '', image: undefined },
    { name: '', image: undefined },
    { name: '', image: undefined },
  ];

  bands: PodiumItem[] = [
    { name: '', image: undefined },
    { name: '', image: undefined },
    { name: '', image: undefined },
  ];

  movies: PodiumItem[] = [
    { name: '', image: undefined },
    { name: '', image: undefined },
    { name: '', image: undefined },
  ];

  // Podium display order: 2nd, 1st, 3rd
  readonly podiumOrder = [1, 0, 2];

  readonly podiumMeta = [
    { label: $localize`:@@about.position1:1º`, medal: 'gold', height: 110 },
    { label: $localize`:@@about.position2:2º`, medal: 'silver', height: 85 },
    { label: $localize`:@@about.position3:3º`, medal: 'bronze', height: 65 },
  ];
}
