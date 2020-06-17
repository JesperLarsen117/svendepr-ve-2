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
  { path: 'news/:id', component: FrontpageComponent },
  { path: 'line-up', component: LineUpComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'buy-ticket/:id', component: BuyTicketComponent },
  { path: 'camps', component: CampsComponent },
  { path: 'camp/:id', component: CampComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
