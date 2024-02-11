import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrl: './form-usuario.component.css'
})
export class FormUsuarioComponent {
  form: FormGroup;
  profissao: FormGroup;

  hide = true;
  generos: any[] = [
    {value: '', viewValue: 'Selecione...'},
    {value: 'M', viewValue: 'Masculino'},
    {value: 'F', viewValue: 'Feminino'},
  ];

  today: Date = new Date();
  day = this.today.getDay();
  month = this.today.getMonth();
  year = this.today.getFullYear();

  constructor() {
    this.form = new FormGroup({
      'nomeUsuario': new FormControl(null, Validators.required),
      'senha': new FormControl(null, Validators.required),
      'email': new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      'nomeCompleto': new FormControl(null, Validators.required),
      'telefone': new FormControl(null, Validators.required),
      'endereco': new FormControl(null, Validators.required),
      'nascimento': new FormControl(null),
      'genero': new FormControl(null, Validators.required)
    });

    this.profissao = new FormGroup({
      'analistaSistemas': new FormControl(false),
      'engenheiro': new FormControl(false),
      'professor': new FormControl(false)
    });
  }

  getErrorMessage() {
    // if (this.email.hasError('required')) {
    //   return 'You must enter a value';
    // }

    // return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    // console.log('form: ', this.form);
    this.form.value.profissao = this.profissao.value;
    console.log(this.form.value);
  }
}
