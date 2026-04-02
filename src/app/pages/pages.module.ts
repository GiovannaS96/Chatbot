import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { ChatdetailComponent } from './chatdetail/chatdetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PagesComponent, ChatlistComponent, ChatdetailComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterOutlet,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
