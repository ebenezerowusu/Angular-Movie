import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component:  MainLayoutComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./features/static/routes').then((m) => m.routes)
            },
            
        ]
    }
];
