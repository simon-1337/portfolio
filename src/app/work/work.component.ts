import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {

  all: Boolean = true;
  js: Boolean = false;
  angular: Boolean = false;

  filterProjects(filter: string) {
    if (filter == "js") {
      this.setBackBoolValues()
      this.js = true;
    }
    else if (filter == "angular") {
      this.setBackBoolValues()
      this.angular = true;
    }
    else {
      this.setBackBoolValues()
      this.all = true;
    }
  }

  setBackBoolValues() {
    this.js = false;
    this.all = false;
    this.angular = false;
  }

}
