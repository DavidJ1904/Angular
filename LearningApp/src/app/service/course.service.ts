import { Injectable } from '@angular/core';
import { course } from '../model/course';
import { courseData } from '../model/data/courseData';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private course:course=courseData
  constructor() { }

  getCourse():course{
    return this.course
  }
}
