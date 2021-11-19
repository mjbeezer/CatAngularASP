import { Component } from '@angular/core';
import { CatApiService } from '../cat-api.service';
import { CatDbService } from '../cat-db.service';
import { Cat } from '../CatAPI';
import { FavoritesComponent } from '../favorites/favorites.component';

@Component({
    selector: 'app-random-cat',
    templateUrl: './random-cat.component.html',
    styleUrls: ['./random-cat.component.css']
})
/** RandomCat component*/
export class RandomCatComponent {

  randyCat: Cat[] = [];

    /** RandomCat ctor */
    constructor(private cat_API_Service:CatApiService, private favorite_Service:CatDbService ) {

  }

  ngOnInit(): void {
    this.getCatImages();
  }

  getCatImages(): void {
    this.cat_API_Service.getCatImages().subscribe((response: any) => {
      console.log(response);
      this.randyCat = response;
    })
  }

  addToFavorites(cat_Id:string): void {
    this.favorite_Service.postFavorites(cat_Id).subscribe((response: any) => {
      console.log(response);

    })
  }

}
