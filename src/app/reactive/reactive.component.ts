import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})

//criar rota em app-rounting.module
export class ReactiveComponent {
  
  cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['']
  });

  constructor(private formBuilder: FormBuilder) { }

  public submitForm(){
    console.log(this.cadastroForm.value.firstName);
    console.log(this.cadastroForm.value.lastName);
  }

}
