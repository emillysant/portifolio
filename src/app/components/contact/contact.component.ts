import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DadosEnacom } from 'src/app/models/interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() dadosEnacom!: DadosEnacom
  @Output() usuarioCadastrado: EventEmitter<boolean> = new EventEmitter();

  panelOpenState = false;
  formCliente!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formCliente = this.formBuilder.group({
      name: [null],
      tel: [null],
      email: [null, [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    this.usuarioCadastrado.emit(false)
    console.log(this.formCliente);
    if (this.formCliente.controls['email'].status == 'VALID') {
      setTimeout(() => {
        this.usuarioCadastrado.emit(true)
      }, 5000);
      this.openEmail(this.formCliente.controls['email'].value)
      this.formCliente.reset();
    }
  }

  openEmail(emailAddress: string) {
    const mailtoUrl = `mailto:${emailAddress}`;
    window.open(mailtoUrl, "_blank");
  }
}
