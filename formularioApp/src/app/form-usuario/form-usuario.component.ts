import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

import { Subscription } from 'rxjs';

import { FormService } from '../service/form.service';
import { AcoesValor } from '../model/acoes-valor';
import { AcoesStatus } from '../model/acoes-status';

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
  showTable = false;

  displayedColumnsValor: string[] = ['dataHora', 'campo', 'valor'];
  dataSourceValor = new MatTableDataSource<AcoesValor>();

  displayedColumnsStatus: string[] = ['dataHora', 'campo', 'status'];
  dataSourceStatus = new MatTableDataSource<AcoesStatus>();

  inscricao!: Subscription;

  inscricao1!: Subscription;
  inscricao2!: Subscription;
  inscricao3!: Subscription;
  inscricao4!: Subscription;
  inscricao5!: Subscription;
  inscricao6!: Subscription;
  inscricao7!: Subscription;
  inscricao8!: Subscription;
  inscricao9!: Subscription;
  inscricao10!: Subscription;
  inscricao11!: Subscription;
  inscricao12!: Subscription;
  inscricao13!: Subscription;
  inscricao14!: Subscription;
  inscricao15!: Subscription;
  inscricao16!: Subscription;
  inscricao17!: Subscription;
  inscricao18!: Subscription;
  
  constructor(private service: FormService) {
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

    this.inscricaoStatusChanges();
    this.inscricaoValueChanges();
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
    this.dataSourceValor = new MatTableDataSource<AcoesValor>(this.service.listaValor);
    this.dataSourceStatus = new MatTableDataSource<AcoesStatus>(this.service.listaStatus);
    this.showTable = true;
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

  limpar() {
    this.saida = '';
    this.dataSourceValor = new MatTableDataSource<AcoesValor>();
    this.dataSourceStatus = new MatTableDataSource<AcoesStatus>();
    this.showTable = false;
  }

  inscricaoValueChanges(){
    console.log('Inscrição valueChanges');
    let inscricao1 = this.form.get('nomeUsuario')?.valueChanges.subscribe(valor => {
        // console.log('Nome do usuario: ' + valor);
        this.service.addValor('nomeUsuario', valor);
    });

    let inscricao2 = this.form.get('senha')?.valueChanges.subscribe(
      valor => {
        // console.log('Senha: ' + valor);
        this.service.addValor('senha', valor);
    });

    let inscricao3 = this.form.get('email')?.valueChanges.subscribe(valor => {
        // console.log('E-mail: ' + valor);
        this.service.addValor('email', valor);
    });

    let inscricao4 = this.form.get('nomeCompleto')?.valueChanges.subscribe(valor => {
        // console.log('Nome completo: ' + valor);
        this.service.addValor('nomeCompleto', valor);
    });

    let inscricao5 = this.form.get('endereco')?.valueChanges.subscribe(valor => {
        // console.log('Endereco: ' + valor);
        this.service.addValor('endereco', valor);
    });

    let inscricao6 = this.form.get('telefone')?.valueChanges.subscribe(valor => {
        // console.log('Telefone: ' + valor);
        this.service.addValor('telefone', valor);
    });

    let inscricao7 = this.form.get('nascimento')?.valueChanges.subscribe(valor => {
        // console.log('Data de nascimento: ' + valor);
        this.service.addValor('nascimento', valor);
    });

    let inscricao8 = this.form.get('genero')?.valueChanges.subscribe(valor => {
        // console.log('Genero: ' + valor);
        this.service.addValor('genero', valor);
    });

    let inscricao9 = this.form.get('profissao')?.valueChanges.subscribe(valor => {
        // console.log('Profissao: ' + valor);
        this.service.addValor('profissao', valor);
    });
  }

  inscricaoStatusChanges(){
    console.log('Inscrição statusChanges');
    let inscricao10 = this.form.get('nomeUsuario')?.statusChanges.subscribe(status => {
        // console.log('Status do nome do usuario: ' + status)
        this.service.addStatus('nomeUsuario', status);
    });

    let inscricao11 = this.form.get('senha')?.statusChanges.subscribe(status => {
      // console.log('Status da senha: ' + status)
      this.service.addStatus('senha', status);
    });

    let inscricao12 = this.form.get('email')?.statusChanges.subscribe(status => {
      // console.log('Status do e-mail: ' + status)
      this.service.addStatus('email', status);
    });

    let inscricao13 = this.form.get('nomeCompleto')?.statusChanges.subscribe(status => {
      // console.log('Status do nome completo: ' + status)
      this.service.addStatus('nomeCompleto', status)
    });

    let inscricao14 = this.form.get('endereco')?.statusChanges.subscribe(status => {
      // console.log('Status do endereco: ' + status)
      this.service.addStatus('endereco', status)
    });

    let inscricao15 = this.form.get('telefone')?.statusChanges.subscribe(status => {
      // console.log('Status do telefone: ' + status)
      this.service.addStatus('telefone', status)
    });

    let inscricao16 = this.form.get('nascimento')?.statusChanges.subscribe(status => {
      // console.log('Status da data de nascimento: ' + status)
      this.service.addStatus('nascimento', status)
    });

    let inscricao17 = this.form.get('genero')?.statusChanges.subscribe(status => {
      // console.log('Status do genero: ' + status)
      this.service.addStatus('genero', status)
    });

    let inscricao18 = this.form.get('profissao')?.statusChanges.subscribe(status => {
      // console.log('Status da profissao: ' + status)
      this.service.addStatus('profissao', status)
    });
  }

  ngOnDestroy(){
    this.inscricao1.unsubscribe();
    this.inscricao2.unsubscribe();
    this.inscricao3.unsubscribe();
    this.inscricao4.unsubscribe();
    this.inscricao5.unsubscribe();
    this.inscricao6.unsubscribe();
    this.inscricao7.unsubscribe();
    this.inscricao8.unsubscribe();
    this.inscricao9.unsubscribe();
    this.inscricao10.unsubscribe();
    this.inscricao11.unsubscribe();
    this.inscricao12.unsubscribe();
    this.inscricao13.unsubscribe();
    this.inscricao14.unsubscribe();
    this.inscricao15.unsubscribe();
    this.inscricao16.unsubscribe();
    this.inscricao17.unsubscribe();
    this.inscricao18.unsubscribe();
  }

}
