import { PlayerListComponent } from './player-list/player-list/player-list.component';
import { PlayerSearchComponent } from './player-search/player-search/player-search.component';
import { PlayerHeaderComponent } from './player-header/player-header/player-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PlayerHeaderComponent,
    PlayerSearchComponent,
    PlayerListComponent
  ],
  exports:
   [
    PlayerHeaderComponent,
    PlayerSearchComponent,
    PlayerListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
