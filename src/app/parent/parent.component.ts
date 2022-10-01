import { Component } from '@angular/core';
import { Grade } from './child/child.component';

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  math?: number;
  physic?: number;

  getGrade(grade: Grade) {
    this.math = grade.math;
    this.physic = grade.physic;
  }
}
