import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Lovequotes } from './../lovequotes';
@Component({
  selector: 'app-formquote',
  templateUrl: './formquote.component.html',
  styleUrls: ['./formquote.component.css']
})
export class FormquoteComponent implements OnInit {
   newQuote = new Lovequotes(0,"","",new Date(),0,0);
   @Output() submitQuote = new EventEmitter<Lovequotes>();
  constructor() { }

  submitquote(){this.submitQuote.emit(this.newQuote)}


  ngOnInit(): void {
  }

}
