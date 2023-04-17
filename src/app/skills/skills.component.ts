import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

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


    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    @HostListener('window:scroll', [])

    
    /**
     * This function is used to check if an element is in the Screen and adds the slide in class to this element
     */
    onWindowScroll() {
      const elements = document.querySelectorAll('.slide-in-element');
      const screenHeight = window.innerHeight;
  
      elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
  
        // Check if the top of the element is visible in the viewport
        if (position - screenHeight <= 0) {
          // Add the slide-in class to trigger the animation
          this.renderer.addClass(element, 'slide-in');
        }
      });
    }
}

