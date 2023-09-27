import { Component } from '@angular/core';

@Component({
  selector: 'app-navactive',
  templateUrl: './navactive.component.html',
  styleUrls: ['./navactive.component.css']
})
export class NavactiveComponent {
  navactiveOpen = false;

  toggleNavactive() {
    this.navactiveOpen = !this.navactiveOpen;
  }
}
