import { Component } from '@angular/core';
import {NotasComponent} from './notas/notas.component';
import {TableFiltersComponent} from './table-filters/table-filters.component';

@Component({
  selector: 'app-exercise1',
  standalone: true,
  imports: [
    NotasComponent,
    TableFiltersComponent
  ],
  templateUrl: './exercise1.component.html'
})
export class Exercise1Component {
  filterStudentName: string = '';
  filterStatus: string = 'all';

  updateStudentNameFilter(value: string) {
    this.filterStudentName = value;
  }

  updateStatusFilter(value: string) {
    this.filterStatus = value;
  }

}
