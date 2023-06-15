import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent {

  public nome: string = "Luis";
  public idade: number = 46;
  public maisUm: number = 1;

  public checkedDisabled: boolean = true;

  public imgSrc: string = "https://www.itau.com.br/media/dam/m/4bc9ee9148ae4883/original/LPS-Web-592-x-345-px-OCo-19.png";
  public imgTitle: string = "Property Binding";
  public imgAlt: string = "Property Binding";
  public position: { x: number, y: number } = {x: 0, y: 0}

  public AlertaInfo( valor: MouseEvent) {
    //alert(valor);
    console.log(valor);

  }
  public mouseMoveTeste(valor: MouseEvent) {
    //console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;



  }

}
