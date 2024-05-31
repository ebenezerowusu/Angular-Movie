import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        //component: HomeComponent,
        data: { title: 'Home' },
        children: [
        ]
    }
];
