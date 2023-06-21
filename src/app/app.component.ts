/* eslint-disable @typescript-eslint/no-empty-function */
//import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--{{valor}}
    <button (click)="adicionar();">Adicionar</button>
    <app-title title="bem vindo" *ngIf="destruir"></app-title>
    <br>
    <button (click)="destruirComponente();">Destruir</button>-->
    <app-diretivas-atributos-pipe></app-diretivas-atributos-pipe>
    <app-diretivas-atributos>
      <h1>Aulas de diretivas de atributo 01</h1>
      <h3>Final do exercicio ng-content 01</h3>
    </app-diretivas-atributos>
    <app-diretivas-atributos>
      <h1>Aulas de diretivas de atributo 02</h1>
      <h3>Final do exercicio ng-content 02</h3>
    </app-diretivas-atributos>
    <app-diretivas-estruturais></app-diretivas-estruturais>
    <br><br><br><br><br><br><br><br><br><br><br><hr><br>
    <app-data-biding></app-data-biding>
    <router-outlet></router-outlet>
  `
})
//export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
export class AppComponent  {
  //public valor: number = 1;
  //public destruir:boolean = true;
  constructor() { }
  /*destruirComponente(): void {
    this.destruir = false;
  }
  public adicionar(): number {
    return this.valor += 1;
  }*/

  //ngOnInit(): void { }
  //ngOnChanges(): void {  }

  //ngDoCheck(): void { console.log("DoCheck"); }
  //ngAfterContentInit(): void { console.log("AfterContentInit");  }
  //ngAfterContentChecked(): void { console.log("AfterContentChecked"); }
  //ngAfterViewInit(): void { console.log("AfterViewInit"); }
  //ngAfterViewChecked(): void { console.log("AfterViewChecked"); }

}
