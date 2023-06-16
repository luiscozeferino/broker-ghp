/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent implements OnInit {
  public nome: string = "";
  public list: Array<{ nome: string }> = [];
  public heightPx: string = "20px";
  public backgroundColor: string = "red";

  public valor: boolean = true;

  ngOnInit(): void {
    //ngClass
    setInterval(() => {
      if(this.valor) {
        this.valor = false;
      }
      else {
        this.valor = true;
      }
    }, 2000)

    //ngStyle
    setInterval(() => {
      if(this.heightPx == "20px") {
        this.heightPx = "200px";
        this.backgroundColor = "red";
      }
      else {
        this.heightPx = "20px";
        this.backgroundColor = "blue";
      }
    }, 2000)

  }
  public salvar() {
    this.list.push({nome: this.nome});
    this.nome = "";
  }
}
