import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {
  constructor(private http: HttpClient) {
    
  }

  apiKey: string = "25b6cc5d-1bc2-4507-b773-43226f0305ce";
  apiUrl: string = "https://api.thecatapi.com/v1";

  getCatImages(): any {
    return this.http.get(this.apiUrl + `/images/search?api_key=${this.apiKey}`);
  }

  getCatImagesById(cat_Id:string): any {
    return this.http.get(this.apiUrl + `/images/${cat_Id}?api_key=${this.apiKey}`);
  }
}
