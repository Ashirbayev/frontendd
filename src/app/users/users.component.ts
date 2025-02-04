import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { GroupService } from '../services/group.service';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  schools: any[] = [];
  groups: any[] = [];
  filteredUsers: any[] = [];

  userName: string = '';
  age: number | null = null;
  schoolId: number | null = null;
  groupId: number | null = null;

  // Для добавления пользователя
  newUserName: string = '';
  newUserAge: number | null = null;
  newUserGroupId: number | null = null;

  // Переключение между вкладками
  isFilterActive: boolean = true;

  constructor(
    private userService: UserService,
    private groupService: GroupService,
    private schoolService: SchoolService
  ) {}

  ngOnInit(): void {
    this.loadSchools();
    this.loadGroups();
    this.filterUsers();
  }

  loadSchools(): void {
    this.schoolService.getSchools().subscribe((data) => {
      this.schools = data;
    });
  }

  loadGroups(): void {
    this.groupService.getGroups().subscribe((data) => {
      this.groups = data;
    });
  }

  // Функция для фильтрации пользователей
  filterUsers(): void {
    const params = {
      userName: this.userName,
      age: this.age,
      schoolId: this.schoolId,
      groupId: this.groupId
    };

    this.userService.filterUsers(params).subscribe((data) => {
      this.filteredUsers = data;
    });
  }

  // Функция для добавления нового пользователя
  addUser(): void {
    const newUser = {
      name: this.newUserName,
      age: this.newUserAge,
      group_id: this.newUserGroupId
    };

    this.userService.addUser(newUser).subscribe((data) => {
      this.filteredUsers.push(data); // Добавляем пользователя в список
      this.newUserName = ''; // Очищаем форму
      this.newUserAge = null;
      this.newUserGroupId = null;
    });
  }

  // Переключение на вкладку фильтра
  showFilter(): void {
    this.isFilterActive = true;
  }

  // Переключение на вкладку добавления пользователя
  showAddUser(): void {
    this.isFilterActive = false;
  }
}
