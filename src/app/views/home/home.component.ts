import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { otherTechnologies, technologies } from 'src/app/data/technologies';
import { DadosEnacom, Technology } from 'src/app/models/interfaces';
import { EmailService } from 'src/app/service/email.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  loading: boolean = false;
  subscription!: Subscription
  dadosEnacom!: DadosEnacom;

  technologiesData = technologies;
  otherTechnologyData = otherTechnologies;

  constructor(
    private emailService: EmailService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.buscarContatoENACOM()
    this.loading = true
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe()
  }

  usuarioCadastrando(event$: Event | boolean) {
    console.log("Retorno do output", event$)
    this.loading = !event$
    if (event$) {
      this.openSnackBar("Obrigada pelo seu contato!", "Fechar")
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }

  buscarContatoENACOM() {
    this.subscription = this.emailService.sendEmailENACOM().subscribe(
      (response: DadosEnacom) => {
        this.dadosEnacom = response
        console.log("response", response)
        return this.dadosEnacom
      }
    )
  }

}
