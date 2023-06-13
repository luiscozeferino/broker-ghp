import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnDestroy {
  @Input() public title: string = 'ola-mundo2';
  //public title: string = 'ola-mundo';
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    console.log("foi alterado com successo.")
  }
  ngOnDestroy(): void {
    console.log("de bom");
  }
}
