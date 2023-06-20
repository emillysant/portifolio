import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DadosEnacom } from '../models/interfaces';

const API = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) { }

  sendEmailENACOM() {
    return this.httpClient.get<DadosEnacom>(`${API}/sendEmail`);
  }
}
