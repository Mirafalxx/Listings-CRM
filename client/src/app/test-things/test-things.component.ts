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

  value = `Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not ` +
    `a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord ` +
    `of the Sith, so powerful and so wise he could use the Force to influence the ` +
    `midichlorians to create life… He had such a knowledge of the dark side that he could ` +
    `even keep the ones he cared about from dying. The dark side of the Force is a pathway ` +
    `to many abilities some consider to be unnatural. He became so powerful… the only ` +
    `thing he was afraid of was losing his power, which eventually, of course, he did. ` +
    `Unfortunately, he taught his apprentice everything he knew, then his apprentice ` +
    `killed him in his sleep. Ironic. He could save others from death, but not himself.`;
}




