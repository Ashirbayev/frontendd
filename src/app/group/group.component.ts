import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  groups: any[] = [];
  schools: any[] = [];
  newGroupName: string = '';
  selectedSchoolId: number | null = null; // ID выбранной школы

  constructor(
    private groupService: GroupService,
    private schoolService: SchoolService
  ) {}

  ngOnInit(): void {
    this.loadGroups();
    this.loadSchools(); // Загружаем список школ
  }

  loadGroups(): void {
    this.groupService.getGroups().subscribe((data) => {
      this.groups = data;
    });
  }

  loadSchools(): void {
    this.schoolService.getSchools().subscribe((data) => {
      this.schools = data;
    });
  }

  addGroup(): void {
    if (this.newGroupName.trim() && this.selectedSchoolId) {
      const newGroup = { name: this.newGroupName, school_id: this.selectedSchoolId };

      this.groupService.addGroup(newGroup).subscribe(() => {
        this.loadGroups();
        this.newGroupName = '';
        this.selectedSchoolId = null;
      });
    }
  }

  deleteGroup(id: number): void {
    this.groupService.deleteGroup(id).subscribe(() => {
      this.loadGroups();
    });
  }
}
