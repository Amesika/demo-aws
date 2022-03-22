import { Routes } from "@angular/router";

export const QUIZZ_ROUTES: Routes = [
    {
        path: 'sujet',
        loadChildren: () => import('../sujets/sujets.module').then(s => s.SujetsModule),
    },
    {
        path: 'score',
        loadChildren: () => import('../score/score.module').then(s => s.ScoreModule),
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
