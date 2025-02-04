import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss'],
})
export class SchoolComponent implements OnInit {
  schools: any[] = [];
  newSchoolName: string = '';

  constructor(private schoolService: SchoolService) {}

  ngOnInit(): void {
    this.loadSchools();
  }

  loadSchools(): void {
    this.schoolService.getSchools().subscribe((data) => {
      this.schools = data;
    });
  }

  addSchool(): void {
    if (this.newSchoolName.trim()) {
      this.schoolService.addSchool(this.newSchoolName).subscribe(() => {
        this.loadSchools();
        this.newSchoolName = '';
      });
    }
  }

  deleteSchool(id: number): void {
    this.schoolService.deleteSchool(id).subscribe(() => {
      this.loadSchools();
    });
  }
}
