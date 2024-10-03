import { Component, OnInit } from '@angular/core';
import { course } from '../../model/course';
import { CourseService } from '../../service/course.service';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [],
  templateUrl: './learning.component.html',
})
export class LearningComponent implements OnInit {
  
  learning!: course
  constructor(private service:CourseService){}

  ngOnInit(): void {
    this.learning=this.service.getCourse();
  }
}
