import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos(){
    return ["curso-angular2","nativescript-rss","blog","byfe"];
  }
  
}
