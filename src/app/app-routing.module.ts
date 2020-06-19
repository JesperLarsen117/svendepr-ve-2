import { InfoComponent } from './pages/info/info.component';
import { PurchaseAcceptedComponent } from './pages/purchase-accepted/purchase-accepted.component';
import { ArticleComponent } from './pages/article/article.component';
import { NewsComponent } from './pages/news/news.component';
import { MyProgramComponent } from './pages/my-program/my-program.component';
import { ProgramComponent } from './pages/program/program.component';
import { LoginComponent } from './pages/login/login.component';
import { CampsComponent } from './pages/camps/camps.component';
import { BuyTicketComponent } from './pages/buy-ticket/buy-ticket.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { LineUpComponent } from './pages/line-up/line-up.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { CampComponent } from './pages/camp/camp.component';


const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'news', component: NewsComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'line-up', component: LineUpComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'buy-ticket/:id', component: BuyTicketComponent },
  { path: 'camps', component: CampsComponent },
  { path: 'camp/:id', component: CampComponent },
  { path: 'login', component: LoginComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'myprogram', component: MyProgramComponent },
  { path: 'purchase-accepted', component: PurchaseAcceptedComponent },
  { path: 'info', component: InfoComponent },
  { path: '**', component: FrontpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
