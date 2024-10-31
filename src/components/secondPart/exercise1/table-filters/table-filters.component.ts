import {Component, EventEmitter, Output} from '@angular/core';
import {MatCard, MatCardActions, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatFormField, MatLabel, MatPrefix} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-table-filters',
  standalone: true,
  imports: [
    MatCard,
    MatCardActions,
    MatCardHeader,
    MatCardTitle,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatOption,
    MatPrefix,
    MatSelect,
    FormsModule
  ],
  templateUrl: './table-filters.component.html'
})
export class TableFiltersComponent {
  studentName: string = '';
  statusSelected: string = 'all';

  @Output() studentNameChange = new EventEmitter<string>();
  @Output() statusSelectedChange = new EventEmitter<string>();

  onStudentNameChange(value: string) {
    this.studentNameChange.emit(value);
  }

  onStatusSelectedChange() {
    this.statusSelectedChange.emit(this.statusSelected);
  }
}
