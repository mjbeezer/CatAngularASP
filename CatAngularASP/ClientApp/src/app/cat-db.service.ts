import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatDbService {
  //no need for auhroize service becuase we are not using current users email, back end grabs user ID
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  getUserFavorites(): any {

    return this.http.get(this.baseUrl + "api/Cat/allUserFavorites")
  }

  postFavorites(cat_Id:string): any {
    return this.http.post(this.baseUrl + `api/Cat/addUserFavorite?cat_Id=${cat_Id}`, {});
  }

}
