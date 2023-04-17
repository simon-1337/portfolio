import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

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


