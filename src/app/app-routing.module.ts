import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { GroupComponent } from './group/group.component';
import { SchoolComponent } from './school/school.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'group', component: GroupComponent },
  { path: 'school', component: SchoolComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }, // Перенаправление по умолчанию
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
