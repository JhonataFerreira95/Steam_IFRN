import { Routes } from '@angular/router';



import { FloatComponent } from './float/float.component';
import { ApiComponent } from './api/api.component';
import { FormsComponent } from './forms/forms.component';
import path from 'path';
import { Component } from '@angular/core';

export const routes: Routes = [
    { path: 'float', component: FloatComponent },
    { path: '', component: ApiComponent },
    { path: 'forms', component: FormsComponent }
];

