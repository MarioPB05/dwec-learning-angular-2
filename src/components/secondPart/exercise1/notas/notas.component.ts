import {Component, Input, SimpleChanges} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import {NgIf} from '@angular/common';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatPrefix} from '@angular/material/form-field';

export interface Student {
  id: number;
  nombre: string;
  apellidos: string;
  nota: number;
  estado: "Aprobado" | "Suspendido";
}

const STUDENTS: Student[] = [
  {
    id: 1,
    nombre: 'Juan',
    apellidos: 'González',
    nota: 7.5,
    estado: 'Aprobado'
  },
  {
    id: 2,
    nombre: 'María',
    apellidos: 'Gómez',
    nota: 6.2,
    estado: 'Aprobado'
  },
  {
    id: 3,
    nombre: 'Pedro',
    apellidos: 'Pérez',
    nota: 4.8,
    estado: 'Suspendido'
  },
  {
    id: 4,
    nombre: 'Ana',
    apellidos: 'Martínez',
    nota: 9.1,
    estado: 'Aprobado'
  },
  {
    id: 5,
    nombre: 'Luis',
    apellidos: 'Fernández',
    nota: 3.7,
    estado: 'Suspendido'
  }
];

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRowDef,
    MatRow,
    NgIf,
    MatCardContent,
    MatCard,
    MatIcon,
    MatPrefix
  ],
  templateUrl: './notas.component.html'
})
export class NotasComponent {
  displayedColumns: string[] = ['estudiante', 'nota', 'estado'];
  dataToDisplay = [...STUDENTS];
  dataSource = new customDataSource(this.dataToDisplay);

  @Input() filterStudentName: string = '';
  @Input() filterStatus: string = 'all';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filterStudentName'] || changes['filterStatus']) {
      this.applyFilters();
    }
  }

  applyFilters() {
    const filteredData = this.dataToDisplay.filter((student) => {
      const matchesName = this.filterStudentName
        ? `${student.nombre} ${student.apellidos}`
          .toLowerCase()
          .includes(this.filterStudentName.toLowerCase())
        : true;

      const matchesStatus =
        this.filterStatus === 'all' || student.estado === this.filterStatus;

      return matchesName && matchesStatus;
    });

    this.dataSource.setData(filteredData);
  }

  getFullName(student: Student) {
    return `${student.nombre} ${student.apellidos}`;
  }

  isApproved(student: Student): boolean {
    return student.estado === 'Aprobado';
  }

}

class customDataSource extends DataSource<Student> {
  private _dataStream = new ReplaySubject<Student[]>();
  private data: Student[] = [];

  constructor(initialData: Student[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Student[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: Student[]) {
    this.data = data;
    this._dataStream.next(data);
  }

  hasData(): boolean {
    return this.data.length > 0;
  }
}
