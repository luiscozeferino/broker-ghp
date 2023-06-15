/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public contitionClick: boolean = true;
  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Luis Pijama", idade: 46},
    { nome: "Luis chinelo", idade: 14},
    { nome: "Luis descalço", idade: 45},
    { nome: "Tati quebra barraco", idade: 43}
  ];
  public nome: string = "luis";
  constructor() { }
  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      }
      else {
        this.condition = true;
      }
    }, 2000)

  }
  public onClick() {
    if (this.contitionClick) {
      this.contitionClick = false;
    }
    else {
      this.contitionClick = true;
    }
  }
  onClickAddList() {
    this.list.push({ nome: "Loly", idade: 31});
  }

  public onClickEventList(event: number) {
  //public onClickEventList(event: MouseEvent) {
    //console.log(event);
    this.list.splice(event, 1);

  }


}
