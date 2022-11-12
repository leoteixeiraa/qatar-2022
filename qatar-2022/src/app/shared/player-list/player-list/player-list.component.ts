import { GameApiService } from './../../../service/game-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  public setAllProducts: any;
  public getAllProducts: any;

  constructor(
    private gameApiService: GameApiService
  ) { }

  ngOnInit(): void {
    this.gameApiService.apiListAllProducts.subscribe(
      res => {
      this.setAllProducts = res;
      this.getAllProducts = this.setAllProducts;

      console.log(this.getAllProducts);
      }
    );
  }

  public getSearch(value: string) {
    const filter = this.setAllProducts.filter( (res: any ) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllProducts = filter;
  }

}
