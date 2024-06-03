import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { title } from 'process';
import { ABOUT_PATH, CONTACT_PATH, HOME_PATH } from '../../app-routes.constants';

export const routes: Routes = [
  {
    path: HOME_PATH,
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),

  },
  {
    path: ABOUT_PATH,
    loadComponent: () => import('./about-us/about-us.component').then(m => m.AboutUsComponent),
    data: {
      title: 'About Us'
    }
  },
  {
    path: CONTACT_PATH,
    loadComponent: () => import('./contact-us/contact-us.component').then(m => m.ContactUsComponent),
    data: {
      title: 'Contact Us'
    }
  }

];

