import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  private (_alburmurl) {
    return '../assets/album.json';
  }

  getAlbum(id) : number{

  }

}
