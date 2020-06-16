import { TicketsComponent } from './pages/tickets/tickets.component';
import { LineUpComponent } from './pages/line-up/line-up.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';


const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'news/:id', component: FrontpageComponent },
  { path: 'line-up', component: LineUpComponent },
  { path: 'tickets', component: TicketsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
