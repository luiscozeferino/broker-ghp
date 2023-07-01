/* eslint-disable @typescript-eslint/no-inferrable-types */
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
    Output<br>
    <ng-template [ngIf]="getDados">
      <h1>{{getDados.nome}}</h1>
      <h2>{{getDados.idade}}</h2>

    </ng-template>
    <br>
    <app-output (enviarDados)="setDados($event)"></app-output>
    <br><br>Input<br>
    <app-input [contador]="addValor"></app-input>
    <button (click)="add()">Adiciona</button>
    <br><br><br>
    <app-header></app-header>
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
  public addValor: number = 0;
  public add() {
    this.addValor += 1;
  }

  public getDados: {nome: string, idade: number} | undefined
  public setDados(event: {nome: string, idade: number}) {
    this.getDados = event;
  }

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
