import { Component, ElementRef, HostBinding, HostListener, inject, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  }
})
export class ControlComponent {
  // alternative for host and event biding (old way):
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick(){console.log('clicked!')};

  @Input({ required: true }) label!: string;
  private el = inject(ElementRef);

  onClick() {
    console.log('clicked!');
    console.log(this.el);
  }
}
