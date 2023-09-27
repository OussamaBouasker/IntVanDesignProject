import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  animations: [
    trigger('cardHover', [
      state('normal', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.05)' })),
      transition('normal => hovered', animate('150ms ease-in')),
      transition('hovered => normal', animate('150ms ease-out'))
    ])
  ]
})
export class ItemComponent {
  cardState = 'normal';

  onMouseEnter() {
    this.cardState = 'hovered';
  }

  onMouseLeave() {
    this.cardState = 'normal';
  }
}
