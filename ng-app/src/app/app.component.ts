import { Component } from '@angular/core';
import { Address } from './types';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',

})
export class AppComponent {
  constructor() { }
  // model
  title: string = 'Angular Application';
  //numbers
  views: number = 10;
  //boolean
  isActive: boolean = true;
  //object
  address: Address = {
    city: 'Coimbatore',
    state: 'Tamil Nadu'
  }
  //array
  skills: string[] = ['Javascript', 'TypeScript', 'Angular', 'React'];
}
