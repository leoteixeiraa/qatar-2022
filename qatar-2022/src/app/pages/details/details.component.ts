import { GameApiService } from './../../service/game-api.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public apiWhatsapp: string = "https://api.whatsapp.com/send?phone=5512997572923&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto"
  products: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gameApiService: GameApiService
  ) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.gameApiService.readById(id).subscribe((res) => {
      this.products = res;
      console.log(this.products)
    });

  }

}
