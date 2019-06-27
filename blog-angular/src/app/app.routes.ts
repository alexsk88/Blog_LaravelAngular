// Clases Nesesarias de Angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { CategoryNewComponent } from './components/category-new/category-new.component';
import { PostNewComponent } from './components/post-new/post-new.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';

const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout/:sure', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'ajustes', component: UserEditComponent},
    {path: 'crear-categoria', component: CategoryNewComponent},
    {path: 'crear-post', component: PostNewComponent},
    {path: 'entrada/:id', component: PostDetailComponent},
    {path: 'editar-entrada/:id', component: PostEditComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'categoria/:id', component: CategoryDetailComponent},
    {path: 'categorias', component: CategoriasComponent},
    {path: 'error', component: ErrorComponent},
    {path: '**', component: ErrorComponent},
];

export const APPROUTINGPROVIDERS: any[]= [];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);

