import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Lovequotes } from '../lovequotes';

@Component({
  selector: 'app-quotedetail',
  templateUrl: './quotedetail.component.html',
  styleUrls: ['./quotedetail.component.css']
})
export class QuotedetailComponent implements OnInit {
  @Input() quote:Lovequotes;
  @Output() deleteQuoteevent = new EventEmitter<Lovequotes>();
  deleteQuote(quote:Lovequotes){
    this.deleteQuoteevent.emit(quote);
      }
  @Output () vote = new EventEmitter <boolean>();
  @Output () dVote = new EventEmitter <boolean>();
    
  upVote(add:boolean){
    this.vote.emit(add);
      }
  downVote(add:boolean){
    this.dVote.emit(add);
      }

  constructor() { }

  ngOnInit(): void {
  }

}
