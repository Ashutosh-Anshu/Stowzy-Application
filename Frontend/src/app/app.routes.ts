import { Routes } from '@angular/router';
import { OwnerPortalComponent } from './owner-portal/owner-portal.component';
import { pagesRoutes } from './owner-portal/owner-portal.routes';

export const routes: Routes = [
    {
        path: '',
        component: OwnerPortalComponent,
        children:pagesRoutes
    }
];
