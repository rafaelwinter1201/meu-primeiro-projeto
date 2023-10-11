import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log ('Oi console')
    }, 5000);
  }
}
