import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomeRepo: string;

  repos: string[] = ["curso-angular2","nativescript-rss","blog","byfe"];

  constructor() {
    this.nomeRepo = "https://github.com/andretimm/";
  }

  ngOnInit() {
  }

}
