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
  photoSrc: string | null = 'https://lh3.googleusercontent.com/pw/AP1GczMs_4ERZ7aZI1Bnyv9O9hWakIWfJg9Rn8rNF0KFl0SEOfTMpRoTzunBXce6hVjKcffbyMAVvH2kqSjEqvO5QQDXnbzibkj_o9805GatHsE5y_5HaluqwigE8BKH7zF9WNMKPATY0FIaK9aAangk2omekg=w683-h911-s-no-gm?authuser=0';

  videogames: PodiumItem[] = [
    { name: 'DOOM Eternal', image: 'https://i.redd.it/3t9pnnab10m11.png' },
    { name: 'Dark Souls', image: 'https://cdn2.steamgriddb.com/icon_thumb/7b0b4f3e99aa0141a61fa9561c7db4d1.png' },
    { name: 'Super Mario Galaxy', image: 'https://hips.hearstapps.com/hmg-prod/images/super-mario-galaxy-1-1600408922.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*' },
  ];

  bands: PodiumItem[] = [
    { name: 'Black Label Society', image: 'https://i.ebayimg.com/images/g/iM0AAOSwNs1ghujK/s-l400.jpg' },
    { name: 'Black Sabbath', image: 'https://www.rockfm.fm/files/og_thumbnail/uploads/2024/09/20/66ed5f4510115.jpeg' },
    { name: 'Sepultura', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieqLwAsuFtwIqZNw92H5MaqguU4-Ez5QBh4IqBQ40YvNYqYQnBeu0j7wHedpFyZorG3IhF3qXemiWHZZw8EKjFfE93g7kCSMW7wRyGW-3dy7ItjTChacOH9rflAwH9ccG6IqFD9P_IWB8/s320/sepul.PNG' },
  ];

  movies: PodiumItem[] = [
    { name: 'Bastardos Inglórios', image: 'https://rollingstone.com.br/wp-content/uploads/bastardos_inglorios_foto_divulgacao.jpg' },
    { name: 'Tropa de Elite', image: 'https://m.media-amazon.com/images/M/MV5BMjc4NDM2MzY2NV5BMl5BanBnXkFtZTgwNjY3OTA0MzI@._V1_.jpg' },
    { name: 'Kill Bill', image: 'https://www.sleek-mag.com/wp-content/uploads/2018/10/Kill_Bill_Volume_1-912132366-large-1-1024x676.jpg' },
  ];

  // Podium display order: 2nd, 1st, 3rd
  readonly podiumOrder = [1, 0, 2];

  readonly podiumMeta = [
    { label: $localize`:@@about.position1:1º`, medal: 'gold', height: 110 },
    { label: $localize`:@@about.position2:2º`, medal: 'silver', height: 85 },
    { label: $localize`:@@about.position3:3º`, medal: 'bronze', height: 65 },
  ];
}
