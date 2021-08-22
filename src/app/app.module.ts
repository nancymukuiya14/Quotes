import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotedetailComponent } from './quotedetail/quotedetail.component';
import { SampleQuotesComponent } from './sample-quotes/sample-quotes.component';
import { DateCountPipe } from './date-count.pipe';
import { FormquoteComponent } from './formquote/formquote.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuotedetailComponent,
    SampleQuotesComponent,
    DateCountPipe,
    FormquoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
