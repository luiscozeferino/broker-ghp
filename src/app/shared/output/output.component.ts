import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  @Output() public enviarDados = new EventEmitter();

  public list: Array<{ nome: string, idade: number }> = [
     { nome: "Luis", idade: 46},
     { nome: "Luisin", idade: 22},
     { nome: "tati", idade: 60}

  ];
  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
    //console.log(this.list[event]);
  }
  //public list: Array<{ nome: string }> = [{ nome: "luis" }];

}
