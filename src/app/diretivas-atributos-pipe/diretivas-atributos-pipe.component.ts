/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos-pipe',
  templateUrl: './diretivas-atributos-pipe.component.html',
  styleUrls: ['./diretivas-atributos-pipe.component.css']
})
export class DiretivasAtributosPipeComponent {

  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  public nome: string = "";
  public list: Array<{ nome: string }> = [{ nome: "luis" }];
  public data = new Date();
  public salvar() {
    this.list.push({nome: this.nome});
    this.nome = "";
  }

}
