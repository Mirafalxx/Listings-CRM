import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-test-things',
  templateUrl: './test-things.component.html',
  styleUrls: ['./test-things.component.css']
})
export class TestThingsComponent implements OnInit {



  constructor(private formBuilder: FormBuilder,
    private router: Router, ) { }

  ngOnInit() {

  }

  copyInputMessage(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }


}




