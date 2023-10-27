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
   
    <app-input [contador] = "addValue"></app-input>
    <br>
    <button (click) = "add($event)">Add</button>
    -->

    <ng-template [ngIf]="getDados">
      <h1>{{ getDados.nome }}</h1>
      <h2>{{ getDados.idade }}</h2>
    </ng-template>
    <app-output (enviarDados)="setDados($event)"></app-output>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  public destruir: boolean = true

  public addValue: number = 10;

  public getDados: { nome: string, idade: number } | undefined

  public add() {
    this.addValue += 1
  }

  public setDados(event: { nome: string, idade: number }) {
    this.getDados = event;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
