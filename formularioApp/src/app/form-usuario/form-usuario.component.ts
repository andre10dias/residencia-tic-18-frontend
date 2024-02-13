import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

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
    {value: 'M', viewValue: 'Masculino'},
    {value: 'F', viewValue: 'Feminino'},
  ];
  profissoes: any[] = [
    {value: 'analista', viewValue: 'Analista de sistemas'},
    {value: 'cientista', viewValue: 'Cientista de dados'},
    {value: 'professor', viewValue: 'Professor'},
    {value: 'product', viewValue: 'Product owner'}
  ]
  buttonDisabled: boolean = true;
  saida: string = '';
  
  constructor() {
    this.bindValidator();

    const profissaoControls: any[] = [];
    this.profissoes.forEach((profissao: any) => {
      profissaoControls[profissao.value] = new FormControl(false);
    });

    this.profissao = new FormGroup(profissaoControls);

    this.form = new FormGroup({
      'nomeUsuario': new FormControl(null, [
        Validators.required,
        Validators.maxLength(12),
        this.nomeUsuarioValidator
      ]),
      'senha': new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        this.senhaValidator
      ]),
      'email': new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      'nomeCompleto': new FormControl(null, [
        Validators.required,
        this.nomeCompletoValidator
      ]),
      'telefone': new FormControl(null, [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)
      ]),
      'endereco': new FormControl(null, Validators.required),
      'nascimento': new FormControl(null, [
        Validators.required,
        this.idadeMinimaValidator
      ]),
      'genero': new FormControl(null, Validators.required),
      'profissao': this.profissao
    });
    
    this.form.statusChanges.subscribe(() => {
      this.buttonDisabled = !this.form.valid;
    });

  }

  nomeUsuarioValidator(control: AbstractControl): { [key: string]: boolean } | null {
    return this.fieldValidator(control, /^\S+$/);
  }

  senhaValidator(control: AbstractControl): { [key: string]: boolean } | null {
    return this.fieldValidator(control, /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{4,})/);
  }

  nomeCompletoValidator(control: AbstractControl): { [key: string]: boolean } | null {
    return this.fieldValidator(control, /^[a-zA-Z]+\s[a-zA-Z]+$/);
  }

  idadeMinimaValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const dataNascimento = new Date(control.value);
    const hoje = new Date();
    const idade = hoje.getFullYear() - dataNascimento.getFullYear();

    if (idade < 18) {
      return { idadeMinimaInvalida: true };
    }

    return null;
  }

  profissaoValidator(control: AbstractControl): { [key: string]: boolean } | null {
    let isValid = null;

    this.profissoes?.forEach((element: any) => {
      let profissao = control.get(element.value)?.value;

      console.log('Profissao: ', profissao);

      if (profissao && this.form.valid) {
        isValid = true;
      }
    });

    if (!isValid) {
      this.buttonDisabled = true;
    }

    return null;
  }

  formatarTelefone(): string {
    let telefone = this.form.get('telefone')?.value;

    if (telefone != null) {
      // Remove todos os caracteres não numéricos do número de telefone
      const numerosTelefone = telefone.replace(/\D/g, '');
  
      // Aplica a máscara ao número de telefone
      const telefoneFormatado = numerosTelefone.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, '($1) $2 $3-$4');
      return telefoneFormatado;
    }

    return telefone;
  }

  onSubmit() {
    console.log(this.form.value);
    this.saida = JSON.stringify(this.form.value);
  }

  fieldValidator(control: AbstractControl, regex: RegExp): { [key: string]: boolean } | null {
    if (!regex.test(control.value)) {
      return { invalid: true };
    }

    return null;
  }

  // Vinculando o contexto de 'this' às funções de validação:
  bindValidator() {
    this.nomeUsuarioValidator = this.nomeUsuarioValidator.bind(this);
    this.senhaValidator = this.senhaValidator.bind(this);
    this.nomeCompletoValidator = this.nomeCompletoValidator.bind(this);
  }

}
