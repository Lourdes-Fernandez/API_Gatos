import { Component, inject } from '@angular/core';
import { CatsService } from '../../services/cats.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cargar-gatos',
  imports: [AsyncPipe],
  templateUrl: './cargar-gatos.component.html',
})
export class CargarGatosComponent {
  // $ -> Convención para Observables
  // ! -> non-null assertion, cuando se inicializa la variable después sin que de error
  dataCat$!: Observable<any>;
  //cat: any[] = [];
  
  private catService = inject(CatsService);
  
  ngOnInit(){
    this.loadCat()
  }

  loadCat(){
    this.dataCat$ = this.catService.getCat();
    console.log(this.dataCat$)
  }
}
