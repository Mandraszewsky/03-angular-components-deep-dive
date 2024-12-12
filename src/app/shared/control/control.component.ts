import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, Input, ViewEncapsulation } from '@angular/core';

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
export class ControlComponent implements AfterContentInit {
  // alternative for host and event biding (old way):
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick(){console.log('clicked!')};

  @Input({ required: true }) label!: string;
  private el = inject(ElementRef);

  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  //private control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input'); //signal alternative


  constructor() {
    //if something change in entire application, these hooks will be executed:
    afterRender(() => {
      console.log("after render");
    });

    afterNextRender(() => {
      console.log("after next render");
    });
  }

  onClick() {
    console.log("on click");
  }

  ngAfterContentInit() {
    console.log("after content init");
  }
}
