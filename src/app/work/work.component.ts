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
        if (element.id == 'joinImage') {
          this.firstSeen = true;
        }
      }
    });
  }

  all: Boolean = true;
  js: Boolean = false;
  angular: Boolean = false;


  /**
   * This function is used to filter which Projects should be displayed
   * 
   * @param filter - string 
   */
  filterProjects(filter: string) {
    if (filter == "js") {
      this.showJsProjects();
    }
    else if (filter == "angular") {
      this.showAngularProjects();
    }
    else {
      this.showAllProjects();
    }
  }


  /**
   * This function is used to set back all variables to false
   */
  setBackBoolValues() {
    this.js = false;
    this.all = false;
    this.angular = false;
  }


  /**
   * This function is used to set the variable js to true (JavaScript Projects are displayed)
   */
  showJsProjects() {
    this.setBackBoolValues()
    setTimeout(() => {
      this.js = true;
    }, 50);
  }


  /**
   * This function is used to set the variable angular to true (Angular Projects are displayed)
   */
  showAngularProjects() {
    this.setBackBoolValues()
    setTimeout(() => {
      this.angular = true;
    }, 50);
  }


  /**
   * This function is used to set the variable all to true (All Projects are displayed)
   */
  showAllProjects() {
    this.setBackBoolValues()
    setTimeout(() => {
      this.all = true;
    }, 50);
  }
}
