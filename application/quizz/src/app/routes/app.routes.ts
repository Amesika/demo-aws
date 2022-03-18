import { Routes } from "@angular/router";

export const QUIZZ_ROUTES: Routes = [
    {
        path: 'sujet',
        loadChildren: () => import('../sujets/sujets.module').then(s => s.SujetsModule),
    },
    {
        path: '',
        redirectTo: 'sujet',
        pathMatch: 'full'
    }, {
        path: '**',
        redirectTo: 'sujet',
        pathMatch: 'full'
    }
];
