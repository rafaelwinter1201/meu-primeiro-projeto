import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databiding',
  templateUrl: './databiding.component.html',
  styleUrls: ['./databiding.component.scss']
})
export class DatabidingComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor() { };

  public nome:string  = "rafael";
  public idade:number  = 21;

  public CheckedDisabled: boolean = false; 
  public ImgSrc: string = "https://t.ctcdn.com.br/HfaAfdSP0yElfXWQelkeEQvkgyU=/1000x563/smart/i257652.jpeg"; 

  public AlertaInfo(valor: MouseEvent) {
    console.log(valor)
  }

  public position: {x: number, y: number} = {x: 0, y: 0}
  public MouseMoveTeste (valor: MouseEvent){
    console.log (valor)
    this.position.x = valor.offsetX
    this.position.y = valor.offsetY
  }
}
