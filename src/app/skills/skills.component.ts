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
        'img': '/assets/img/javascript.svg',
      },
      {
        'name': 'HTML',
        'img': '/assets/img/html.svg',
      },
      {
        'name': 'CSS/SCSS',
        'img': '/assets/img/css.svg',
      },
      {
        'name': 'Angular',
        'img': '/assets/img/angular.svg',
      },
      {
        'name': 'TypeScript',
        'img': '/assets/img/typescript.svg',
      },
      {
        'name': 'Firebase Database',
        'img': '/assets/img/Firebase.svg',
      },
      {
        'name': 'Git',
        'img': '/assets/img/git.svg',
      },
      {
        'name': 'Rest API',
        'img': '/assets/img/api.svg',
      },
      {
        'name': 'Scrum',
        'img': '/assets/img/scrum.svg',
      },
    ];
}
