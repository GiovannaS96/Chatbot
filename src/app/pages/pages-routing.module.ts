import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { ChatdetailComponent } from './chatdetail/chatdetail.component';
import { GraphicComponent } from './graphic/graphic.component';

const routes: Routes = [
  {
    path:'',
    component: ChatlistComponent,
  },
  {
    path:'dettaglio-chat/:idChat/:nomeUtente',
    component: ChatdetailComponent,
  },
  {
    path:'grafici-chat/:idChat',
    component: GraphicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
