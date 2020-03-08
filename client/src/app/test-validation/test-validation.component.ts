import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-validation',
  templateUrl: './test-validation.component.html',
  styleUrls: ['./test-validation.component.css']
})
export class TestValidationComponent implements OnInit {
  myForm: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      asin: ['', [
        Validators.required,
        Validators.minLength(10),
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],

    });
  }

  get asin() {
    return this.myForm.get('asin');
  }

  get password() {
    return this.myForm.get('password');
  }


}

