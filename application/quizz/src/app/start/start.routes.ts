import { Routes } from "@angular/router";
import { StartDashComponent } from "./start-dash/start-dash.component";
import { StartStepComponent } from "./start-step/start-step.component";

export const START_ROUTES: Routes = [
    {
        path: '',
        component: StartDashComponent
    },
    {
        path: 'step',
        component: StartStepComponent
    }
];
