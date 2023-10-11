import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title *ngIf = "destruir"></app-title>
    <br>
    <button (click)="destruirComponent()">Click do thanos</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{
  public destruir:boolean = true;
  constructor() { }

  ngOnInit(): void {
  
  }
  public destruirComponent(){
    this.destruir = false;
  }

}
