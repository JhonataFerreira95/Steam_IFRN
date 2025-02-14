import { Routes } from '@angular/router';



import { FloatComponent } from './components/float/float.component';
import { ApiComponent } from './components/api/api.component';
import { FormsComponent } from './pages/forms/forms.component';
import path from 'path';
import { Component } from '@angular/core';
import { BodyComponent } from './components/body/body.component';

export const routes: Routes = [
    { path: 'float', component: FloatComponent },
    { path: '', component: BodyComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'busca_perfil', component: ApiComponent}
];

