import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DepartmentsComponent } from './departments/departments.component';
import { ViewComponent } from './view/view.component';
import { EmployeeComponent } from './employee/employee.component';
import { PayrollComponent } from './payroll/payroll.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { EditComponent } from './view/edit/edit.component';
import { AddComponent } from './view/add/add.component';

export const routes = [
  { path: 'departments', component: DepartmentsComponent },
  { path: 'view', component: ViewComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'payroll', component: PayrollComponent },
  { path: 'holidays', component: HolidaysComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit', component: EditComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DepartmentsComponent, ViewComponent, EmployeeComponent, PayrollComponent, HolidaysComponent, EditComponent, AddComponent,
  ],
  exports: [
    DepartmentsComponent, ViewComponent, EmployeeComponent, PayrollComponent, HolidaysComponent, EditComponent, AddComponent
  ]
})
export class PagesModule { }
