import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CatsService } from '../../services/cats.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-mostrar-gatos',
  imports: [AsyncPipe],
  templateUrl: './mostrar-gatos.component.html',
  styleUrl: './mostrar-gatos.component.css'
})
export class MostrarGatosComponent {
  dataCats$!: Observable<any[]>;

  catService = inject(CatsService);

  constructor(){
    this.loadCats();
  }

  loadCats(){
    this.dataCats$ = this.catService.getCats();
    console.log(this.dataCats$)
  }
}
