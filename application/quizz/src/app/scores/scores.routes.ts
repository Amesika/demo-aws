import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { ScoreResolver } from "./resolvers/score.resolver";
import { ScoresResolver } from "./resolvers/scores.resolver";
import { ScoreDashComponent } from "./score-dash/score-dash.component";
import { ScoreDetailsComponent } from "./score-details/score-details.component";
import { ScoreListeComponent } from "./score-liste/score-liste.component";

export const SCORES_ROUTES: Routes = [
    {
        path: '',
        component: ScoreDashComponent,
        children: [
            {
                path: 'mon-score',
                component: ScoreListeComponent,
                resolve: {
                    scores: ScoresResolver
                }
            },
            {
                path: 'all',
                component: ScoreListeComponent,
                resolve: {
                    scores: ScoresResolver
                }
            },
            {
                path: '',
                redirectTo: 'mon-score',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: 'details',
        component: ScoreDetailsComponent,
        resolve: {
            score: ScoreResolver
        }
    }
];
