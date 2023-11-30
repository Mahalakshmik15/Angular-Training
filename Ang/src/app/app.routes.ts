import { Routes } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { UserCardComponent } from './user-card/user-card.component';

export const routes: Routes = [
    {path:'timer', component:TimerComponent},
    {path:'user', component:UserCardComponent}
];
