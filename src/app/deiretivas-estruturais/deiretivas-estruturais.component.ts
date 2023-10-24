import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deiretivas-estruturais',
  templateUrl: './deiretivas-estruturais.component.html',
  styleUrls: ['./deiretivas-estruturais.component.scss']
})
export class DeiretivasEstruturaisComponent implements OnInit{
  public condition: boolean = true
  public conditionClick: boolean = true

  public list: Array < {nome:string, idade: number} > = [
    { nome: "Rafael", idade: 21 },
    { nome: "João", idade: 28 },
    { nome: "Nathalia", idade: 20 }
  ]
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

  public name:any 
  public year:any
  public OnClickAddList(name: any,year: any){
    this.list.push({nome: name , idade: year })
  }
}
