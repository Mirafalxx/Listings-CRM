import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { forbiddenBrandValidator } from './teeee'


interface Hero {
  id: number
  name: string
  power: string
  alterEgo?: string
}

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']

})
export class ValidationComponent implements OnInit {
  heroForm: FormGroup;
  // hero: Hero;
  hero: Hero;






  constructor() { }

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        forbiddenBrandValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      alterEgo: new FormControl(''),
      power: new FormControl('', Validators.required)
    });



  }

  get name() { return this.heroForm.get('name'); }

  get power() { return this.heroForm.get('power'); }

}
