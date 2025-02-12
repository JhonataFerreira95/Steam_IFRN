import { Routes } from '@angular/router';



import { FloatComponent } from './components/float/float.component';
import { ApiComponent } from './components/api/api.component';
import { FormsComponent } from './pages/forms/forms.component';
import path from 'path';
import { Component } from '@angular/core';

export const routes: Routes = [
    { path: 'float', component: FloatComponent },
    { path: '', component: ApiComponent },
    { path: 'forms', component: FormsComponent }
];

