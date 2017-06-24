import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { CountersComponent } from './counters/counters.component';
import { ChuckNorrisPageComponent } from './chuck-norris-page/chuck-norris-page.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteListComponent,
    MyHomeComponent,
    MyAboutComponent,
    ContactListComponent,
    ContactComponent,
    CountersComponent,
    ChuckNorrisPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
