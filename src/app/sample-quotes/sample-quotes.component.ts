import { Component, OnInit } from '@angular/core';
import {Lovequotes} from '../lovequotes'

@Component({
  selector: 'app-sample-quotes',
  templateUrl: './sample-quotes.component.html',
  styleUrls: ['./sample-quotes.component.css']
})
export class SampleQuotesComponent implements OnInit {

  quotes: Lovequotes[]= [
    new Lovequotes(1, 'I dont beleive in magic,the young boy said.The old man smiled,You will when you see her', '~Atticus',new Date('2021,8,21'),0,0),
    new Lovequotes(3, 'If i were a moon, i would want you to by my night',  '~Alexandra Vasiliu',new Date('2021,8,16'),0,0),
    new Lovequotes(4, 
      'There is nothing prettier in the whole wide world like a girl in love with every breath she takes','~Cate',new Date('2021,8,16'),0,0)
  
  ]
  deletequote (deleteQuoteevent: any, index: number){
    if (deleteQuoteevent) {
    this.quotes.splice(index,1)}
  }
  submitQuote (quote: Lovequotes) {
      let quoteLength = this.quotes.length;
      quote.id = quoteLength+1;
      quote.publishedDate = new Date(quote.publishedDate)
      this.quotes.push(quote)

  }
   addVote (vote,index){
    if(vote){
      let most = this.quotes[index].numberOfLikes;
      this.quotes[index].numberOfLikes = most +1;
    }
  }
  adddVote(dVote, index){
    if(dVote){
      let mostly = this.quotes[index].numberOfDislikes;
      this.quotes[index].numberOfDislikes = mostly +1;
    }
  }
  get mostLiked(){
    return this.quotes.sort((a,b)=>{
      return <any> new Date(b.numberOfLikes) - <any> new Date(a.numberOfLikes);
    });
  }

  // toggleDetails(index){
  //   this.quotes[index].showDescr

  constructor() { }

  ngOnInit(): void {
  }

}
