import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills: any = [
      {
        'name': 'JavaScript',
        'img': '/assets/img/down.png',
      },
      {
        'name': 'HTML',
        'img': '/assets/img/down.png',
      },
      {
        'name': 'CSS/SCSS',
        'img': '/assets/img/down.png',
      },
      {
        'name': 'Angular',
        'img': '/assets/img/angular.svg',
      },
      {
        'name': 'TypeScript',
        'img': '/assets/img/down.png',
      },
      {
        'name': 'Firebase Database',
        'img': '/assets/img/down.png',
      },
      {
        'name': 'Git',
        'img': '/assets/img/down.png',
      },
      {
        'name': 'Rest API',
        'img': '/assets/img/down.png',
      },
      {
        'name': 'Git',
        'img': '/assets/img/down.png',
      },
    ];
}
