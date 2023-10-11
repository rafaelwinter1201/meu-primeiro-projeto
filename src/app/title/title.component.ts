import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges,OnDestroy {

  public title:string = "ola mundo"

  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnChanges ():void {

  }

  ngOnDestroy(): void {
    alert ("ele foi destruido");
  }
  

}
