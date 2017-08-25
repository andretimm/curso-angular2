import { Component, OnInit, DoCheck, OnChanges, AfterContentInit, OnDestroy, Input  } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, DoCheck, OnChanges, AfterContentInit, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() { 
    this.log("construtor");
  }

  ngOnInit() {
    this.log("ngOninit");
  }

  ngDoCheck(){
    this.log("ngDoCheck");
  }

  ngOnChanges(){
    this.log("ngOnChange");
  }

  ngOnDestroy(){
    this.log("ngOnDestroy");
  }


  ngAfterContentInit(){
    this.log("ngAfterContentInit");
  }

  private log(e: string){
    console.log(e);
  }

}
