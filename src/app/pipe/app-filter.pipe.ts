import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilter'
})
export class AppFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    console.log("searchText = ", searchText, items)
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = this.removerAcentos(searchText.toLocaleLowerCase());

    return items.filter((it: any) => {
       if(it.description) return this.removerAcentos(it?.description.toLocaleLowerCase()).includes(searchText);
    });
  }

  removerAcentos(texto: any) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}



@NgModule({
  declarations: [
    AppFilterPipe,
  ],
  imports: [

  ],
  exports: [
    AppFilterPipe
  ]
})
export class FilterModule { }
