import { Routes } from '@angular/router';
import { CargarGatosComponent } from './components/cargar-gatos/cargar-gatos.component';
import { HomeComponent } from './components/home/home.component';
import { MostrarGatosComponent } from './components/mostrar-gatos/mostrar-gatos.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'cargargato',
        component: CargarGatosComponent
    },
    {
        path: 'home',
        component: MostrarGatosComponent
    }
];
