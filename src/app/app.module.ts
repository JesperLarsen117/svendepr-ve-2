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
import { CampsComponent } from './pages/camps/camps.component';
import { CampComponent } from './pages/camp/camp.component';
import { LoginComponent } from './pages/login/login.component';
import { ProgramComponent } from './pages/program/program.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyProgramComponent } from './pages/my-program/my-program.component';
import { NewsComponent } from './pages/news/news.component';
import { ArticleComponent } from './pages/article/article.component';
import { PurchaseAcceptedComponent } from './pages/purchase-accepted/purchase-accepted.component';
import { InfoComponent } from './pages/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    NavComponent,
    FooterComponent,
    LineUpComponent,
    TicketsComponent,
    BuyTicketComponent,
    CampsComponent,
    CampComponent,
    LoginComponent,
    ProgramComponent,
    MyProgramComponent,
    NewsComponent,
    ArticleComponent,
    PurchaseAcceptedComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
