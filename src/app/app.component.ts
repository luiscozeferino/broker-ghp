import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    {{valor}}
    <button (click)="adicionar();">Adicionar</button>
    <app-title title="bem vindo" *ngIf="destruir"></app-title>
    <br>
    <button (click)="destruirComponente();">Destruir</button>

    <router-outlet>teste</router-outlet>
  `
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  public valor: number = 1;
  public destruir:boolean = true;
  constructor() {}
  destruirComponente(): void {
    this.destruir = false;
  }
  public adicionar(): number {
    return this.valor += 1;
  }

  ngOnInit(): void {
     /*setTimeout(() => {
      console.log(1);
    }, 5000)*/
    }
  ngOnChanges(): void {  }

  ngDoCheck(): void { console.log("DoCheck"); }
  ngAfterContentInit(): void { console.log("AfterContentInit");  }
  ngAfterContentChecked(): void { console.log("AfterContentChecked"); }
  ngAfterViewInit(): void { console.log("AfterViewInit"); }
  ngAfterViewChecked(): void { console.log("AfterViewChecked"); }

}
