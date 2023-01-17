import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})

//criar rota em app-rounting.module
export class ReactiveComponent {
  
//validators
  cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private formBuilder: FormBuilder) { }

  public submitForm(){
    if(this.cadastroForm.valid){
      console.log(this.cadastroForm.value.firstName);
      console.log(this.cadastroForm.value.lastName);
    }
    
  }

}
