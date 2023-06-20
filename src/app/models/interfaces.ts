export interface Technology {
  name: string;
  time: string | number;
  color: string;
  src?: string;
}


export interface DadosEnacom {
  subject_matter: string;
  comment: string;
  contact: Contact;
}

export interface Contact {
  name: string;
  tel: string;
  email: string;
  comment?: string;
}
