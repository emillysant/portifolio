import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { MaterialModule } from '../material/material.module';
import { AccomplishmentsComponent } from './accomplishments/accomplishments.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ExperienceComponent,
    AccomplishmentsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ExperienceComponent,
    AccomplishmentsComponent,
    ContactComponent
  ]
})
export class ComponentsModule { }
