import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomeRepo: string;

  repos: string[];

  constructor(private cursosService : CursosService) {
    this.nomeRepo = "https://github.com/andretimm/";
    this.repos = this.cursosService.getCursos();
  }

  ngOnInit() {
  }

}
