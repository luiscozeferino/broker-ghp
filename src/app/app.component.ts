import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '1 <router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    setTimeout(() => {
      console.log("teste");
    }, 5000)

   }

}
