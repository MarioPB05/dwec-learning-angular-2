import { Routes } from '@angular/router';
import {Exercise1Component} from '../components/firstPart/exercise1/exercise1.component';
import {Exercise1Component as SPExercise1Component} from '../components/secondPart/exercise1/exercise1.component';

export const routes: Routes = [
  { path: '', component: Exercise1Component },
  { path: 'secondPart/exercise-1', component: SPExercise1Component }
];
