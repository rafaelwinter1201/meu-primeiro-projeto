import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-title *ngIf = "destruir"></app-title>
    <br>
    <button (click) = "DestruirComponent()"></button> 
    -->
    <!--<app-deiretivas-estruturais></app-deiretivas-estruturais>-->
    <!--
    <app-diretivas-atributos>
      <h1> Olá mundo </h1>
      <hr>
    </app-diretivas-atributos>
    <app-diretivas-atributos>
      <h1> Olá mundo </h1>
      <hr>
    </app-diretivas-atributos>
    
    <app-diretivas-atributos> </app-diretivas-atributos>
    
    <app-new-component></app-new-component>
    -->
    <app-input [contador] = "addValue"></app-input>
    <br>
    <button (click) = "add()">Add</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{
  public destruir: boolean = true

  public addValue: number = 10;

  public add (){
    this.addValue += 1
  }

  constructor() { }

  ngOnInit(): void {
  
  }

}
