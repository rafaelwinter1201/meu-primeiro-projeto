import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter();

  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Rafael", idade: 21 },
    { nome: "Tifany", idade: 48 },
    { nome: "Natalia", idade: 18 }
  ]

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event])
  };

  constructor() { };

  ngOnInit(): void {

  };
};
