// Clases Nesesarias de Angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'home', component: HomeComponent},
    {path: 'categorias', component: CategoriasComponent},
    {path: 'error', component: ErrorComponent},
    {path: '**', component: ErrorComponent},
];

export const APPROUTINGPROVIDERS: any[]= [];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);

