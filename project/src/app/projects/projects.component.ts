import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'sew-projects',
//   templateUrl: './projects.component.html',
//   styleUrls: ['./projects.component.css']
// })
@Component({
  template: `<router-outlet></router-outlet>`,
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
