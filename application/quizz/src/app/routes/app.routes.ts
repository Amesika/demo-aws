import { Routes } from "@angular/router";

export const QUIZZ_ROUTES: Routes = [
    {
        path: 'sujet',
        loadChildren: () => import('../sujets/sujets.module').then(s => s.SujetsModule),
    },
    {
        path: 'score',
        loadChildren: () => import('../scores/scores.module').then(s => s.ScoresModule),
    },
    {
        path: 'start',
        loadChildren: () => import('../start/start.module').then(s => s.StartModule),
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
