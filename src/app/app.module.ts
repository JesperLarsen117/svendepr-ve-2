import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { NavComponent } from './partials/nav/nav.component';
import { FooterComponent } from './partials/footer/footer.component';

// Http module
import { HttpClientModule } from '@angular/common/http';
import { LineUpComponent } from './pages/line-up/line-up.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { BuyTicketComponent } from './pages/buy-ticket/buy-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    NavComponent,
    FooterComponent,
    LineUpComponent,
    TicketsComponent,
    BuyTicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
