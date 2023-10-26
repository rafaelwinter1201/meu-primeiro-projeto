import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit{
  
  public valor: boolean = true
  public heigthpx: string = "20px"
  public backgroudColor: string = "aquamarine"
  
  constructor() { };
  ngOnInit(): void {
    setInterval ( () => {
      if(this.heigthpx == "20px"){
        this.heigthpx = "50px";
        this.backgroudColor = "aquamarine";
      }else{
        this.heigthpx = "20px";
        this.backgroudColor = "rgb(44, 158, 40)";
      }

      if(this.valor){
        this.valor = false
      }else{
        this.valor = true
      }
    },2000)
  }
}
