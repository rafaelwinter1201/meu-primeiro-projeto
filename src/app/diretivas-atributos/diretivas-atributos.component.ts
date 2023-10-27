import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = true
  public heigthpx: string = "20px"
  public backgroudColor: string = "aquamarine"

  public nome: string = ""
  public list: Array<{ nome: string }> = [{ nome: "Rafael" }];

  constructor() { };
  ngOnInit(): void {

  }

  public salvar() {
    this.list.push({ nome: this.nome });
    this.nome = ""
  }
}
