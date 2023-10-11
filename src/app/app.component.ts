import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    {{ valor }}
    <button (click)="adicionar()">Clica em mim</button>
    <router-outlet></router-outlet>
    `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  public valor:number = 1
  public adicionar():number{
    return this.valor +=1
  }
  constructor() { }

  ngOnInit(): void {
  
  }

  ngAfterContentChecked(): void {
    console.log ('ngAfterContentChecked')
  }

  ngAfterContentInit(): void {
    console.log ('ngAfterContentInit')
  }

  ngAfterViewChecked(): void {
    console.log ('ngAfterViewChecked')
  }

  ngAfterViewInit(): void {
    console.log ('ngAfterViewInit')
  }

  ngDoCheck(): void {
    console.log ('ngDoCheck')
  }
}
