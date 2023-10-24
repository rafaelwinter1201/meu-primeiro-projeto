import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deiretivas-estruturais',
  templateUrl: './deiretivas-estruturais.component.html',
  styleUrls: ['./deiretivas-estruturais.component.scss']
})
export class DeiretivasEstruturaisComponent implements OnInit{
  public condition: boolean = true
  public conditionClick: boolean = true

  constructor() { }

  ngOnInit(): void {
    setInterval( ()=> {
      if(this.condition){
        this.condition = false
      }else {
        this.condition = true
      }
    }, 2000)
  }
  public OnClick(){
    if(this.conditionClick){
      this.conditionClick = false
    }else {
      this.conditionClick = true
    }
  }
}
