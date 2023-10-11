import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databiding',
  templateUrl: './databiding.component.html',
  styleUrls: ['./databiding.component.scss']
})
export class DatabidingComponent implements OnInit {
  public nome:string  = "rafael";
  public idade:number  = 21;

  constructor() {}
  
  ngOnInit(): void {
    
  }
}
