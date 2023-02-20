import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../_shared/models/employee';
import { EmployeeService } from '../_shared/services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent implements OnInit {
  employees$: Observable<Employee[]> = new Observable();

  constructor(private employeesService: EmployeeService) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  deleteEmployee(id: string) {
    this.employeesService.deleteEmployee(id).subscribe({
      next: () => this.fetchEmployees(),
    });
  }

  fetchEmployees() {
    this.employees$ = this.employeesService.getEmployees();
  }
}
