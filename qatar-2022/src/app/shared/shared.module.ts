import { AppMaterialModule } from './app-material/app-material.module';
import { PlayerListComponent } from './player-list/player-list/player-list.component';
import { PlayerSearchComponent } from './player-search/player-search/player-search.component';
import { PlayerHeaderComponent } from './player-header/player-header/player-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MenuNavigationComponent } from './menu-navigation/menu-navigation.component';



@NgModule({
  declarations: [
    PlayerHeaderComponent,
    PlayerSearchComponent,
    PlayerListComponent,
    MenuNavigationComponent
  ],
  exports:
   [
    PlayerHeaderComponent,
    PlayerSearchComponent,
    PlayerListComponent,
    MenuNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule
  ]
})
export class SharedModule { }
