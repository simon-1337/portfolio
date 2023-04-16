import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {

  firstSeen: Boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elements = document.querySelectorAll('.slide-in-element');
    const screenHeight = window.innerHeight;

    elements.forEach((element) => {
      const position = element.getBoundingClientRect().top;

      // Check if the top of the element is visible in the viewport
      if (position - screenHeight <= 0) {
        // Add the slide-in class to trigger the animation
        this.renderer.addClass(element, 'slide-in');
        if (element.id == 'joinImage') {
          this.firstSeen = true;
        }
      }
    });
  }

  all: Boolean = true;
  js: Boolean = false;
  angular: Boolean = false;

  filterProjects(filter: string) {
    if (filter == "js") {
      this.setBackBoolValues()
      setTimeout(() => {
        this.js = true;
      }, 50);
      
    }
    else if (filter == "angular") {
      this.setBackBoolValues()
      setTimeout(() => {
        this.angular = true;
      }, 50);
     
    }
    else {
      this.setBackBoolValues()
      setTimeout(() => {
        this.all = true;
      }, 50);
      
    }
  }

  setBackBoolValues() {
    this.js = false;
    this.all = false;
    this.angular = false;
  }

}
