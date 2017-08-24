import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles:[
    `
    .highlight{
        background-color: yellow;
        font-weight: bold;
    }
    `
  ]

})
export class DataBindingComponent implements OnInit {

  url: string = "https://github.com/andretimm";
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/';

  valorAtual: string ='';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nome: string = 'abc';

  nomeDoCurso: string = "Angular";

  pessoa: any = {
    nome: "teste",
    idade: 1
  }

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert("clicado");
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}
