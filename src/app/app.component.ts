import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-title *ngIf = "destruir"></app-title>
    <br>
    <button (click) = "DestruirComponent()"></button> 
    -->
    <!--<app-deiretivas-estruturais></app-deiretivas-estruturais>-->
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{
  public destruir: boolean = true
  constructor() { }

  ngOnInit(): void {
  
  }

}
