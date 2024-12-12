import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>; //if "form" property-selector can not be passed from submit parameters
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); //signal alternative for viewChild 

  @Output() add = new EventEmitter<{ title: string, text: string }>;

  onSubmit(title: string, ticketText: string) {
    this.add.emit({ title: title, text: ticketText });
    this.form?.nativeElement.reset(); //unwrap HTMLFormElement from ElementRef type
  }

  ngOnInit() {
    console.log('on init');
  }

  ngAfterViewInit() {
    console.log('after view init');
  }
}
