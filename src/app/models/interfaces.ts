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

export interface Technology {
  name: string;
  time: string | number;
  color: string;
  src?: string;
}

export interface OtherTechnology {
  name: string;
  src: string;
}
export interface Project {
  title: string;
  framework: string;
  description: string;
  code: string;
  site?: string;
}

export interface Experience {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  technology?: string;
}
